import User from '../modals/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async(req,res)=>{
    const preUser = await User.findOne({email:req.body.email})
    if(preUser) return res.status(400).json('user exists')
    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(req.body.password,salt)
    try {
        const user = new User({
            name:req.body.name,
            email:req.body.email,
            password:hashPassword,
            username:req.body.username
        })
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const login = async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        if(!user) return res.status(400).json('wrong credentials')
        const isValidPass = bcrypt.compareSync(req.body.password,user.password)
        if(!isValidPass) return res.status(403).json('wrong password')
        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin},process.env.JWT_SECRET,{expiresIn:'2d'})
            const {password, ...otherDetails} = user._doc
            res.status(201).json({...otherDetails,token}) 
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}