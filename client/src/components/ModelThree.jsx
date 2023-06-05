import React from 'react'
import Modelthree from "../assets/M3-Homepage-D.jpg";
import Button from '../utils/Button';
import Image from '../utils/Image';
const ModelThree = ({drive}) => {
  return (
    <>
      <Image src={Modelthree}/>
      <div className=" flex justify-center text-4xl font-semibold text-black mt-[4rem]">
            Model 3
</div>
 <div className="grid grid-cols-3 grid-rows-2 text-black mt-[28rem] ml-[30rem] w-[40rem] justify-items-center">
     <div className='text-2xl font-semibold '>3.1 S</div>
     <div className="text-2xl font-semibold ">325+ mi</div>
     <div className="text-2xl font-semibold ">$399/mo</div>
     <div className="text-s font-semibold ">0-60 mph*</div>
     <div className="text-s font-semibold ">Range(est)</div>
     <div className="text-s font-semibold ">Lease Options</div>
   </div>
      <div className="ml-[7rem]">
        <Button drive={drive}/>
      </div>
    </>
  )
}

export default ModelThree