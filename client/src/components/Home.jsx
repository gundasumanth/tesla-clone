import React from 'react'
import homeimage from "../assets/M3-Homepage-D.jpg"
import Image from '../utils/Image'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate= useNavigate ();
  function handleNavigation(){
    navigate("/drive")
  }
  return (
    <> 
    <Image src={homeimage}/>
  <div className="content  mt-10 grid justify-items-center">
    <div className="text-[43px] font-semibold ">Experience Tesla</div>
    <div className="text-s font-[5px]">Schedule a Demo Drive Today</div>
  </div>
  <div className="footer relative left-[40rem] top-[28rem]">
    <button className=" rounded-sm text-white bg-black w-[16rem] p-[10px]" onClick={handleNavigation}>Demo Drive</button>
  </div>
  </>
   
   
  )
}

export default Home