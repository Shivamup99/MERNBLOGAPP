import express from 'express'
import { deleteUser, getUser, updateUser } from '../controllers/user.js'
const router = express.Router()

router.put('/user/:id',updateUser);
router.delete('/user/:id',deleteUser);
router.get('/user/:id',getUser);

export default router

