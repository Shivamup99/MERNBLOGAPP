import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/posts.scss'
const Post = ({post}) => {
  const PF = 'http://localhost:5000/'
  return (
    <div className='post'>
      {post.photo && (
        <img src={PF+post.photo} alt="sddhudh" />
      )}
       
        <div className="post-info">
            <div className="post-cats">
              {post?.categories && post.categories.map((item,i)=>(
                 <span className="post-cat" key={i}>{item}</span>
              ))}

            </div>
            <span className="post-title">
              {post?.title}</span>
            <hr/>
            <span className="post-date">{new Date(post?.createdAt).toDateString()}</span>
          <p className="post-desc">
          {post?.desc}
        </p>
        </div>
        <Link to={`/single/${post._id}`} className='view-blog'>view the blog</Link>
    </div>
  )
}

export default Post