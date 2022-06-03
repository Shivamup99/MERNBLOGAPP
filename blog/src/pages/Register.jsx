import React, { useEffect, useState } from 'react'
import '../styles/register.scss'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch ,useSelector } from 'react-redux'
import {toast} from 'react-toastify'
import Spiner from '../components/Spiner'
import { register , reset } from '../feature/auth/authSlice'
const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user,isLoading,isError,isSuccess,message} = useSelector(state=>state.auth)
  const [userForm,setUserForm] = useState({name:'',username:'',email:'',password:''})
  const handleOnChange = (e)=>{
    setUserForm({...userForm,[e.target.name]:e.target.value})
}
 
useEffect(()=>{
  if(isError){
    toast.error(message)
  }
  if(isSuccess || user){
    navigate('/login')
  }
  dispatch(reset())
},[user,isError,isSuccess,message,dispatch,navigate])

const handleRegister =(e)=>{
  e.preventDefault()
  const userData = {name:userForm.name,username:userForm.username,email:userForm.email,password:userForm.password}
  dispatch(register(userData))
}
if(isLoading){
  return <Spiner />
}
  return (
    <div className='register'>
      <h1 className="register-title">Register to check blogs</h1>
      <form className='register-form'>
      <label>Name</label>
        <input type="text" placeholder='Enter your name' name='name' value={userForm.name} required={true} onChange={handleOnChange}/>
      <label>Username</label>
        <input type="text" placeholder='Username should small letter' name='username' value={userForm.username} required={true} onChange={handleOnChange}/>
        <label>Email</label>
        <input type="email" placeholder='Enter your email' name='email' value={userForm.email} required={true} onChange={handleOnChange}/>
        <label>Password</label>
        <input type="password" placeholder='Your Password' name='password' value={userForm.password} required={true} onChange={handleOnChange} />
        <button className='register-btn' onClick={handleRegister}>register</button>
      </form>
      <Link to='/login' className='not-login'> have an account ? Login</Link>
      <button className='no-login'>
       <Link to='/login'>Login</Link> 
        </button>
    </div>
  )
}

export default Register