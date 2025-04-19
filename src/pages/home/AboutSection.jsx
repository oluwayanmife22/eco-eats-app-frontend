import React from 'react'
import Aboutimg from "../../assets/about-image.jpg"
const AboutSection = () => {
  return (
  
 <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10'>
     

<div className='text-start sm:w-1/2'>
    <h2 className=' text-3xl font-semibold text-secondary sm:text-5xl sm:leading leading-relaxed'>?Vegan foodie who loves to experiment with recipes </h2>
    <p className='text-xl mt-4 text-[#5c5c5c]'>Eco Eats is a modern, user-friendly recipe web app designed to inspire home cooks, food lovers, and eco-conscious eaters. <br/> Whether you’re looking for quick breakfasts, hearty lunches, indulgent desserts, or healthy drinks, Eco Eats helps you discover and save delicious recipes — all while promoting sustainable and mindful eating.
    </p>
    <div className='lg:mt-0 lg:flex-shrink-0'>
        <div className='mt-12 inline-flex'>
        <button 
        type='button'
        className='py-4 px-8 bg-btnColor text-white hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg'> View Recipe</button>
        </div>
    </div>
</div>
  
<div >
       
            <img src={Aboutimg} alt='Featured image' className='rounded-md' />
        </div>

          </div>
)
}

export default AboutSection
