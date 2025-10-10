import React, { useState } from "react";
import { data, useParams } from "react-router-dom";
import { AppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";
const ReviewForm = () => {
  const {backendUrl,token}=React.useContext(AppContext);

  const navigate = useNavigate();
  const { bookId } = useParams();
  const [username,setUserdata]=useState(null);
  // Fetch user data to get the username
  const fetchUserData=async()=>{
    try {
      const {data}=await axios.get(backendUrl+'/api/user/user-data',{headers:{token}});
      if(data.success)
      {
        setUserdata(data.user.name);
        console.log('username:', data.user.name);
      }
      else{
        console.error("Failed to fetch user data");
      }
      
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  useEffect(()=>{
    if(token)
    {
      fetchUserData();
    }
  },[]);
  
  useEffect(() => {
  if (username) {
    setFormData((prev) => ({ ...prev, userName: username }));
  }
}, [username]);


  const [formData, setFormData] = useState({
    rating: "",
    reviewText: "",
    bookId: bookId,
    userName: username,
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!token)
    {
      toast.error("You must be logged in to submit a review."); // Show error message
      navigate('/login');
    }
    else
    {
      const {data}=await axios.post(backendUrl+`/api/user/add-review`,{...formData},{headers:{token}});
      if(data.success)
      {
        toast.success("Review submitted successfully!");
        navigate(`/book/${bookId}`);
      }
      else
      {
        toast.error("Failed to submit review.");
      }

    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Write a Review
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}


          {/* Rating Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Rating (1–5)
            </label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Rating</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} ⭐
                </option>
              ))}
            </select>
          </div>

          {/* Review Textarea */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Review
            </label>
            <textarea
              name="reviewText"
              placeholder="Write your review here..."
              value={formData.reviewText}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
