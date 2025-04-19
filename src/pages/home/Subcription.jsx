import React from 'react';

const Subcription = () => {
  return (
    <div className='bg-gray-100 py-16 px-4'>
      <div className='max-w-screen-xl mx-auto'>

        {/* Card */}
        <div className='bg-white shadow-lg rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-10'>

          {/* Left: Text Content */}
          <div className='md:w-1/2'>
            <h3 className='text-3xl font-bold tracking-tight text-secondary sm:text-4xl'>
              Subscribe to our newsletter
            </h3>
            <p className='mt-4 text-lg leading-8 text-gray-600'>
              Get the latest recipes, cooking tips and tricks, and product recommendations!
              <br />You'll be set up in minutes.
            </p>
          </div>

          {/* Right: Input + Button */}
          <form className='md:w-1/2 w-full flex flex-col sm:flex-row items-center gap-4'>
            <input
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='flex-1 rounded-md border border-gray-300 bg-primary px-4 py-3 text-white placeholder:text-white focus:outline-btnColor shadow'
              placeholder='Enter your email'
            />
            <button
              type='submit'
              className='rounded-md bg-btnColor px-6 py-3 text-base font-semibold text-white hover:bg-opacity-90 transition duration-200'
            >
              Subscribe
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Subcription;
