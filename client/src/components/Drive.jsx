import React, { useState } from 'react'
import { model3,modelS,modelX,modelY } from '../assets/demoDrive'
const Drive = () => {
  const [Condition, setCondition] = useState(0)
  function handleCondition(number){
    console.log(number)
   setCondition(number)
  }
  return (
    <div className="w-[50%] h-[100vh] ml-[20rem] mt-[6.5rem]">
      <div className="text-[2.5rem] font-semibold font-verdana">Schedule a Demo Drive</div>
      <p>Demo Drive a Tesla at a store near you. Drivers must have a valid U.S. driver's license and be 18 years of age or older.</p>
      <div className="mt-14 flex gap-[40px]">
        <div className=" flex flex-col gap-4 ">
        <button className="w-[13rem] h-[48px] border-gray-300 border-2 rounded-[6px] p-[10px] 
        flex justify-center focus:ring focus:ring-blue-400" onClick={()=>{handleCondition(0)}}>Model S</button>
        <button className="w-[13rem] h-[48px] border-gray-300 border-2 rounded-[6px] p-[10px] 
        flex justify-center focus:ring focus:ring-blue-400" onClick={()=>{handleCondition(1)}}>Model 3</button>
         <button className="w-[13rem] h-[48px] border-gray-300 border-2 
         rounded-[6px] p-[10px] flex justify-center focus:ring focus:ring-blue-400" onClick={()=>{handleCondition(2)}}>Model X</button>
          <button className="w-[13rem] h-[48px] border-gray-300 border-2
           rounded-[6px] p-[10px] flex justify-center focus:ring focus:ring-blue-400"  onClick={()=>{handleCondition(3)}}>Model Y</button>
        </div>
        {
          (() => {
        switch(Condition) {
          case 0:
           return (<img src={modelS} alt="modelS car" className="w-[34rem] h-[17rem]"/>)
          case 1:
             return <img src={model3} alt="model3 car" className="w-[34rem] h-[17rem]"/>
          case 2:
             return <img src={modelX} alt="modelX car" className="w-[34rem] h-[17rem]"/>
          case 3:
              return  <img src={modelY} alt="modelY car" className="w-[34rem] h-[17rem]"/>
          default:
            return null
        }
      })()}
      </div>
      <div className="text-3xl mt-[4rem] font-semibold">Contact Information</div>
      <form className="flex flex-wrap gap-6 mt-12 ">
         <div className='box'>
         <label for="fname">First Name</label>
        <input type="text" name="firstname" id="fname" required />
         </div>
         <div className='box'>
         <label for="lname">Last Name</label>
        <input type="text" name="lastname" id="lname" required />
         </div>
         <div className='box'>
         <label for="number">Phone Number</label>
        <input type="tel" name="number" id="number" required />
         </div>
         <div className='box'>
         <label for="email">Email Address</label>
        <input type="email" name="email_id" id="email" required />
         </div>
        <div className='box'>
        <label for="zipcode">Zipcode</label>
        <input type="number" name="zipcode" id="zipcode" required />
        </div>
       
        <div className="checkbox mt-5 mr-[50%] flex flex-col gap-y-4 ">
          <div className="flex flex-row gap-x-2">
          <input type="checkbox" name="interested" id="I_checkbox" className="w-[25px] h-[25px]"/>
          <label className='text-s'>I’m interested in solar and Powerwall</label>
          </div>
          <div className='flex flex-row gap-x-2'>
          <input type="checkbox" name="telsa" id="updates" className="w-[25px] h-[25px] " checked/>
          <label className='text-s'>Get Tesla Updates</label>
          </div>
        
        </div>
        <p className='text-xs font-semibold text-gray-500 mr-[11rem]'>
          By clicking "Submit and Continue", I authorize Tesla to contact me about this request via the contact information I provide. I understand calls or texts may use automatic or computer-assisted dialing or pre-recorded messages. Normal message and data rates apply. I can opt out at any time in the Tesla app or by unsubscribing. This consent is not required to complete your request.

Submit and Continue
          </p>
          <div className="footer w-[100%] h-[20vh] ">
          <button className="bg-[#3e6ae1] text-white w-[20rem] h-[44px] rounded-lg hover:bg-[#3457b1]
          outline outline-4 focus:outline-[#3e6ae1] border-4 focus:border-white">
           Submit and continue</button>
          </div>
         
      </form>
    </div>
  )
}

export default Drive