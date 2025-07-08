import React from 'react'

const Cards = ({image,  heading, content}) => {
  return (
    <div className='bg-[#1f1f1f] p-[20px] flex flex-col justify-start items-center rounded-xl'>
      <img src={image} alt="" className='w-[39px] h-auto' />
      <h3  className='text-[18px] leading-[24px] font-semibold mt-[10px]'>{heading}</h3>
      <p className='text-sm text-[#D1D5DB] leading-[16px] mt-[12px]'>{content}</p>
    </div>
  )
}

export default Cards
