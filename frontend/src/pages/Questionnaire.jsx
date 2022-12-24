// import Artists from "./Artists";
import appicon from "./../Images/appicon.png";
import {useState} from 'react'
import FavArtists from "../components/FavArtist";
import arrow from './../Images/arrow.png'
import { useNavigate } from "react-router-dom";


const Questionnaire = () => {
  const navigate = useNavigate()
  const [languages, addLanguage] = useState([]);
  const [Genres, addGenres] = useState([]);

  function handleClick(e){
    if(languages.includes(e.target.value)){
      document.getElementById(`${e.target.value}`).style.border =  "solid 2px black"
      var index = languages.indexOf(e.target.value);
      if (index !== -1) {
        languages.splice(index, 1);
        addLanguage(languages)
        console.log(languages);
      }
    }else{
      document.getElementById(`${e.target.value}`).style.border =  "solid 4px red"
      addLanguage([...languages, e.target.value])
      console.log(languages,`${e.target.value}`);
    }
  }
  function handleClickGenres(e){
    if(Genres.includes(e.target.value)){
      document.getElementById(`${e.target.value}`).style.border =  "solid 2px black"
      var index = Genres.indexOf(e.target.value);
      if (index !== -1) {
        Genres.splice(index, 1);
        addGenres(Genres)
        console.log(Genres);
      }
    }else{
      document.getElementById(`${e.target.value}`).style.border =  "solid 4px red"
      addGenres([...Genres, e.target.value])
      console.log(Genres,`${e.target.value}`);
    }
  }

  async function handleSubmit(e){
    console.log(languages);
    const userLanguages = {languageJson : {languages: languages}, genresJson: {genres: Genres}, email : localStorage.getItem("email")}
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
    navigate('/home')
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

      <p className="q">Please choose your listening languages:</p>

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
      <p className="q">Please choose your favorite Genres:</p>
      
      <div className="question2 question">
        <button className="chooseGenres" value='Rock'  id='Rock'  onClick={handleClickGenres}>Rock</button>
        <button className="chooseGenres" value='R&b'   id='R&b'   onClick={handleClickGenres}>R&B</button>
        <button className="chooseGenres" value='Pop'   id='Pop'   onClick={handleClickGenres}>Pop</button>
        <button className="chooseGenres" value='Edm'   id='Edm'   onClick={handleClickGenres}>Edm</button>
        <button className="chooseGenres" value='Latin' id='Latin' onClick={handleClickGenres}>Latin</button>
        <button className="chooseGenres" value='Rap'   id='Rap'   onClick={handleClickGenres}>Rap</button>
      </div>

      <div className="submit">
        <button className="submitbutton" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Questionnaire;
