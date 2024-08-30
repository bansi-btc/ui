import React, { useRef, useState } from 'react'
import { FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { accordianData } from '../data';
import Accordian from './accordianComp/Accordian';




const Sidebar = () => {
    const appstoreRating=4.6;
    const playstoreRating=4.8;
    let ratingArr=[1, 2, 3, 4, 5];

  return (
    <div className='pt-4 w-full flex flex-col items-center justify-start gap-4  md:w-[40%] lg-[34%] xl:w-[23%] self-end
    mt-24 pb-4'>
        <div className='bg-[#33a34d] py-3 px-8 rounded-full text-white'>Open Demat account</div>

        <Accordian accordianData={accordianData}/>

        <div className='w-[90%] mx-auto px-4 py-6 flex flex-col items-start justify-start border border-gray-300 rounded-xl
        gap-4 mt-5 bg-[#f5f5f8]'>
            <div className='w-full flex flex-row justify-start items-center gap-4 text-[#33a34d]'>
                <div className='font-semibold text-gray-800'>DOWNLOAD APP</div>
                <div className='text-sm'>1 crore + downloads</div>
            </div>
            <div className='w-full flex flex-row justify-start items-center gap-4 '>
                <div className='flex flex-row items-center justify-start gap-2'>
                    <FaAppStore className='text-2xl' />
                    <div className='text-sm'>{appstoreRating}</div>
                    <div className='flex flex-row items-center justify-start'>
                        {ratingArr.map((ele, idx)=>{
                            return <FaStar key={idx} className={`${ele<appstoreRating?"text-[#ffc40e]":"text-black"}
                            text-sm`}/>
                        })}
                    </div>
                    </div>
                <div className='flex flex-row items-center justify-start
                gap-2'>
                    <IoLogoGooglePlaystore className='text-2xl' />
                    <div className='text-sm'>{playstoreRating}</div>
                    <div className='flex flex-row items-center justify-start'>
                        {ratingArr.map((ele, idx)=>{
                            // <FaStar />
                            return <FaStar key={idx} className={`${ele<playstoreRating?"text-[#ffc40e]":"text-black"}
                            text-sm`}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar