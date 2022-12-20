import React from 'react'
import play from './../Images/play.png'
import like from "../Images/heart.png"
import liked from "../Images/redheart.png"
export default function Tile(props) {
  const changepic = (e)=>{
        if(String(document.getElementById(props.number).src).slice(-23)=="src/Images/redheart.png")
    document.getElementById(props.number).src=like;
    else{
      document.getElementById(props.number).src=liked;
    }
  }
  return (
    <div className="col">
                <div className='Songimg'><img src="https://filmfare.wwmindia.com/content/2022/apr/arijitsingh11650885572.jpg"alt=""/></div>
                <div className='Song'><div className="songname">Song Number {props.number}</div><span className="singername">Arijit Singh <span><button className='song-play'><img src={play} alt="" /></button><button  className='song-like'><img id={props.number}  onClick={()=>changepic()} src={like} alt="" /></button></span></span>   
            </div>
            
            </div>
  )
}
