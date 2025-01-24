import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './foods.css'
import { motion } from 'framer-motion'
import { Hourglass } from 'react-loader-spinner'
export default function Foods() {
  const[foods,setFoods]=useState()
  const [loading,setLoading]=useState(true)
  const {name}=useParams()
 
  useEffect(()=>{

    (async()=>{
      try {
       const res=await fetch(`https://mahdiar-vaez.github.io/host-restaurant/data.json`)
      const data=await res.json()
      setFoods(data[name])
      setLoading(false)
      } catch (error) {
        setLoading(false)
        alert(error)
      }
  
    })()

  },[name])
  // const foodsItems=foods?.map((e,index)=>(
  //   <div key={index} className='food-card'>
  //     <img  src={e?.img} alt='' />
  //     <h4>{e?.name}</h4>
  //     <p>{e?.des}</p>
  //     <span>{e?.price}تومان</span>
  //   <Link to={`/food-detail/${e?.id}/${e?.name.split(' ').join('-')}`}>سفارش </Link>
  //   </div>
  // ))
  return (
    <div className='foods section'>
      {loading?<div className='loading'>
        <Hourglass
          visible={true}
          height="200"
          width="200"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#ffca3c', '#f2002d']}
        />
      </div>:<div className='foods-section'>
          {Array.isArray(foods)>0 && foods.map((e,index)=>(
    <motion.div 
    initial={{opacity:0,}} 
    transition={{duration:.4}}
    whileInView={{opacity:1,}}
    key={index} className='food-card'>
      <img  src={e?.img} alt={e?.name} loading='lazy' />
      <h4>{e?.name}</h4>
      <p>{e?.des}</p>
      <span>{e?.price}تومان</span>
    <Link to={`/food-detail/${e?.id}/${e?.name.split(' ').join('-')}`}>سفارش </Link>
    </motion.div>))}
         </div>}

    </div>
  )
}
