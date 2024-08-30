import React from 'react'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import logo from "../assets/indMoney.avif"


const Navbar = () => {
    // #39a451
  return (
    <nav className='flex flex-row items-center justify-between py-5 px-5 xl:px-0 
    w-full fixed top-0 z-20 bg-white self-center shadow-sm shadow-gray-200'>

        <div className='flex flex-row items-center justify-between max-w-7xl mx-auto w-full'>
            <h1><img src={logo} alt="" className='w-12' /></h1>

            <ul className='flex flex-row items-center justify-end gap-4'>
                <li className="py-1 px-4 border border-[#39a451] text-[#39a451] rounded-full">Log In</li>
                <li><TfiHeadphoneAlt className='text-xl text-gray-500' /></li>
                <li><IoIosSearch className='text-2xl text-gray-500' /></li>
                <li><IoClose className='text-3xl text-gray-500' /></li>
            </ul>
        </div>
        
       
    </nav>
  )
}

export default Navbar