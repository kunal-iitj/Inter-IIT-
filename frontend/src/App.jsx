import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter, Route,Routes,useRoutes} from "react-router-dom";
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Login from './pages/Login'
import Registration from './pages/Registration';
import Generic from './pages/Generic';
import Questionnaire from './pages/Questionnaire'
import LikePage from './pages/LikePage'
import Profilepage from './pages/Profilepage';
function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Generic />}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/question' element={<Questionnaire/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Registration/>}/>
      <Route path='/playlist' element={<Playlist/>}/>
      <Route path='/likepage' element={<LikePage/>}/>
      <Route path='/profile' element={<Profilepage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
