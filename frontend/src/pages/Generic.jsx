import React from 'react'
import appicon from '../Images/appicon.png'
import videoBg from  "../Images/video.mp4"
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
export default function Generic() {
    return (
    <section id="main">
    <nav>
        <div className="logo">
          <img src={appicon} alt="" />
          <a href="#">IITJ TUNES</a>
        </div>  
        <ul className="menu">
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/signup'>SignUp</Link></li>
        </ul>
      </nav>
        <video src={videoBg}  autoPlay loop muted />
        <div className="main-text">
        <h2>Let's go for a walk...</h2>
        <h3>...with IITJ TUNES</h3>
        

        <Link to="/signup" className="btn">Let's go!</Link>
      </div>

    
    
    </section>
  )
}
