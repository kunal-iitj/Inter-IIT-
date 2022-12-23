import React from 'react'
import profile from "./../Images/profile.jpg"
import arrow from './../Images/arrow.png'
import Card from './ArtistCard';
import Recommended from './Recommended';
import Trending from './Trending';
import Artists from './Artists';
import Instrumental from './Instrumental';
import ImageSlider from './ImageSlider';
import Songsrecomm from './Songsrecomm';
import { getUserName } from '../services/localStorage';
import { useNavigate } from 'react-router-dom';


export default function Middlepanel() {
  const fetchRecommendation = async() => {
     const response = await fetch(
      '',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }

  function leftScroll(heading) {
    const left = document.querySelector(`.${heading}`);
    if(left) left.scrollBy(-150, 0);
  }
  function rightScroll(heading) {
    const right = document.querySelector(`.${heading}`);
    if(right) right.scrollBy(150, 0);
  }

  return (
    <div className='parts'>
      <div className="part1">
      <button className="albums" onClick={()=>navigate('/albums')}>Albums</button>
            <button className="playlisttop" onClick={()=>navigate('/playlist')}>Playlist</button>
            <button className="genres" onClick={()=>navigate('/genres')}>Genres</button>
        <div className="profile">
        <img src={profile} alt="Avatar"/>
        <div className="Username">{getUserName()}</div>
        </div>
        
      </div>

      <ImageSlider/>
      <div className="part2">
        <h1>Recommended Artists</h1>
        <button className="left" onClick={()=>leftScroll("recommended")}>
          <img src={arrow} alt="" />
        </button>
        <Recommended/>
          <button className="right" onClick={()=>rightScroll("recommended")}>
          <img src={arrow} alt="" /></button>
      </div>
      
      <div className="newpart2">
        <h1>Recommended Songs</h1>
        <Songsrecomm/>
      </div>

      <div className="part2">
        <h1>Trending Songs</h1>
        {/* <button className="left" onClick={()=>leftScroll("trending")}><img src={arrow} alt="" /></button> */}
        <Trending/>
        {/* <button className="right" onClick={()=>rightScroll("trending")}> <img src={arrow} alt="" /></button> */}
      </div>

      {/* <div className="part2">
        <h1>Instrumental</h1>
        <button className="left" onClick={()=>leftScroll("instrumental")}><img src={arrow} alt="" /></button>
        <Instrumental/>
          <button className="right" onClick={()=>rightScroll("instrumental")}><img src={arrow} alt="" /></button>
      </div> */}

      
    </div>
  )
}
