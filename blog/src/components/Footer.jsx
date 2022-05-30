import React from 'react'
import '../styles/footer.scss'
import {Copyright,FacebookOutlined, GitHub, Instagram, LinkedIn} from '@mui/icons-material'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="left">
            <h1>Hyroo Blog</h1>
        </div>
        <div className="center">
            <div className="copy-right">
            <Copyright className='foo-icon'/>
            <span>Copyright 2022-2023 <b>Hyroo.in</b></span>
            </div>
            <div className="link-foo">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            </div>
        </div>
        <div className='ss-icon'>
            <FacebookOutlined style={{color:'#4267b2'}}/>
            <Instagram style={{color:'#F70D1A'}}/>
            <LinkedIn style={{color:'#0041C2'}}/>
            <GitHub  style={{color:'#777'}}/>
        </div>
    </div>
  )
}

export default Footer