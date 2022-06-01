import User from '../modals/user.js'
import bcrypt from 'bcryptjs'
import Posts from '../modals/posts.js'
export const updateUser = async(req,res)=>{
    if(req.body.password){
        const salt = bcrypt.genSaltSync(10)
        req.body.password = bcrypt.hashSync(req.body.password,salt)
    }
    try {
        const user = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body
    },{new:true})
    res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}
// delete user with their posts
export const deleteUser = async(req,res)=>{
    try{
        const preUser = await User.findById(req.params.id)
    try {
        await Posts.deleteMany({username:preUser.username})
     const user = await User.findByIdAndDelete(req.params.id)
     if(user){
         res.status(200).json('user deleted')
     } else{
         res.status(400).json('user not found')
     }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
  } catch{
    res.status(403).json('user not found')
  }
 }

 export const getUser = async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        const {password , ...others} = user._doc
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}