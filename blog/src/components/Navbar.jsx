import React,{useState} from 'react'
import '../styles/navbar.scss'
import { AcUnit, Home, LockOpen, Login, LogoutOutlined, NoteAlt, Phone, Search } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import {Link} from 'react-router-dom'
const Navbar = () => {
    const user = true;
    const [isScrolled,setIsScrolled] = useState(false)
    window.onscroll=()=>{
    setIsScrolled(window.pageYOffset===0 ? false :true)
    return ()=>(window.onscroll=null)
  }
  return (
    <div className={isScrolled ? 'navbar scrroled':'navbar'}>
        <h1>
          <Link to='/'>Hyroo Blog</Link> 
        </h1>
        <div className="center">
            <div className="cText">
                
                <Home/>
                <Link to='/'>
                <span>Home</span>
                </Link>
            </div>
            <div className="cText">
                <AcUnit/>
                <Link to='/about'>
                <span>About</span>
                </Link>
            </div>
            <div className="cText">
                <Phone/>
                <Link to='/contact'>
                <span>Contact</span>
                </Link>
            </div>
            <div className="cText">
                <NoteAlt/>
                <Link to='/post'>
                <span>Write</span>
                </Link>
            </div>
            <div className="cText">
                {
                    user &&
                    <>
                    <LogoutOutlined/>
                    <span>Logout</span>
                    </>
                }
            </div>
        </div>
        <div className="left">
            {user ? (
                <>
                <div className={isScrolled ? 'inputBox scrroled':'inputBox'}>
                <input type="text" placeholder='search'/>
                <Search className='s-icon'/>
            </div>
            <Link to='/settings'> 
            <Avatar 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqCCPaO3bPD5f7gbTyZ5MBb9Q1wFuQDxdhA&usqp=CAU' className='a-icon'/>
            </Link>
                </>
            ):(
              <div className='auth'>
              <div className="auth-Text">
                <Login/>
                <Link to='/login'>
                <span>Login</span>
                </Link>
            </div>
            <div className="auth-Text">
                <LockOpen/>
                <Link to='/register'>
                <span>Register</span>
                </Link>
            </div>
              </div>
            )}
            
        </div>
    </div>
  )
}

export default Navbar