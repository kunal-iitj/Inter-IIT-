import React from 'react'
import Card from './ArtistCard'



export default function Recommended() {
    const recommended = 6;
    var recommendedartist=[];
    var a=0;
    for(var i=0; i<recommended; i++){
        recommendedartist.push({Card:<Card/>,key:i});
      }
  return (
    <div className="scrolled recommended">
          {recommendedartist.map(i=>
          {return <Card number={a} key={a++} />}
        )}  
        </div>
  )
}