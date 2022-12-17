import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter, Route,Routes,useRoutes} from "react-router-dom";
import Home from './components/Home';
import Playlist from './components/Playlist';
import Login from './pages/Login'
import Registration from './pages/Registration';
import Generic from './pages/Generic';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Registration/>}/>
      <Route path='/playlist' element={<Playlist/>}/>
      <Route path='/generic' element={<Generic/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
