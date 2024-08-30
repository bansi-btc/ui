import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6"; 

const AccordianEleLvl2 = ({name,childrens}) => {
    const [show, setshow] = useState(false);
    return (
        <div className='flex flex-col items-start justify-start w-full border-b border-gray-200'>
            
            <div className='py-4  w-full text-base px-5 flex flex-row items-center justify-between'
            onClick={()=>{
                setshow((prev=>{
                    return !prev
                }))
            }}>
                <div className='text-[#33a34d]'>{name}</div>
                {!show?<div><FaAngleDown className='text-gray-400' /></div>:
                <div><FaAngleUp className='text-gray-400' /></div>}
            </div>

            <div className={`w-full flex flex-col items-start justify-start transition-all duration-300 ease-in-out overflow-hidden 
            bg-white h-full ${show?"flex":"hidden"}`}
            >
                {childrens.map((ele, idx)=>{
                    return <a href={ele.link} key={idx} className='py-2 w-full text-sm px-5'>{ele.childName}</a>
                })}
            </div>
        </div>
    )
}

export default AccordianEleLvl2