import React from "react";
import { Star, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const BookDetails = () => {
  const navigate = useNavigate();
  const [year, setYear] = useState(1925);
  const reviews = [
    {
      text: "A brilliant evocation of the Jazz Age, and a timeless critique of the American dream.",
      author: "Jessica Harper",
    },
    {
      text: "Fitzgerald's prose is superb, and the narrative is captivating.",
      author: "Michael Smith",
    },
    {
      text: "A tragic story that is beautifully written and deeply thought-provoking.",
      author: "Emily Johnson",
    },
  ];

  const rating = 4.5;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header */}
      <div className="w-full max-w-5xl flex justify-between items-center bg-white shadow-sm p-4 rounded-lg mb-6">
        <h1 className="text-xl font-semibold flex items-center gap-2">
          <span className="text-black"></span> BookDetails
        </h1>
        <button onClick={() => navigate('/')} className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition">
          <ArrowLeft className="w-4 h-4" /> Back to Book List
        </button>
      </div>

      {/* Main Book Card */}
      <div className="bg-white w-full max-w-5xl p-6 rounded-2xl shadow">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Book Image */}
          <img
            src="https://m.media-amazon.com/images/I/81af+MCATTL.jpg"
            alt="The Great Gatsby"
            className="w-40 h-56 object-cover rounded-lg"
          />

          {/* Book Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">The Great Gatsby</h2>
            <p className="text-gray-600 mt-1">by F. Scott Fitzgerald</p>
            <p className="text-gray-500 mt-2">
              <strong>Genre:</strong> Classic Fiction
            </p>
            <p className="text-gray-500 mt-2">
              <strong>Publication Year:</strong> {year}
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Set in the Jazz Age on Long Island, the novel depicts narrator Nick
              Carraway's interactions with mysterious millionaire Jay Gatsby and
              Gatsby's obsession to reunite with his former lover, Daisy Buchanan.
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            Average Rating:
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : i < rating
                      ? "text-yellow-400 half-filled"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </h3>
        </div>

        {/* Reviews */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-800 mb-3">User Reviews</h3>
          <div className="space-y-3">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 p-3 rounded-xl shadow-sm text-gray-700"
              >
                "{review.text}" - <span className="italic">{review.author}</span>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => navigate('/review')} className="flex items-center gap-2 mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition">
           Give your review
        </button>
      </div>


    </div>
  );
};

export default BookDetails;
