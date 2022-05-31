import mongoose from "mongoose";

const createUserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default: false
    },
    profilePic:{
        type:String,
        default:''
    }
},{timestamps:true})

const userSchema = mongoose.model('User',createUserSchema)
export default userSchema