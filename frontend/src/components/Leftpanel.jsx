import React from 'react'
import home from './../Images/Home.png'
export default function Leftpanel() {
  return (
    <div>
      <div className="app"> <h2 id='appname'>#AppName</h2> </div>
        <div className="hlp">
            <div className="home"><button id="home">Home</button></div>
            <div className="Search"><button id="Search">Search</button></div>
            <div className="liked"><button id="liked">Liked Songs</button></div>
            <div className="playlist"><button id="Playlist">Playlists</button></div>
        </div>
    </div>
  )
}
