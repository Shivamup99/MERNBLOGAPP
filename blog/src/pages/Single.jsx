import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import SinglePost from '../components/SinglePost'
import '../styles/single.scss'
const Single = () => {
  return (
    <>
    <div className='single'>
      <Navbar/>
      <div className="single-posts">
      <SinglePost/>
        <Sidebar/>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Single