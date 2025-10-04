import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEditBook = ({ initialData = null, onSubmit }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [author, setAuthor] = useState(initialData?.author || '');
  const [genre, setGenre] = useState(initialData?.genre || '');
  const [year, setYear] = useState(initialData?.year || '');

  const [description, setDescription] = useState(initialData?.description || '');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass data to parent component or make API call
    onSubmit({ title, author, genre, description });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-6">Add/Edit Book</h2>

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
            type="text"
            placeholder="Enter Publication year"
            value={year}
            onChange={(e) => setGenre(e.target.value)}
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

        <button
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
