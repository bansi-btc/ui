import React, { useState } from 'react'
import AccordianEleLvl1 from './AccordianEleLvl1';


const Accordian = ({accordianData}) => {
  return (
    <div className='accordian flex flex-col items-start w-full' id='ac1'>
        {accordianData.map((ele, idx)=>{
                return <AccordianEleLvl1 key={idx} {...ele}/>
            })}
    </div>
  )
}

export default Accordian