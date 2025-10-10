
import express from 'express'
import { registerUser, loginUser,getuserdata } from '../controllers/user.js'
import { addBook, addReview } from '../controllers/book.js'
import authUser from '../middleware/authuser.js'
import upload from '../middleware/multter.js'
const userRouter =express.Router()
userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/add-book',authUser,upload.single('image'),addBook)
userRouter.post('/add-review',authUser,addReview)
userRouter.get('/user-data',authUser,getuserdata)


export default userRouter;