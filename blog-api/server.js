import express from 'express'
import mongoose from 'mongoose'
const PORT = process.env.PORT || 5000;
import dotenv from 'dotenv'
dotenv.config()
import auth from './routes/auth.js'
import user from './routes/user.js'
import post from './routes/post.js'
import cat from './routes/category.js'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors());
app.use("/upload", express.static("upload"));

const url = process.env.MONGO_URL;
mongoose.connect(url).then(()=>console.log('Database Connected')).catch((err)=>console.log(err))

app.use('/api',auth)
app.use('/api',user)
app.use('/api',post)
app.use('/api',cat)
app.listen(PORT,()=>console.log(`server is running ${PORT}`))
