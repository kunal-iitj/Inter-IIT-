import React from 'react'
import Card from './ArtistCard';
import { useState,useEffect } from 'react';
export default function Topartists() {
  const [recommend,setRecommend]  = useState([])
  const fetchRecommendation = async() => {
    const response = await fetch(
     'http://127.0.0.1:8000/api/artists/',
     {
       method: 'GET',
       headers: {
         'Content-Type': 'application/json'
       }
     }
   )
   const data = await response.json()
   setRecommend(data)
 }
    useEffect(() => {
      fetchRecommendation()
      console.log(recommend);
    }, [])
    var a=0;
    const recommendnew  = recommend.slice(0,4);
  return (
    <div className="scrolled topartists">
          {recommendnew.map(i=>
          {return <Card number={a} key={a++} image={i.image} name={i.name}/>}
        )}  
        </div>
  )
}
