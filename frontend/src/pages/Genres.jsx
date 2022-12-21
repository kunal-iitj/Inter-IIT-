import React from 'react'
import Leftpanel from '../components/Leftpanel'
import Tile3Genres from '../components/Tile3'
import profile from '../Images/profile.jpg'

export default function Genres() {
  return (
    <>
      <div>
        <div className="splithome leftbox">
        <Leftpanel/>
        </div>
      <div className="album-right">
        <div className="part1">
            <button className="albums">Albums</button>
            <button className="playlisttop">Playlist</button>
            <button className="genres">Genres</button>
            <div className="profile">
            <img src={profile} alt="Avatar"/>
            <div className="Username">username</div>
            </div>
        </div>

        <div className="album-part">
            <Tile3Genres name = "Genres"/>
            <Tile3Genres name = "Genres"/>
            <Tile3Genres name = "Genres"/>
            <Tile3Genres name = "Genres"/>
            <Tile3Genres name = "Genres"/>
            <Tile3Genres name = "Genres"/>
            <Tile3Genres name = "Genres"/>
            
        </div>
      </div>
      </div>
    </>
  )
}
