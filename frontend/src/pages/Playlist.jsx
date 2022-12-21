import React, { useEffect, useState } from "react";
import Leftpanel from "../components/Leftpanel";
import profile from "../Images/profile.jpg";

import ImageSlider from "../components/ImageSlider";
import Playlistcard from "../components/Playlistcard";

export default function Playlist() {

  const [playlists, setPlaylists] = useState([])
  const fetchPlaylists = async () => {
    const response = await fetch(
      'http://127.0.0.1:8000/api/featuredPlaylist',
      {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
    const data = await response.json()
    setPlaylists(data)
  }

  useEffect(() => {
    fetchPlaylists(), 
    console.log(playlists);
  }, [])

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
            <div className="Username">username</div>
          </div>
        </div>
        <div className="playlists">
            {playlists.map(i=>
                {return <Playlistcard  image = {i.image} name={i.name} nam={i['key']}/>}
            )}
            
        </div>
      </div>
    </div>
  );
}