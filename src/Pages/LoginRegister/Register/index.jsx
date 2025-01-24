import React, { useContext, useEffect, useState } from 'react';
import '../login-register.css';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import useFormFields from '../../../utils/UseFormFields';
import { useDispatch } from 'react-redux';
import { getUser } from '../../../redux/authSlide';
import ToastComponent from '../../../Components/Toast/Toast';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Register({ handleUser }) {
  const dispatch = useDispatch();
  const [fields, handleFields] = useFormFields();
  const [eye, setEye] = useState(false);

  
  async function handleSubmit(e, action) {
    e.preventDefault();

    try {
      const url = `https://api4dev.ir/customapi/auth.php?action=${action}&username=${fields.username}&password=${fields.password}`;
      const res = await axios.get(url);
      const data = res.data;
      console.log("🚀 ~ handleSubmit ~ data:", data.token);

      if (data) {
        const toastId = toast.success('ثبت نام موفقیت آمیز بود', { autoClose: false });
        setTimeout(() => {
          dispatch(getUser({ user: { username: fields.username }, token: data?.token }));
        }, 1000);
        localStorage.setItem("user", JSON.stringify(fields.username));
      } else {
        console.log("🚀 ~ handleSubmit ~ data.success is false or undefined");
        toast.error('ثبت نام ناموفق بود');
      }
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error('خطا در ارتباط با سرور');
    }
  }

  function handleEye() {
    setEye(!eye);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e, 'register')} action="">
      <div className='login'>
        <div className='login-register-overlay'> </div>
        <h3>ثبت نام</h3>
        <label htmlFor='username'>نام کاربری خود را وارد کنید *</label>
        <input onChange={handleFields} type="text" id='username' required name='username' />
        <label htmlFor='password'>گذرواژه *</label>
        <div className='password'>
          <input onChange={handleFields} id='password' required name='password' type={!eye ? 'password' : 'text'}></input>
          <span className='eye'>
            {eye ?
              <FaRegEye onClick={handleEye} /> :
              <FaRegEyeSlash onClick={handleEye} />
            }
          </span>
        </div>
        <label htmlFor='remember'>مرا به خاطر بسپار</label>
        <input className='check-box' type="checkbox" id='remember' name='remember' />
        <p className='change-registration' style={{ cursor: 'pointer' }} onClick={handleUser}>حساب کاربری داری ؟ وارد شو</p>
        <button type='submit'>ادامه</button>
      </div>
      <ToastComponent />
    </form>
  );
}