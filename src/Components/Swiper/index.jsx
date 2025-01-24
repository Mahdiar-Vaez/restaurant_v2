import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Navigation ,Autoplay} from "swiper/modules";
import { Hourglass } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function SwiperSec() {
    const [img,setImg]=useState()
    const [loading,setLoading]=useState(true)
//     useEffect(()=>{ fetch('http://localhost:3000/Swiper')
//     .then(res=>res.json())
//     .then(data=>setImg(data))

// },[])
useEffect(()=>{
  (async()=>{
    try {
      const res=await fetch("https://mahdiar-vaez.github.io/host-restaurant/data.json")
      const data=await res.json()
      setImg(data?.Swiper)
      setLoading(false)
    } catch (error) {
alert('مشکلی در سرور وجود دارد')  
setLoading(false)
  }
  })()
},[])
   
  return (
    <>
    {loading?   <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'400px'
    }}> <Hourglass
          visible={true}
          height="200"
          width="200"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#ffca3c', '#f2002d']}
        /></div>:   <Swiper autoplay={{
        delay:3000,
        disableOnInteraction:false
      }}  navigation={true} modules={[Navigation,Autoplay]} className="mySwiper">
     {img?.map((e)=> <SwiperSlide  className="section ">
          <img src={e?.imgUrl} loading="lazy" alt='عکس اسلایدر' />
          <div className="slide-content">
            {" "}
            <h3  className="slide-content-h3">{e?.name}</h3>
            <p>با بهترین مواد اولیه </p>
            <button className="slider-btn">
              <Link color="white" to={'/foods/all/0'}>
              سفارش دهید</Link></button>
          </div>
        </SwiperSlide>)}
      </Swiper>}
   
    </>
  );
}
