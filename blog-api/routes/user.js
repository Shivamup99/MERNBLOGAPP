import express from 'express'
import { deleteUser, getUser, updateUser } from '../controllers/user.js'
const router = express.Router()

router.put('/user/:id',updateUser);
router.delete('/user/:id',deleteUser);
router.get('/user/:id',getUser);

export default router

//https://singtel.service-now.com/sp/sp?id=sc_cat_item&sys_id=1ce18d9fdbcee7006c26a8061b96193d&sysparm_category=e15706fc0a0a0aa7007fc21e1ab70c2f