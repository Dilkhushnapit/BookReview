import bookModel from "../model/bookModel.js";
import reviewModel from "../model/reviewModel.js";
import {v2 as cloudinary} from "cloudinary"
// add book
export const addBook = async (req, res) => {
  try {
    const { title, author, description, genre, year } = req.body;
    const userId = req.userId; // Get userId from auth middleware
    const imageFile = req.file ; // Assuming you're using multer for file uploads
    if (!title || !author || !description || !genre || !year || !userId) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }
    const existingBook = await bookModel.findOne({ title });

    if (existingBook) {
      return res.json({
        success: false,
        message: "Book with this title already exists.",
      });
    }

    const imageUpload= await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
    const imageUrl = imageUpload.secure_url


    const newBook = new bookModel({
      title,
      author,
      description,
      genre,
      year,
      userId,
      image: imageUrl, 
    });

    await newBook.save();
    res.json({ message: "Book added successfully", success: true, token: req.token });
  } catch (error) {
    console.error("Error adding book:", error);
    res.json({ message: "Book Not added", success: false, token: req.token });
  }
};

// get all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.find();
    res.json({ success: true, books });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

// get book by id
export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModel.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({success: true, book });
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// delete book
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await bookModel.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    // Also delete associated reviews
    await reviewModel.deleteMany({ bookId: id });
    res.status(200).json({ message: "Book and associated reviews deleted" });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// update book
export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, description, genre, year } = req.body;

    const updatedBook = await bookModel.findByIdAndUpdate(
      id,
      { title, author, description, genre, year },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book updated", book: updatedBook });
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// get books by user
export const getBooksByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const books = await bookModel.find({ userId });
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching user's books:", error);
    res.status(500).json({ message: "Server error" });
  }
};          



// review// add review
export const addReview = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Debugging line
    const { bookId, rating, reviewText, userName } = req.body;
    
    const userId = req.userId; // Get userId from auth middleware

    if (!bookId || !rating || !reviewText || !userId) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    // Check if the book exists
    const book = await bookModel.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    const newReview = new reviewModel({
      bookId,
      userId,
      rating,
      reviewText,
      userName,
    });

    await newReview.save();
    res
      .status(201)
      .json({ success: true, message: "Review added successfully"});
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
}

// get reviews for a book
export const getReviewsByBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const reviews = await reviewModel.find({ bookId });
    console.log("Fetched Reviews:", reviews); 
    res.status(200).json({ success: true, reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
}