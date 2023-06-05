import React from 'react'
import solorroof from "../assets/sr-storm-desktop.png";
import Image from '../utils/Image';

const SolorRoof = () => {
  return (
    <div>
      <Image src={solorroof}/>
      <div className="w-[100%] h-[8rem] flex justify-center items-end ">
      <div className="text-white text-[30px] font-bold">Solor Roof</div>
      </div>
     
      <div className="w-[100%] text-white h-[28rem] flex  gap-[3.25rem] justify-center items-end
   ">
      <div className="w-[10rem] h-[6rem] flex flex-col justify-center items-center">
        <div className="text-2xl font-semibold">$</div>
        
        <div className="font-semibold text-x">Guarented Lowest</div>
        <div className="font-semibold text-x">price in America</div>
        
        
      </div>
      <div className="w-[10rem] h-[6rem] flex flex-col justify-center items-center">
        <div className="text-2xl font-semibold"><i class="fa-sharp fa-regular fa-cloud-bolt-sun"></i></div>
        <div className="font-semibold text-x">Integrated</div>
        <div className="font-semibold text-x">Product Ecosystem</div>
      </div>
      <div className="w-[10rem] h-[6rem] flex flex-col justify-center items-center">
        <div className="text-2xl font-semibold">24/7</div>
        <div className="font-semibold text-x">System Performance</div>
        <div className="font-semibold text-x">Monitoring</div>
      </div>
      <button className="outline outline-white w-[12rem] h-[34px] mb-[32px] ml-[51px] hover:bg-white hover:text-black font-semibold">order</button>
      </div>
    </div>
  )
}

export default SolorRoof