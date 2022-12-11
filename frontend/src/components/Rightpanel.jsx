import React, { useState } from 'react'
import profile from "./../Images/profile.jpg"
import arrow from "./../Images/arrow.png"
import Card from './Card';

export default function Rightpanel() {
  function leftScroll(heading) {
    const left = document.querySelector(`.${heading}`);
    left.scrollBy(-150, 0);
  }
  function rightScroll(heading) {
    const right = document.querySelector(`.${heading}`);
    right.scrollBy(150, 0);
  }
  const recommended = 6;
  const trending = 7;
  const artists = 6;
  const instrumental = 5;
  var recommendedsong=[];
  for(var i=0; i<recommended; i++){
    recommendedsong.push({Card:<Card/>,key:i});
  }
  var trendingsong=[];
  for(var i=0; i<trending; i++){
    trendingsong.push({Card:<Card/>,key:i});
  }
  var ArtistsPlaylist=[];
  for(var i=0; i<artists; i++){
    ArtistsPlaylist.push({Card:<Card/>,key:i});
  }
  var Instrumenatalsongs=[];
  for(var i=0; i<instrumental; i++){
    Instrumenatalsongs.push({Card:<Card/>,key:i});
  }
  return (
    <div className='parts'>
      <div className="part1">
        <div className="profile">
        <img src={profile} alt="Avatar"/>
        <div className="username">USERNAME</div>
        </div>
        
      </div>
      <div className="Hots">
        <div className="albumphoto"><img src={profile} alt="" /></div>
        <div className="album_desc">Most Trending Songs| <p>#Artist Name</p></div>
      </div>
      <div className="part2">
        <h1>Recommended Songs</h1>
        <button className="left" onClick={()=>leftScroll("recommended")}>
          <img src={arrow} alt="" />
        </button>
        <div className="scrolled recommended">
          
        {recommendedsong.map(i=>
          {return <Card/>}
        )}
        </div>
          <button className="right" onClick={()=>rightScroll("recommended")}>
          <img src={arrow} alt="" /></button>
      </div>
      <div className="part2">
        <h1>Trending Songs</h1>
        <button className="left" onClick={()=>leftScroll("trending")}><img src={arrow} alt="" /></button>
        <div className="scrolled trending">
        {trendingsong.map(i=>
          {return <Card/>}
        )}  
        </div>
        <button className="right" onClick={()=>rightScroll("trending")}><img src={arrow} alt="" />
</button>
      </div>
      <div className="part2">
        <h1>Artists</h1>
        <button className="left" onClick={()=>leftScroll("artist")}><img src={arrow} alt="" /></button>
        <div className="scrolled artist">
        {ArtistsPlaylist.map(i=>
          {return <Card/>}
        )}
        </div>
        <button className="right" onClick={()=>rightScroll("artist")}> <img src={arrow} alt="" />
</button>
      </div>
      <div className="part2">
        <h1>Instrumental</h1>
        <button className="left" onClick={()=>leftScroll("instrumental")}><img src={arrow} alt="" /></button>
        <div className="scrolled instrumental">
        {Instrumenatalsongs.map(i=>
          {return <Card/>}
        )}
        </div>
          <button className="right" onClick={()=>rightScroll("instrumental")}><img src={arrow} alt="" /></button>
      </div>

      
    </div>
  )
}
