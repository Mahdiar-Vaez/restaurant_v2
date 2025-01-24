import React, { Suspense, useEffect, useState } from "react";
import { Routes,Route,Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Foods from "./Pages/Foods";
import FoodDetail from "./Pages/FoodDetail";
import Cart from "./Pages/Cart";
import LoginRegister from "./Pages/LoginRegister";
import Footer from "./Components/Footer";
import NotFound from "./Pages/NotFound";  
import { useDispatch, useSelector } from "react-redux";
import Payment from "./Pages/Payment";
import CheckContext from "./utils/checkoutContext";
import Favorite from "./Pages/Favorite";
import { addItem } from "./redux/CartSlice";
import { addFavorite } from "./redux/FavoriteSlice";
import Ai from "./Pages/Ai/Page";
import Blog from "./Pages/blog";
import BlogDetails from "./Pages/BlogDetails";

export default   function App() {
  const dispatch=useDispatch()
  const {user,token}=useSelector((state)=>state.auth)
  
  const [checkOut,setCheckOut]=useState()
  function handleCheckOut(e){
    setCheckOut(e)
    
  }
  const cartList=useSelector((state)=>state.cart.list)
  useEffect(() => {
    const localStorageCart = localStorage.getItem("cartList");
    
    const parsedLocalStorage = JSON.parse(localStorageCart);
    console.log("🚀 ~ useEffect ~ parsedLocalStorage:", parsedLocalStorage)
     if(Array.isArray(parsedLocalStorage)){
     parsedLocalStorage.forEach((item)=>
    {
      dispatch(addItem(item)) // Add each item to the cartList
    }
    )
  
    }
    
  }, []);
  console.log("🚀 ~ App ~ cartList:", cartList)

  useEffect(() => {
    // Load favoriteList from local storage when the component mounts
    const savedFavoriteList = localStorage.getItem('favoriteList')
    if (savedFavoriteList) {
   // Clear the current favoriteList
      const parsedFavoriteList = JSON.parse(savedFavoriteList)
     console.log(parsedFavoriteList)
      if(Array.isArray(parsedFavoriteList)){
      parsedFavoriteList?.forEach((item) => {
        dispatch(addFavorite(item)) // Add each item to the favoriteList
      })
    }
    }
   
  }, [])
  

  return (
    <>
    <Suspense  fallback={'صبر کنید '}>
      <CheckContext.Provider value={{checkOut,handleCheckOut}}>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/payment" element={user ? <Payment /> : <Navigate to="/" />} />
        <Route  path="/foods/:name/:id" element={<Foods/>} />
        <Route path="/food-detail/:id/:name" element={<FoodDetail/>} />
        <Route path="/cart" element={user?<Cart/>:<Navigate to={'/login-register'}/>} />
        <Route element={user?<Navigate to={'/'} />:<LoginRegister/>} path="/login-register" />
        <Route path="*" element={<NotFound/>} />
        <Route path="/favorite" element={<Favorite/>} />
        <Route path="/ai" element={<Ai/>} />
        <Route path="/blogs" element={<Blog/>} />
        <Route path="/blogs/:id/:title" element={<BlogDetails/>} />
      </Routes>
      <Footer/></CheckContext.Provider>
</Suspense>

    
    </>
  )
}
