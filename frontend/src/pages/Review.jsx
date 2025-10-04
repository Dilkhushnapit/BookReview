import React, { useState } from "react";

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    rating: "",
    review: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Review:", formData);
    alert("Review submitted successfully!");
    setFormData({ name: "", rating: "", review: "" });
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
              name="review"
              placeholder="Write your review here..."
              value={formData.review}
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
