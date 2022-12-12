import React from 'react'
import home from './../Images/Home.png'
import search from './../Images/Search.png'
import playlist from './../Images/playlist.png'
import logo from "./../Images/profile.jpg"
import like from "./../Images/heart.png"
export default function Leftpanel() {
  return (
    <div>
      <div className="app"><div><img src={logo} alt="" /></div> <div className='appname'>#AppName</div></div>
        <div className="hlp">
            <div className="home Icons"><button id="home"><img src={home} alt="" /> Home</button></div>
            <div className="Search Icons"><button id="Search"><img src={search} alt="" /> Search</button></div>
            <div className="liked Icons"><button id="liked"><img src={like} alt="" />Liked Songs</button></div>
            <div className="playlist Icons"><button id="Playlist"><img src={playlist} alt="" />Playlists</button></div>
        </div>
    </div>
  )
}
