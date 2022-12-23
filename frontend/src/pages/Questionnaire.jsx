// import Artists from "./Artists";
import appicon from "./../Images/appicon.png";
import {useState} from 'react'
import FavArtists from "../components/FavArtist";
import arrow from './../Images/arrow.png'


const Questionnaire = () => {
  const [languages, addLanguage] = useState([]);

  function handleClick(e){
    if(languages.includes(e.target.value)){
    }else{
      addLanguage([...languages, e.target.value])
    }
  }

  async function handleSubmit(e){
    const userLanguages = {languages : languages}
    const response = await fetch(  
      'http://127.0.0.1:8000/question/preferences/', 
      {
        method: 'POST', 
        body: JSON.stringify(userLanguages),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
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
        <button className="language" value='Hindi' onClick={handleClick} >Hindi</button>
        <button className="language" value='English'onClick={handleClick}>English</button>
        <button className="language" value='Punjabi' onClick={handleClick}>Punjabi</button>
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
        <button className="submitbutton" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Questionnaire;
