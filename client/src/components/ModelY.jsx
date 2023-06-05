import React from 'react'
import modelY from "../assets/model-y_R1@2.jpg"
import Button from "../utils/Button"
import Image from '../utils/Image'
const ModelY = ({drive}) => {
  return (
    <>
   <Image src={modelY}/>
    <div className=" flex justify-center text-4xl font-semibold text-black mt-20">
            Model Y
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
   <div className="ml-[4rem]">
   <Button drive={drive}/>
   </div>
   
    </>
  )
}

export default ModelY