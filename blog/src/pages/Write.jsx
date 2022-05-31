import { DriveFolderUploadOutlined } from '@mui/icons-material'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/write.scss'
const Write = () => {
  return (
      <>
      <Navbar/>
      <div className='write'>
          <img src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg" alt="ddd" 
          className='w-img' />
          <form className="w-form">
              <div className="form-group">
                  <label htmlFor='fileInput'>
                     <span>Upload Image</span>
                      <DriveFolderUploadOutlined/>
                  </label>
                  <input type="file" id="fileInput" style={{display:'none'}}/>
                  <input type="text" name="title" className='w-input' placeholder='Write Your Title' />
              </div>
              <div className="form-group">
                  <textarea placeholder='Tell your story....' type='text'
                   className='w-input w-text'/>
              </div>
              <button className='w-submit'>Publish</button>
          </form>
      </div>
      <Footer/>
      </>
  )
}

export default Write