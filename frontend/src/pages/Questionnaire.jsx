// import Artists from "./Artists";
import appicon from "./../Images/appicon.png";
import {useState} from 'react'
import FavArtists from "../components/FavArtist";
import arrow from './../Images/arrow.png'


const Questionnaire = () => {
  const [languages, addLanguage] = useState([]);

  function handleClick(e){
    document.getElementById(`${e.target.value}`).style.border =  "solid 4px red"
    addLanguage([...languages, e.target.value]);
    console.log(languages);
    if(languages.includes(e.target.value)){
    }else{
      addLanguage([...languages, e.target.value])
    }
  }

  async function handleSubmit(e){
    console.log(languages);
    const userLanguages = {languages : languages, email : localStorage.getItem("email")}
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
        <button className="language" value='English' id="English"onClick={handleClick}>English</button>
        <button className="language" value='Hindi' id="Hindi" onClick={handleClick} >Hindi</button>
        <button className="language" value='Filipino'   id='Filipino'   onClick={handleClick}>Filipino</button>
        <button className="language" value='Italian'    id='Italian'    onClick={handleClick}>Italian</button>
        <button className="language" value='Spanish'    id='Spanish'    onClick={handleClick}>Spanish</button>
        <button className="language" value='Estonian'   id='Estonian'   onClick={handleClick}>Estonian</button>
        <button className="language" value='French'     id='French'     onClick={handleClick}>French</button>
        <button className="language" value='Dutch'      id='Dutch'      onClick={handleClick}>Dutch</button>
        <button className="language" value='Portuguese' id='Portuguese' onClick={handleClick}>Portuguese</button>
        <button className="language" value='Indonesian' id='Indonesian' onClick={handleClick}>Indonesian</button>
        <button className="language" value='German'     id='German'     onClick={handleClick}>German</button>
        <button className="language" value='Norwegian'  id='Norwegian'  onClick={handleClick}>Norwegian</button>
        <button className="language" value='Danish'     id='Danish'     onClick={handleClick}>Danish</button>
        <button className="language" value='Korean'     id='Korean'     onClick={handleClick}>Korean</button>
        <button className="language" value='Romanian'   id='Romanian'   onClick={handleClick}>Romanian</button>
        <button className="language" value='Arabic'     id='Arabic'     onClick={handleClick}>Arabic</button>
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
