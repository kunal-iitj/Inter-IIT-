// import Artists from "./Artists";
import appicon from "./../Images/appicon.png";
import {useState} from 'react'
import FavArtists from "../components/FavArtist";
import arrow from './../Images/arrow.png'


const Questionnaire = () => {
  const [languages, addLanguage] = useState([]);

  function handleClick(e){
    addLanguage([...languages, e.target.value]);
    console.log(languages);
  }

  async function handleSubmit(e){
    const userLanguages = {languages : languages}
    const response = await fetch(  
      '', 
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
   console.log("232")
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

      <button className="Generic-left" onClick={()=>leftScroll("question1")}>
      <img src={arrow} alt="" />
      </button>
      <div className="question1 question">
        <button className="language" value='English'onClick={handleClick}>English</button>
        <button className="language" value='Hindi' onClick={handleClick} >Hindi</button>
        <button className="language" value='Filipino'onClick={handleClick}>Filipino</button>
        <button className="language" value='Italian'onClick={handleClick}>Italian</button>
        <button className="language" value='Spanish'onClick={handleClick}>Spanish</button>
        <button className="language" value='Estonian'onClick={handleClick}>Estonian</button>
        <button className="language" value='French' onClick={handleClick}>French</button>
        <button className="language" value='Dutch' onClick={handleClick}>Dutch</button>
        <button className="language" value='Portuguese' onClick={handleClick}>Portuguese</button>
        <button className="language" value='Indonesian' onClick={handleClick}>Indonesian</button>
        <button className="language" value='German' onClick={handleClick}>German</button>
        <button className="language" value='Norwegian' onClick={handleClick}>Norwegian</button>
        <button className="language" value='Danish' onClick={handleClick}>Danish</button>
        <button className="language" value='Korean' onClick={handleClick}>Korean</button>
        <button className="language" value='Romanian' onClick={handleClick}>Romanian</button>
        <button className="language" value='Arabic' onClick={handleClick}>Arabic</button>
      </div>
        <button className="Generic-right" onClick={()=>rightScroll("question1")}>
          <img src={arrow} alt="" /></button>
      <p className="q">Please choose your favorite artists:</p>
      
      <div className="question2 question">
        <button className="chooseGenres" value='Rock' >Rock</button>
        <button className="chooseGenres" value='R&b' >R&B</button>
        <button className="chooseGenres" value='Pop' >Pop</button>
        <button className="chooseGenres" value='Edm' >Edm</button>
        <button className="chooseGenres" value='Latin' >Latin</button>
        <button className="chooseGenres" value='Rap' >Rap</button>
      </div>

      <div className="submit">
        <button className="submitbutton" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Questionnaire;
