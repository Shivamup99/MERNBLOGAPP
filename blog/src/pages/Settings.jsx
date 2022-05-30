import React from 'react'
import '../styles/settings.scss'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import Footer from '../components/Footer'
const Settings = () => {
  return (
      <>
      <Navbar/>
      <div className='settings'>
          <div className="setting-container">
          <div className="setting-title">
              <span className="update-title">Update Your Account</span>
              <span className="delete-title">Delete Account</span>
          </div>
          <form className='setting-form'>
            <label>Profile Picture</label> 
            <div className="setting-pp">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Dui-CG5_VcIxTHxks0tTiME_1rIvYeIfMA&usqp=CAU" 
             alt="sss" className='pp-img' />
             <label htmlFor='fileInput'>
                 <DriveFolderUploadOutlined className='file-icon'/>
             </label>
             <input type='file' id='fileInput' style={{display:'none'}}/>
            </div> 
            <label>Username</label>
            <input type="text" placeholder='Shivam Upadhyay'/>
            <label>Email</label>
            <input type="email" placeholder='shivam@gmail.com'/>
            <label>Password</label>
            <input type="password" placeholder='Password'/>
            <button className='set-btn'>Update</button>
          </form>
          </div>
      <div className="setting-wrap">
          <Sidebar/>
      </div>
      </div>
      <Footer/>
      </>
  )
}

export default Settings