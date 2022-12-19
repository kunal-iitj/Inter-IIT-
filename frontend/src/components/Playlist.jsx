import React from "react";
import Leftpanel from "./Leftpanel";
import profile from "./../Images/profile.jpg";
import ImageSlider from "./ImageSlider";
import Playlistcard from "./Playlistcard";

export default function Playlist() {
    const playlistcount = 20;
    var playlist=[];
    var a=0;
    for(var i=0; i<playlistcount; i++){
        playlist.push({card:<Playlistcard/>,"key":i});
      }
  return (
    <div className="playlist-page">
      <div className="splithome leftbox">
        <Leftpanel />
      </div>
      <div className="playlist-right">
        <div className="part1">
          <button className="albums">Albums</button>
          <button className="playlisttop">Playlist</button>
          <button className="genres">Genres</button>
          <div className="profile">
            <img src={profile} alt="Avatar" />
            <div className="username">username</div>
          </div>
        </div>
        <div className="playlists">
            {playlist.map(i=>
                // console.log(i['key']),
                {return <Playlistcard key={i['key']}  nam={i['key']}/>}
            )}
            
        </div>
      </div>
    </div>
  );
}
