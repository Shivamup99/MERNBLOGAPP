import { Delete, Edit } from '@mui/icons-material'
import React, { useEffect } from 'react'
import '../styles/singlePost.scss'
import {useDispatch,useSelector} from 'react-redux'
import { selectedPosts } from '../feature/postSlice'
import { fetchSinglePost } from '../feature/postAction'
import { useParams } from 'react-router-dom'
const SinglePost = () => {
  const id = useParams()
  const dispatch = useDispatch()
  const {posts} = useSelector(selectedPosts)
  useEffect(()=>{
    fetchSinglePost(dispatch,id)
  },[])
  return (
    <>
     <div className='s-post'>
        <div className="s-post-wrapper">
            <img src="https://www.diocesecpa.org/blog/wp-content/uploads/2019/07/Focus.jpg" alt="sjjs" />
        <div className="s-title">{posts?.title}
        <div className="action">
            <Edit className='action-icon'/>
            <Delete className='action-icon'/>
        </div>
        </div>
        <div className="s-post-info">
            <span className="s-post-auth">Author: <b>{posts?.username}</b></span>
            <span className="s-post-date">{new Date(posts?.createdAt).toDateString()}</span>
        </div>
        <p className='s-post-desc'>
         {posts?.desc}
        </p>
        </div>
    </div>
    </>
  )
}

export default SinglePost