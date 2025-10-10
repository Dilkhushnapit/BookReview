import express from 'express';
import { addBook, addReview, getAllBooks, getBookById,getReviewsByBook } from '../controllers/book.js';
import authUser from '../middleware/authuser.js';
import { get } from 'mongoose';

const bookRouter = express.Router();

bookRouter.get('/bookslist', getAllBooks);
bookRouter.get('/books/:bookId', getBookById);
bookRouter.post('/', authUser, addBook);
bookRouter.get('/reviews/:bookId', getReviewsByBook);

export default bookRouter;