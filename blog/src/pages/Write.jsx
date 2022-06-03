import { DriveFolderUploadOutlined } from '@mui/icons-material'
import React, { useState , useEffect} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/write.scss'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import Select from 'react-select'
import {useDispatch,useSelector} from 'react-redux'
import { selectedCategory } from '../feature/categorySlice'
import { fetchCategory } from '../feature/categoryAction'
const Write = () => {
    const dispatch = useDispatch()
    const {category,isFetching} = useSelector(selectedCategory)
    const navigate = useNavigate()
    const {user} = useSelector(state=>state.auth);
    const handleLogin =()=>{
        navigate('/login')
    }
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [categories,setCategories] = useState('')
    const [photo,setPhoto] = useState(null)
    const handlePublish =async(e)=>{
        e.preventDefault();
            const formData = new FormData()
            formData.append('title',title)
            formData.append('desc',desc)
            formData.append('username',user.username)
            formData.append('photo',photo)
         
        try {
            const res = await axios.post('http://localhost:5000/api/posts',formData)
                toast.success('data uploaded')
                window.location.replace('/',res.data._id)
        } catch (error) {
            toast.error(error)
        }
    }
    useEffect(()=>{
      fetchCategory(dispatch)
    },[dispatch])

    const options = category.map((item)=>
        [{value:item.name , label:item.name}]
    )

  return (
      <>
      <Navbar/>
      <div className='write'>
          {photo && (
             <img src={URL.createObjectURL(photo)} alt="ddd" 
             className='w-img' />
          )}
          <form className="w-form" onSubmit={handlePublish}>
              <div className="form-group">
                  <label htmlFor='fileInput'>
                     <span>Upload Image</span>
                      <DriveFolderUploadOutlined/>
                  </label>
                  <input type="file" id="fileInput" style={{display:'none'}} onChange={(e)=>setPhoto(e.target.files[0])}/>
                  <input type="text" name="title" className='w-input' placeholder='Write Your Title' onChange={(e)=>setTitle(e.target.value)} />
                  <Select options={options} className='w-input-select' placeholder='Select Categories' onChange={(e)=>setCategories(e.target.value)}/>
              </div>
              <div className="form-group">
                  <textarea placeholder='Tell your story....' type='text' onChange={(e)=>setDesc(e.target.value)} 
                   className='w-input w-text'/>
              </div>
              {
                  user ?  <button className='w-submit' type='submit'>Publish</button> : <button className='w-submit' onClick={handleLogin}>Login To Post</button> 
              }
          </form>
      </div>
      <div className="bottom-write">
      <Footer/>
      </div>
    
      </>
  )
}

export default Write