import Posts from '../modals/posts.js'

export const addPosts = async(req,res)=>{
    try {
    const post = new Posts(req.body)
    const addPost = await post.save()
    res.status(201).json(addPost)
    } catch (error) {
      res.status(500).json({message:error.message})  
    }
}

export const updatePost  = async(req,res)=>{
    try {
        const post = await Posts.findByIdAndUpdate(req.params.id,{
            $set: req.body
    },{new:true})
    res.status(200).json(post)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const deletePost = async(req,res)=>{
    try {
     const post = await Posts.findByIdAndDelete(req.params.id)
     if(post){
         res.status(200).json('post deleted')
     } else{
         res.status(400).json('post not found')
     }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
 }

 export const getPost = async(req,res)=>{
    try {
        const post = await Posts.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//get all posts with conditions
export const getPosts = async(req,res)=>{
    const username = req.query.user
    const qCategory = req.query.category
    try {
        let post
        if(username){
            post = await Posts.find({username}).sort({_id:-1}).limit(4)
        } else if(qCategory){
            post = await Posts.find({categories:{
                $in:[qCategory]
            }})
        } else{
            post= await Posts.find()
        }
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}