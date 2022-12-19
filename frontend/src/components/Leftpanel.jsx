import React from 'react'
import home from './../Images/Home.png'
import appicon from './../Images/appicon.png'
import playlist from './../Images/playlist.png'
import like from "./../Images/heart.png"
import genre from "./../Images/genre.png"
import recent from "./../Images/recents.png"
import account from "./../Images/account.png"
import settings from "./../Images/settings.png"
import { Link} from 'react-router-dom'
export default function Leftpanel() {
  return (
    <div>
      <div className="app"><div><img src={appicon} alt="" /></div> <div className='appname'>IITJ TUNES</div></div>
        <div className="hlp">
          <div className="menu">Menu</div>
          <div className="home Icons"><button id="home"><img src={home} alt="" /><Link to="/"> Home</Link></button></div>
          <div className="genre Icons"><button id="genre"><img src={genre} alt="" /> <Link to="/">Genres</Link></button></div>
          <div className="library">Library</div>
          <div className="recent Icons"><button id="recent"><img src={recent} alt="" /><Link to="/">Recents</Link></button></div>
          <div className="liked Icons"><button id="liked"><img src={like} alt="" /><Link to="/">Liked Songs</Link></button></div>
          <div className="playlist Icons"><button id="playlist"><img src={playlist} alt="" /><Link to="/playlist">Playlists</Link></button></div>
          <div className="album Icons"><button id="album"><img src={genre} alt="" /> <Link to="/">Albums</Link></button></div>
          <div className="customise">Customise</div>
          <div className="account Icons"><button id="account"><img src={account} alt="" /><Link to="/">Account</Link></button></div>
          <div className="settings Icons"><button id="settings"><img src={settings} alt="" /><Link to="/">Settings</Link></button></div>
        </div>
    </div>
  )
}
