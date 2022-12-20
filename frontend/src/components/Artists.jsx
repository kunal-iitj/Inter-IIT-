import React from 'react'
import Card from './ArtistCard';
export default function Artists() {
    const artist = 6;
    var artistsong=[];
    var a=0;
    for(var i=0; i<artist; i++){
        artistsong.push({Card:<Card/>,key:i});
      }
  return (
    <div className="scrolled artist">
          {artistsong.map(i=>
          {return <Card  number={a} key={a++}/>}
        )}  
        </div>
  )
}
