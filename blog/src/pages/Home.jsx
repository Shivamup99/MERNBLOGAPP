import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'
import '../styles/home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <Hero/>
      </div>
      <div className="banners">
        <Banner/>
      </div>
      <div className="below">
        <Posts/>
        <Sidebar/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home