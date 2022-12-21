import React from 'react'
import Tile3Albums from '../components/Tile3'
import Leftpanel from '../components/Leftpanel'
import Middlepanel from '../components/Middlepanel'
import Rightpanel from '../components/Rightpanel'
import profile from '../Images/profile.jpg'
export default function Albums() {
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
            <Tile3Albums name="Albums" followers="Followers"/>
            <Tile3Albums name="Albums" followers="Followers"/>
            <Tile3Albums name="Albums" followers="Followers"/>
            <Tile3Albums name="Albums" followers="Followers"/>
            <Tile3Albums name="Albums" followers="Followers"/>
            <Tile3Albums name="Albums" followers="Followers"/>
            <Tile3Albums name="Albums" followers="Followers"/>
            <Tile3Albums name="Albums" followers="Followers"/>
        </div>
      </div>
      </div>
    </>
  )
}
