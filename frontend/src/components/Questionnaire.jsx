// import Artists from "./Artists";
import appicon from "./../Images/appicon.png";
import {useState} from 'react'
import FavArtists from "./FavArtist";
import arrow from './../Images/arrow.png'
import Recommended from "./Recommended";

const Questionnaire = () => {

  function leftScroll(heading) {
    const left = document.querySelector(`.${heading}`);
    if(left) left.scrollBy(-150, 0);
  }
  function rightScroll(heading) {
    const right = document.querySelector(`.${heading}`);
    if(right) right.scrollBy(150, 0);
  }

  return (
    <>
      <div className="qtitle">
        <div className="app">
          <div>
            <img src={appicon} alt="" />
          </div>{" "}
          <div className="appname">IITJ TUNES</div>
        </div>
      </div>

      <p className="q">Please choose your listening language:</p>

      <div className="question">
        <button className="language"  >Hindi</button>
        <button className="language" >English</button>
        <button className="language" >Punjabi</button>
      </div>
      <p className="q">Please choose your favorite artists:</p>
      
      <div className="part2">
        <button className="left" onClick={()=>leftScroll("artist")}>
          <img src={arrow} alt="" />
        </button>
        <FavArtists/>
          <button className="right" onClick={()=>rightScroll("artist")}>
          <img src={arrow} alt="" /></button>
      </div>

      <div className="submit">
        <button className="submitbutton">Submit</button>
      </div>
    </>
  );
};

export default Questionnaire;
