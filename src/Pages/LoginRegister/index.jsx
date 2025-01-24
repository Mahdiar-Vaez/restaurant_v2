import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import ToastComponent from '../../Components/Toast/Toast'


export default function LoginRegister() {
  const [userType,setUserType]=useState('login')
  const handleUser=()=>{
    setUserType(userType==='login' ? 'register':'login')
  }
  return (
    userType==='login'?
    <><Login handleUser={handleUser}/>
    <ToastComponent/>
    </>:
    <><Register  handleUser={handleUser}/>
    <ToastComponent/>
    </>
  )
}
