import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/posts.scss'
const Post = () => {
  return (
    <div className='post'>
        <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80" alt="sddhudh" />
        <div className="post-info">
            <div className="post-cats">
                <span className="post-cat">Technology</span>
                <span className="post-cat">Life</span>
            </div>
            <span className="post-title">
              The Nion Cammera</span>
            <hr/>
            <span className="post-date">1 houre ago</span>
          <p className="post-desc">
        I was focused intently on the one square foot of land beneath my feet that changed with each step that I took, drawing closer and closer to the goal of the end of Peter’s Mountain on our Appalachian Camino hike. It was a focus that was necessary as my hiking party and I traversed the section of the trail in our diocese, otherwise known as “Rocksylvania.” Ironic, a little, that we were out in the wilds to enjoy the grandeur and beauty of nature
        </p>
        </div>
        <Link to='/single/test' className='view-blog'>view the blog</Link>
    </div>
  )
}

export default Post