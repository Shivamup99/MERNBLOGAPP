import React, { useEffect } from 'react'
import '../styles/posts.scss'
import Post from './Post'
import {useDispatch,useSelector} from 'react-redux'
import { selectedPosts } from '../feature/postSlice'
import { fetchPost } from '../feature/postAction'
const Posts = () => {
  const dispatch = useDispatch()
  const {posts ,isFetching} = useSelector(selectedPosts)
  useEffect(()=>{
    fetchPost(dispatch)
  },[dispatch])
  console.log(posts)
  return (
    <div className="posts">
      {
      isFetching ? <span>Data Loading</span>
      :
      posts && posts.map((item)=>(
       <Post post={item} key={item._id}/>
      ))}
    </div>
  )
}

export default Posts