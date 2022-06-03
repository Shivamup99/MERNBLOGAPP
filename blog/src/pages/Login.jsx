import React,{useState,useEffect} from 'react'
import '../styles/login.scss'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch ,useSelector } from 'react-redux'
import {toast} from 'react-toastify'
import Spiner from '../components/Spiner'
import { login , reset } from '../feature/auth/authSlice'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user,isLoading,isError,isSuccess,message} = useSelector(state=>state.auth)
  const [userForm,setUserForm] = useState({email:'',password:''})
  const handleOnChange = (e)=>{
    setUserForm({...userForm,[e.target.name]:e.target.value})
}
useEffect(()=>{
  if(isError){
    toast.error(message)
  }
  if(isSuccess || user){
    navigate('/')
  }
  dispatch(reset())
},[user,isError,isSuccess,message,dispatch,navigate])
const handleLogin =(e)=>{
  e.preventDefault()
  const userData = {email:userForm.email,password:userForm.password}
  dispatch(login(userData))
}
if(isLoading){
  return <Spiner/>
}

  return (
    <div className='login'>
      <h1 className="login-title">Sign-in to check blogs</h1>
      <form className='login-form'>
        <label>Email</label>
        <input type="text" placeholder='Enter your email' name='email' value={userForm.email} onChange={handleOnChange} required={true}/>
        <label>Password</label>
        <input type="password" placeholder='Your Password'  name='password' value={userForm.password} onChange={handleOnChange} required={true} />
        <button className='login-btn' onClick={handleLogin}>Login</button>
      </form>
      <Link to='/register' className='not-register'>Don't have account ? Register</Link>
      <button className='no-register'>
       <Link to='/register'>Register</Link> 
        </button>
    </div>
  )
}

export default Login