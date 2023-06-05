import React from 'react'
import modelX  from '../assets/MX-Hero-Desktop.jpg'
import Image from "../utils/Image"
import Button from '../utils/Button'
const ModelX = ({drive}) => {
  return (
    <div>
      <Image src={modelX}
      />
        <div className="content grid justify-center mt-5">
       <div className="text-[25px] font-semibold">Model S</div>
       <div  className=" flex justify-center font-semibold">Plaid</div>
      </div>
  <div className="details w-[50rem] grid ml-[23rem] grid-cols-4 gap-y-2 grid-rows-2 justify-center mt-[28rem] text-white justify-items-center ">
         
         <div className="text-2xl font-semibold">333 mi</div>
         <div className="text-2xl font-semibold">2.5s</div>
         <div className="text-2xl font-semibold">9.9s</div>
         <div className='text-2xl font-semibold'> 1020 hp</div>
         
         <div className="text-s font-semibold">Range(EPA est.)</div>
         <div className="text-s font-semibold">0-60mph*</div>
         <div className="text-s font-semibold">1/4 mile</div>
         <div className="text-s font-semibold">Peak Power</div>
         
    
   </div>
   <Button drive={drive}/>
    </div>

   
  )
}

export default ModelX