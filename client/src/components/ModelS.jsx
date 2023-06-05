import React from 'react'
import modelS  from "../assets/ms-main-hero-Desktop.jpg"
import Image from '../utils/Image'

const ModelS = ({drive}) => {
  return (
    <>
       <Image src={modelS}/>
      <div className="content grid justify-center mt-5">
       <div className="text-[25px] font-semibold">Model S</div>
       <div  className=" flex justify-center">Plaid</div>
      </div>
      <div className="details w-[50rem] grid ml-[23rem] grid-cols-4 gap-y-2 grid-rows-2 justify-center mt-[28rem] text-white justify-items-center ">
         
            <div className="text-2xl font-semibold">396 mP</div>
            <div className="text-2xl font-semibold">1.99 S</div>
            <div className="text-2xl font-semibold">200 mph</div>
            <div className='text-2xl font-semibold'> 1020 hp</div>
            
            <div className="text-s font-semibold">Range(EPA est.)</div>
            <div className="text-s font-semibold">0-60mph</div>
            <div className="text-s font-semibold">Top speed</div>
            <div className="text-s font-semibold">Peak power</div>
            
       
      </div>
      <div className="outline-white mt-6 text-white flex gap-2 justify-center  ">
      <button className="outline bg-white text-black w-[15rem] outline-2 font-semibold p-[9px]">Order Now</button>
              <button className="outline hover:bg-white hover:text-black font-semibold  w-[15rem] outline-2 p-[9px]" onClick={drive}>Demo Drive
              </button>
              
            </div>
           
    </>
  )
}

export default ModelS;