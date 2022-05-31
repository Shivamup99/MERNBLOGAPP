import express from 'express'
import mongoose from 'mongoose'
const PORT = process.env.PORT || 5000;
import dotenv from 'dotenv'
dotenv.config()
import auth from './routes/auth.js'
import user from './routes/user.js'
const app = express()
app.use(express.json())
const url = process.env.MONGO_URL;
mongoose.connect(url).then(()=>console.log('Database Connected')).catch((err)=>console.log(err))

app.use('/api',auth)
app.use('/api',user)
app.listen(PORT,()=>console.log(`server is running ${PORT}`))
