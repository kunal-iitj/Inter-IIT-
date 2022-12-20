import React from 'react'
import Favoriteartistscard from './Favoriteartistscard';
export default function FavArtists() {
    const artist = 6;
    var artistsong=[];
    var a=0;
    for(var i=0; i<artist; i++){
        artistsong.push({Favoriteartistscard :<Favoriteartistscard />,key:i});
      }
  return (
    <div className="scrolled artist"  >
          {artistsong.map(i=>
          {return <Favoriteartistscard key={a++}/>}
        )}  
        </div>
  )
}
