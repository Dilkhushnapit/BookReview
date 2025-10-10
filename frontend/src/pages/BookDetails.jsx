import React from "react";
import { Star, ArrowLeft } from "lucide-react";
import { useNavigate ,useParams} from "react-router-dom";
import { useState} from "react";
import { AppContext } from "../context/appContext";
import { useEffect } from "react";
import { useContext } from "react";
import axios from "axios";
const BookDetails = () => {
  const { bookId } = useParams()
  console.log(bookId);
  const [bookData,setBookData]=useState({})
  const { books } = useContext(AppContext);
  const {backendUrl,token}=useContext(AppContext)


  const fetchBookInfo =  () =>{
     const bookInfo=  books.find(book=> book._id=== bookId);
         setBookData(bookInfo || {});
    console.log("✅ Found Book Info:", bookInfo);
  }
  console.log('bookdata');
  console.log(books);
  console.log(bookData);


  useEffect(() => {

    if (books && books.length > 0) {
      fetchBookInfo();
    } else {
      console.log("⏳ Waiting for books to load...");
    }
  }, [bookId, books]);


  const navigate = useNavigate();

  const [reviews,setReviews]=useState([]);
  const fetchReviews=async()=>{
    try {
      const {data}=await axios(backendUrl+'/api/book/reviews/'+bookId);
      if(data.success)
      {
        setReviews(data.reviews);
      }
      
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  }
  useEffect(()=>{
    fetchReviews();
  },[bookId])
  console.log('Reviews:', reviews);
  // Dummy rating for illustration

  const rating = (reviews) => {
    if (reviews.length === 0) return 0;
    let total = 0;
    for(const review of reviews)
    {
      total+=review.rating;
    }
    return total / reviews.length;
  }
  console.log('Average Rating:', rating(reviews));
  const avgRating = rating(reviews);




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
            src={bookData.image}
            // src="https://m.media-amazon.com/images/I/81af+MCATTL.jpg"
            alt="The Great Gatsby"
            className="w-40 h-56 object-cover rounded-lg"
          />

          {/* Book Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{bookData.title}</h2>
            <p className="text-gray-600 mt-1">by {bookData.author}</p>
            <p className="text-gray-500 mt-2">
              <strong>Genre:</strong> {bookData.genre}
            </p>
            <p className="text-gray-500 mt-2">
              <strong>Publication Year:</strong> {bookData.year}
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              {bookData.description}
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
                    i < Math.floor(avgRating)
                      ? "text-yellow-400 fill-yellow-400"
                      : i < Math.ceil(avgRating)
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
                "{review.reviewText}" - <span className="italic">{review.userName}</span>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => navigate(`/review/${bookId}`)} className="flex items-center gap-2 mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition">
           Give your review
        </button>
      </div>


    </div>
  );
};

export default BookDetails;
