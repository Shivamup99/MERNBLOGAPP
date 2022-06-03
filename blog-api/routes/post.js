import express from 'express'
import { addPosts, deletePost, getPost, getPosts, updatePost } from '../controllers/posts.js';
import multer from 'multer';
const router = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./upload");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
      }
    },
  }).single("photo")

router.post('/posts',upload,addPosts)
router.put('/posts/:id',updatePost);
router.delete('/posts/:id',deletePost);
router.get('/posts/:id',getPost);
router.get('/posts',getPosts);
export default router

