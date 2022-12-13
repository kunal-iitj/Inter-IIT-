import React from 'react'
import Card from './ArtistCard';
export default function Instrumental() {
    const instrumental = 6;
    var instrumentalsong=[];
    var a=0;
    for(var i=0; i<instrumental; i++){
        instrumentalsong.push({Card:<Card/>,key:i});
      }
  return (
    <div className="scrolled instrumental">
          {instrumentalsong.map(i=>
          {return <Card key={a++}/>}
        )}  
        </div>
  )
}
