import mongoose from "mongoose";
const reviewSchema =new  mongoose.Schema({
    bookId:{type:String,required:true},
    userId:{type:String,required:true},
    rating:{type:Number,required:true},
    reviewText:{type:String,required:true},
},{minimize:false})
const reviewModel =mongoose.model.review || mongoose.model('review',reviewSchema)
export default reviewModel
