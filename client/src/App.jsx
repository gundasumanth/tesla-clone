import React from 'react'
import logo from "./assets/tesla.svg"
import Drive from './components/Drive';
import './App.css'
import {ModelS,ModelThree,ModelX,SolorPanels,SolorRoof ,Home,ModelY} from "./components/index";
import {Link, Route, Routes,useNavigate} from "react-router-dom";
import { useState} from 'react';


function App() {
  const [check, setcheck] = useState(false)
  const navigate =useNavigate();
  // style for nav bar
  const style={
    colorStyle:{
      color: check?"white": "black"
    },
    image:{
      filter: check && "invert(100%)"
    }
  
  }
  // function for handling the check state used in the navbar
  function handleCheck(){
    setcheck(true)
  }
  function handleInCheck(){
   setcheck(false)
  }
  // function to handle the navigation
  function handleNavigate(){
    navigate("/drive")
  }
  return (
    <>
      <div className="container " >
        <nav className="flex flex-row justify-around gap-5  pl-[40px] pr-[40px] mt-4 " style={style.colorStyle}>
          <div className="logo">
           <Link to="/">
           <img className="w-[8rem] h-10 " style={style.image} src={logo} alt="tesla logo"/>
           </Link>
           
          </div>
          <div className="middle flex flex-row gap-7 grow justify-center text-l font-semibold">
            <Link to="/modelS" onClick={handleInCheck}>Model S</Link>
            <Link to="/modelthree" onClick={handleInCheck}>Model 3</Link>
            <Link to="/modelY" onClick={handleInCheck}>Model Y</Link>
            <Link to="/modelx" onClick={handleInCheck}>Model X</Link>
            <Link to="/solorpanels" onClick={handleInCheck}>Solor Panels</Link>
            <Link to="/soloroof" onClick={handleCheck}>Solor Roof</Link>
          
          </div>
          <div className="last flex flex-row gap-4 text-l font-semibold">
            <div>shop</div>
            <div>Account</div>
            <div>Menu</div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/modelY" element={<ModelY drive={handleNavigate}/>}></Route>
          <Route path="/modelS" element={<ModelS drive={handleNavigate}/>}></Route>
          <Route path="/modelthree" element={<ModelThree  drive={handleNavigate}/>}></Route>
          <Route path="/modelx" element={<ModelX  drive={handleNavigate}/>}></Route>
          <Route path="/solorpanels" element={<SolorPanels  drive={handleNavigate}/>}></Route>
          <Route path="/soloroof" element={<SolorRoof  drive={handleNavigate}/>}></Route>
          <Route path="/drive" element={<Drive  drive={handleNavigate}/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
