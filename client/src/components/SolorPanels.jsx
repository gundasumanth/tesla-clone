import React from 'react'
import solarpanels from "../assets/solar-panel-desktop.jpg";
import Image from '../utils/Image';
const SolorPanels = () => {
  return (
    <div>
    <div className="image">
    <Image src={solarpanels}/>
    </div>
    <div className="content grid justify-center mt-[-2rem]">
       <div className="text-[42px] font-semibold font-verdana">Sonar Panels For Yor Hone</div>
       <a className=" flex justify-center underline decoration-solid" href="#" >Schedule a Virtual Consultation</a>
      </div>
      <div className="w-[100%] text-white h-[31rem] flex  gap-2 justify-center items-end
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

export default SolorPanels