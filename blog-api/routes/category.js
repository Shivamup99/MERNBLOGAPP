import express from 'express'
import { addCat, getCats } from '../controllers/category.js'
const router = express.Router()

router.post('/category',addCat)
router.get('/category',getCats)

export default router