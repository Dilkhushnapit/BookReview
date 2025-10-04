import mongoose from "mongoose";
const bookSchema =new  mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    description:{type:String,required:true},
    genre:{type:String,required:true},
    year:{type:String,required:true},
    userId:{type:String,required:true},
    // reviews:{type:Array,default:[]}, --- IGNORE ---
    // averageRating:{type:Number,default:0}, --- IGNORE ---
    // reviewCount:{type:Number,default:0}, --- IGNORE ---
  
},{minimize:false})

const bookModel =mongoose.model.book || mongoose.model('book',bookSchema)
export default bookModel