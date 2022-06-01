import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/posts.scss'
const Post = ({post}) => {
  return (
    <div className='post'>
        <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80" alt="sddhudh" />
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