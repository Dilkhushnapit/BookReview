// import React, { useState,useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AppContext } from '../context/appContext';
// import { toast } from 'react-toastify';
// import { assets } from '../assets/assets';
// import axios from 'axios';
// const AddEditBook = () => {
//     const { token, backendUrl } = useContext(AppContext);
// console.log(token);
//   const [title, setTitle] = useState('');//initialData?.title || 
//   const [author, setAuthor] = useState('');//initialData?.author ||'');
//   const [genre, setGenre] = useState('');//initialData?.genre || '');
//   const [year, setYear] = useState('');//initialData?.year || '');
//   const [image, setImage] = useState('');//initialData?.image || '');

//   const [description, setDescription] = useState('');//initialData?.description || '');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if(!token)
//     {
//       toast.error("You must be logged in to add or edit a book."); // Show error message
//       navigate('/login');
//     }
//     if (!title || !author || !genre || !description) {
//       toast.error('Please fill in all fields');
//       return;
//     }
//     const {data}= await axios.post(backendUrl+'/api/user/add-book',{title,author,genre,year,description,image},{headers:{token}});
//     if(data.success)
//     {
//       console.log(data);
//       toast.success(data.message);
//       navigate('/'); 
//     }
//     else
//     {
//       toast.error(data.message);
//     }
  
//     // Pass data to parent component or make API call
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
//       >
//         <h2 className="text-xl font-semibold mb-6">Add/Edit Book</h2>
//         <div className=' flex items-center gap-6 mb-8 text-gray-500 '>
//                 <label htmlFor="doc-img">
//                      <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={image?URL.createObjectURL(image): assets.upload_area} alt="" />
//                 </label>
//                 <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='book-img' hidden/>
//                 <p>Upload Doctor <br /> Pitcture</p>
               
//             </div>

//         <div className="mb-4">
//           <label className="block mb-1">Title</label>
//           <input
//             type="text"
//             placeholder="Enter book title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1">Author</label>
//           <input
//             type="text"
//             placeholder="Enter author's name"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1">Genre</label>
//           <input
//             type="text"
//             placeholder="Enter genre"
//             value={genre}
//             onChange={(e) => setGenre(e.target.value)}
//             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1">Year</label>
//           <input
//             type="number"
//             placeholder="Enter Publication year"
//             value={year}
//             onChange={(e) => setYear(e.target.value)}
//             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>
        

//         <div className="mb-6">
//           <label className="block mb-1">Description</label>
//           <textarea
//             placeholder="Enter book description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>

//         <button onClick={handleSubmit}
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
//         >
//           Submit
//         </button>

//         <p
//           onClick={() => navigate('/')}
//           className="text-center text-blue-500 mt-4 cursor-pointer underline"
//         >
//           Back to Book List
//         </p>
//       </form>
//     </div>
//   );
// };

// export default AddEditBook;
import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/appContext';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
import axios from 'axios';
const AddEditBook = () => {
    const { token, backendUrl } = useContext(AppContext);
console.log(token);
  const [title, setTitle] = useState('');//initialData?.title || 
  const [author, setAuthor] = useState('');//initialData?.author ||'');
  const [genre, setGenre] = useState('');//initialData?.genre || '');
  const [year, setYear] = useState('');//initialData?.year || '');
  const [image, setImage] = useState('');//initialData?.image || '');

  const [description, setDescription] = useState('');//initialData?.description || '');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  if(!token){
    toast.error("You must be logged in to add or edit a book.");
    navigate('/login');
    return;
  }
  if (!title || !author || !genre || !description) {
    toast.error('Please fill in all fields');
    return;
  }

  try {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('genre', genre);
    formData.append('year', year);
    formData.append('description', description);
    if(image) formData.append('image', image);

    const { data } = await axios.post(
      backendUrl + '/api/user/add-book',
      formData,
      { headers: { 'token': token, 'Content-Type': 'multipart/form-data' } }
    );

    if(data.success){
      toast.success(data.message);
      navigate('/');
    } else {
      toast.error(data.message);
    }

  } catch (err) {
    console.error(err);
    toast.error('Error adding book');
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-6">Add/Edit Book</h2>
      <label htmlFor="book-img">
  <img
    className="w-16 bg-gray-100 rounded-full cursor-pointer"
    src={image ? URL.createObjectURL(image) : assets.upload_icon}
    alt=""
  />
</label>
<input
  onChange={(e) => setImage(e.target.files[0])}
  type="file"
  id="book-img"
  hidden
/>
<p>Upload Book Picture</p>

        <div className="mb-4">
          <label className="block mb-1">Title</label>
          <input
            type="text"
            placeholder="Enter book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Author</label>
          <input
            type="text"
            placeholder="Enter author's name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Genre</label>
          <input
            type="text"
            placeholder="Enter genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Year</label>
          <input
            type="number"
            placeholder="Enter Publication year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        

        <div className="mb-6">
          <label className="block mb-1">Description</label>
          <textarea
            placeholder="Enter book description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button onClick={handleSubmit}
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>

        <p
          onClick={() => navigate('/')}
          className="text-center text-blue-500 mt-4 cursor-pointer underline"
        >
          Back to Book List
        </p>
      </form>
    </div>
  );
};

export default AddEditBook;