import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import AccordianEleLvl2 from './AccordianEleLvl2';


const AccordianEleLvl1 = ({parentName,childList, link, depth, childrens}) => {
    const [show, setshow] = useState(false);
    return (
        <div className='flex flex-col items-start justify-start w-full'>

            {depth ==0 && <a href={link}className='py-4 border-b border-gray-200 w-full text-base px-5 flex 
            flex-row items-center justify-between text-[#33a34d]'>{parentName}</a>}

            {depth==1 && 
            <div className='w-full'>
               <AccordianEleLvl2 name={parentName} childrens={childrens}/>
                
            </div>}
            
            {depth==2 && <div className='py-4 border-b border-gray-200 w-full text-base px-5 flex 
            flex-row items-center justify-between'
            onClick={()=>{
                setshow((prev=>{
                    return !prev
                }))
            }}>
                <div className='text-[#33a34d]'>{parentName}</div>
                {!show?<div><FaAngleDown className='text-gray-400' /></div>:
                <div><FaAngleUp className='text-gray-400' /></div>}
            </div>}

            {depth==2 && <div className={`w-full flex flex-col items-start justify-start transition-all duration-300 ease-in-out overflow-hidden 
            bg-gray-100 ${show?"flex":"hidden"} transition-all duration-500 origin-top`}
            >
                {childList.map((ele, idx)=>{
                    return <AccordianEleLvl2 key={idx} {...ele} className='py-4 border-b border-gray-300 w-full text-base px-5'>{ele.name}</AccordianEleLvl2>
                })}
            </div>}
        </div>
    )
}

export default AccordianEleLvl1