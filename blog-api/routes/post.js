import express from 'express'
import { addPosts, deletePost, getPost, getPosts, updatePost } from '../controllers/posts.js';
const router = express.Router()

router.post('/posts',addPosts)
router.put('/posts/:id',updatePost);
router.delete('/posts/:id',deletePost);
router.get('/posts/:id',getPost);
router.get('/posts',getPosts);
export default router

