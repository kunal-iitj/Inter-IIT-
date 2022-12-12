import React from 'react'
import Card from './Card';
export default function Recommended() {
    const recommended = 6;
    var recommendedsong=[];
    var a=0;
    for(var i=0; i<recommended; i++){
        recommendedsong.push({Card:<Card/>,key:i});
      }
  return (
    <div className="scrolled recommended">
          {recommendedsong.map(i=>
          {return <Card key={a++}/>}
        )}  
        </div>
  )
}
