import React from 'react'

const layout = ({first,second,third,fourth,five,six}) => {
   
  return (
    <div className="grid grid-cols-3 grid-rows-2 content-end  mt-[28rem] ml-[30rem] w-[40rem] justify-items-center">
     <div className='text-2xl font-semibold text-white'>{first}</div>
     <div className="text-2xl font-semibold text-white">{second}</div>
     <div className="text-2xl font-semibold text-white">{third}</div>
     <div className="text-s font-semibold text-white">{fourth}</div>
     <div className="text-s font-semibold text-white">{five}</div>
     <div className="text-s font-semibold text-white">{six}</div>
   </div>
  )
}

export default layout