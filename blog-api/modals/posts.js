import mongoose from "mongoose";

const createPostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true,
    },
    categories:{
        type:Array,
        required:false
    },
    username:{
        type:String,
        required:true
    },
    photo:{
        type:String
    }
},{timestamps:true})

const postSchema = mongoose.model('Posts',createPostSchema)
export default postSchema