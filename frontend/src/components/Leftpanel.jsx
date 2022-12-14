import React from 'react'
import home from './../Images/Home.png'
import appicon from './../Images/appicon.png'
import playlist from './../Images/playlist.png'
import like from "./../Images/heart.png"
import genre from "./../Images/genre.png"
import recent from "./../Images/recents.png"
import account from "./../Images/account.png"
import settings from "./../Images/settings.png"
export default function Leftpanel() {
  return (
    <div>
      <div className="app"><div><img src={appicon} alt="" /></div> <div className='appname'>IITJ TUNES</div></div>
        <div className="hlp">
          <div className="menu">Menu</div>
          <div className="home Icons"><button id="home"><img src={home} alt="" /> Home</button></div>
          <div className="genre Icons"><button id="genre"><img src={genre} alt="" /> Genres</button></div>
          <div className="library">Library</div>
          <div className="recent Icons"><button id="recent"><img src={recent} alt="" />Recents</button></div>
          <div className="liked Icons"><button id="liked"><img src={like} alt="" />Liked Songs</button></div>
          <div className="playlist Icons"><button id="playlist"><img src={playlist} alt="" />Playlists</button></div>
          <div className="album Icons"><button id="album"><img src={genre} alt="" /> Albums</button></div>
          <div className="customise">Customise</div>
          <div className="account Icons"><button id="account"><img src={account} alt="" />Account</button></div>
          <div className="settings Icons"><button id="settings"><img src={settings} alt="" />Settings</button></div>
        </div>
    </div>
  )
}
