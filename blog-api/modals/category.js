import mongoose from "mongoose";

const createCatSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
},{timestamps:true})

const catSchema = mongoose.model('Category',createCatSchema)
export default catSchema