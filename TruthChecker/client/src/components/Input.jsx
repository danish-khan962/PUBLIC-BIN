import React from 'react'

const Input = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center px-[16px] md:px-[32px] lg:px-[58px] mt-[32px]'>
      <div className='max-w-[800px] w-[100%] bg-[#1f1f1f] p-[20px] rounded-lg border border-[#303030]'>
        
        {/* Textarea */}
        <textarea
          placeholder='Paste your news article, headline or enter URL here...'
          rows={8}
          cols={60}
          className='bg-[#141414] p-[14px] placeholder:text-sm placeholder:text-[#9CA3AF] outline-none rounded-xl w-full resize-none'
        ></textarea>
        
        {/* Green Animated Bar */}
        <div className="w-full h-[4px] mt-4 mb-4 relative overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-lime-500 to-green-400 animate-glow"></div>
        </div>

        {/* Button */}
        <div className='w-full flex justify-center items-center'>
          <button className='bg-[#52C41A] py-2 px-16 rounded-md text-black font-medium mt-[10px] hover:brightness-110 transition'>
            Analyze..
          </button>
        </div>

      </div>
    </div>
  )
}

export default Input
