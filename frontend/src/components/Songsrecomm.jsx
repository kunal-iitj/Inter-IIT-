import React from 'react'
import Tile from './Tile'
export default function Songsrecomm(props) {
    const trending = (props.trending).slice(0,4);
    var a=0;
  return (
    <div className='songrecomm'>
        <div className="row">
        {trending.map(i=>
          {return <Tile number={a} key={a++} name={i.name} image={i.image}/>}
        )}  
        </div>
    </div>
  )
}
