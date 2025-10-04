import React from "react";
import { useNavigate } from "react-router-dom";
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image:
      "https://m.media-amazon.com/images/I/81af+MCATTL.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    image:
      "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image:
      "https://m.media-amazon.com/images/I/81OtwkiBf6L.jpg",
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    image:
      "https://m.media-amazon.com/images/I/71GugXkY4oL.jpg",
  },
];

const BookList = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col" id="book-list-page">
        {/* Book Cards Section */}
        <div className="flex-1 container mx-auto px-6 py-10">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Available Books
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <div onClick={() => navigate(`/book/${book.id}`)}
                key={book.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center text-center"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-40 h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-4">{book.author}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white mt-8 py-4 border-t">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 px-6">
            <div className="flex gap-4 mb-2 sm:mb-0">
              <a href="#" className="hover:text-blue-500">Contact</a>
              <a href="#" className="hover:text-blue-500">Privacy Policy</a>
              <a href="#" className="hover:text-blue-500">Terms of Service</a>
            </div>
            <div className="flex gap-4 text-gray-500">
              <a href="#" className="hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-blue-500"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-blue-500"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BookList;
