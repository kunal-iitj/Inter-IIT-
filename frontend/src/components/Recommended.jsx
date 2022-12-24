import React from 'react'
import Card from './ArtistCard'



export default function Recommended(props) {
  const songs  = props.recommendation
  console.log(songs)
  var a=0;
  return (
    <div className="scrolled recommended">
          {songs.map(i=>
          {return <Card number={a} key={a++} name={i.name} image={i.image}/>}
        )}  
        </div>
  )
}