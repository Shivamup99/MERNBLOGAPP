import express from 'express'
import { deleteUser, getUser, updateUser } from '../controllers/user.js'
const router = express.Router()

router.put('/user/:id',updateUser);
router.delete('/user/:id',deleteUser);
router.get('/user/:id',getUser);

export default router

//https://login.microsoftonline.com/beb276ac-6e9f-498e-8e31-019ee666decd/oauth2/authorize?client_id=00000003-0000-0ff1-ce00-000000000000&response_mode=form_post&protectedtoken=true&response_type=code%20id_token&resource=00000003-0000-0ff1-ce00-000000000000&scope=openid&nonce=4BCB5D6F9FADDCDECC22CBA9336E43C13CFA4C4643E3E576-23703E885C7603A81F405C7DCAF2543830F704EA6E9FE33560EB291F9A43760E&redirect_uri=https%3A%2F%2Fsingtel.sharepoint.com%2F_forms%2Fdefault.aspx&state=OD0w&claims=%7B%22id_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&wsucxt=1&cobrandid=11bd8083-87e0-41b5-bb78-0bc43c8a8e8a&client-request-id=f5be42a0-c0d0-1000-14ed-16f7411d8f3b