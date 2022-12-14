import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter, Route,Routes,useRoutes} from "react-router-dom";
import Home from './components/Home';
import Login from './pages/Login'
function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
