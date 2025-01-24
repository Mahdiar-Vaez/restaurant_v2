import React from 'react'
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ToastComponent() {

  return (
    <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  )
}