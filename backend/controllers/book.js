import bookModel from "../model/bookModel";
import reviewModel from "../model/reviewModel.js";

// add book
export const addBook = async (req, res) => {
  try {
    const { title, author, description, genre, year, userId } = req.body;
    if (!title || !author || !description || !genre || !year || !userId) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const newBook = new bookModel({
      title,
      author,
      description,
      genre,
      year,
      userId,
    });

    await newBook.save();
    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// get all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.find();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Server error" });
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
    res.status(200).json(book);
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