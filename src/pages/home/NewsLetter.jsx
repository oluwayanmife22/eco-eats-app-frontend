import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full md:w-2/3 mx-auto flex flex-col items-center p-10'>
      <h3 className='text-secondary font-semibold text-center text-4xl'>
        Sign up for my weekly newsletter
      </h3>

      <p className='mt-6 text-gray-600 text-lg text-center leading-normal font-light'>
        Weekly emails with my latest recipes, cooking tips and tricks, and product recommendations! 
        <br />You'll be set up in minutes.
      </p>

      <div className='mt-6  flex flex-col md:flex-row items-center justify-center w-full md:px-8 gap-4 mb-20'>
        <input 
          className='w-full md:w-1/3 px-4 py-3 rounded text-gray-700 outline-none border placeholder:text-[#1b2629]' 
          type="text" 
          placeholder='Name' 
        />
        <input 
          className='w-full md:w-1/3 px-4 py-3 rounded text-gray-700 outline-none border placeholder:text-[#1b2629]' 
          type="email" 
          placeholder='Email Address' 
        />
        <button 
          type='button'
          className='py-3 px-6 hover:bg-btnColor text-secondary hover:text-white transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg'
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default NewsLetter
