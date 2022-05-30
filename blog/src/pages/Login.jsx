import React from 'react'
import '../styles/login.scss'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className='login'>
      <h1 className="login-title">Sign-in to check blogs</h1>
      <form className='login-form'>
        <label>Email</label>
        <input type="text" placeholder='Enter your email' required={true}/>
        <label>Password</label>
        <input type="password" placeholder='Your Password'required={true} />
        <button className='login-btn'>Login</button>
      </form>
      <Link to='/register' className='not-register'>Don't have account ? Register</Link>
      <button className='no-register'>
       <Link to='/register'>Register</Link> 
        </button>
    </div>
  )
}

export default Login