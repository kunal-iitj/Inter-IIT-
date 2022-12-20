import React from 'react'
import Card from './ArtistCard';
export default function Topartists() {
    const topartists = 4;
    var topartist=[];
    var a=0;
    for(var i=0; i<topartists; i++){
        topartist.push({Card:<Card/>,key:i});
      }
  return (
    <div className="scrolled topartists">
          {topartist.map(i=>
          {return <Card key={a++}/>}
        )}  
        </div>
  )
}
