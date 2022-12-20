import React from 'react'
import play from './../Images/play.png'
import like from "../Images/heart.png"
import liked from "../Images/redheart.png"

import { useAddLikedSongMutation, useRemoveLikedSongMutation } from '../services/likedSongsApi'
import { getToken, storeLikedSongs } from '../services/localStorage'

export default function Tile(props) {

  const [addLiked] = useAddLikedSongMutation()
  const [removeLiked] = useRemoveLikedSongMutation()

  const handleLike = async (e)=>{
    
    if(String(document.getElementById(props.number).src).slice(-23)=="src/Images/redheart.png"){
      //if already liked
      const { access_token } = getToken()

      //CHANGE THIS SONG NAME LATER
      let songName = "Test5"

      const res = await removeLiked({songName, access_token})
      storeLikedSongs(res.data.likedSongs)
      document.getElementById(props.number).src=like;
    }
    else{
      //if not already liked
      const { access_token } = getToken()

      //CHANGE THIS SONG NAME LATER
      let songName = "Test5"
      
      const res = await addLiked({songName, access_token})
      console.log(res);
      storeLikedSongs(res.data.likedSongs)
      document.getElementById(props.number).src=liked;
    }
  }
  return (
    <div className="col">
                <div className='Songimg'><img src="https://filmfare.wwmindia.com/content/2022/apr/arijitsingh11650885572.jpg"alt=""/></div>
                <div className='Song'><div className="songname">Song Number {props.number}</div><span className="singername">Arijit Singh <span><button className='song-play'><img src={play} alt="" /></button><button  className='song-like'><img id={props.number}  onClick={()=>handleLike()} src={like} alt="" /></button></span></span>   
            </div>
            
            </div>
  )
}
