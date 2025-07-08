import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center px-[16px] md:px-[32px] lg:px-[58px] py-[20px]'>
      <img src={assets.logo} alt="" className='w-[156px] h-[32px]'/>
    </div>
  )
}

export default Navbar
