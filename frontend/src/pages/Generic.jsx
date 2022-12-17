import React from 'react'
import appicon from './../Images/appicon.png'
import videoBg from  "./../Images/Video.mp4"
export default function Generic() {
    return (
    <section id="main">
    <nav>
        <div className="logo">
          <img src={appicon} alt="" />
          <a href="#">IITJ TUNES</a>
        </div>  
        <ul className="menu">
          <li><a href="#">Login</a></li>
          <li><a href="#">SignUp</a></li>
        </ul>
      </nav>
        <video src={videoBg}  autoPlay loop muted />
        <div className="main-text">
        <h2>Let's go for a walk...</h2>
        <h3>...with IITJ TUNES</h3>
        

        <a href="#" className="btn">Let's go!</a>
      </div>

    
    
    </section>
  )
}
