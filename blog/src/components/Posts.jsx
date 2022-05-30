import React from 'react'
import '../styles/posts.scss'
import Post from './Post'
const Posts = () => {
  return (
    <div className="posts">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Posts