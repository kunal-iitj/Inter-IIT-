import React from 'react'
import play from './../Images/playdark.jpg'
export default function Playlistcard(props) {
  var loadFile =(e)=>{
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  
    console.log(props.nam);
    let colors=[
        "red",
        "green",
        "yellow",
        "purple",
        "blue",
        "grey",
        "yellowgreen",
        "skyblue",
        "orange",
        "lightgreen",
        "#8B8000",
        "brown",
        "#9c42f5",
        "#54f542",
        '#FFD700',
        "#084d46"
    ]
    let text_color=[
        
    ]
  return (
    <div className="playlist-main" style={{backgroundColor:`${colors[props.nam%16]}`, }}>
      <div class="profile-pic">
      <label class="-label" for="file">
        <span class="glyphicon glyphicon-camera"></span>
        <span>Change Image</span>
      </label>
      <input id="file" type="file" onChange={()=>loadFile()}/>
      <img src={props.image}id="output" width="200" />
    </div>
      <span><h4>32 songs</h4></span>
      <img src={play} alt="" id="play-playlist" />
    </div>
  )
}
