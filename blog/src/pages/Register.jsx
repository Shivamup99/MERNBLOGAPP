import React from 'react'
import '../styles/register.scss'
import {Link} from 'react-router-dom'
const Register = () => {
  return (
    <div className='register'>
      <h1 className="register-title">Register to check blogs</h1>
      <form className='register-form'>
      <label>Username</label>
        <input type="text" placeholder='Enter your username' required={true}/>
        <label>Email</label>
        <input type="email" placeholder='Enter your email' required={true}/>
        <label>Password</label>
        <input type="password" placeholder='Your Password'required={true} />
        <label>Confirm Password</label>
        <input type="password" placeholder='Your Password'required={true} />
        <button className='register-btn'>register</button>
      </form>
      <Link to='/login' className='not-login'> have an account ? Login</Link>
      <button className='no-login'>
       <Link to='/login'>Login</Link> 
        </button>
    </div>
  )
}

export default Register