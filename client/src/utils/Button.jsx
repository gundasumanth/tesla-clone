import React from 'react'

const Button = ({drive}) => {
  return (
    
         <div className="outline-white mt-6 text-white flex gap-2 justify-center  ">
      <button className="outline bg-white text-black w-[15rem] outline-2 font-semibold p-[9px]">Order Now</button>
              <button className="outline hover:bg-white hover:text-black font-semibold  w-[15rem] outline-2 p-[9px]" onClick={drive}>Demo Drive
              </button>
              
            </div>
    
  )
}

export default Button