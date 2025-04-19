import React from 'react'
import blogData from '../resources/blog.js';


const Resources = () => {
  return (
    <section className='px-6 lg:px-12 py-20'>
      <h2 className='text-3xl text-center mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed'>All Recipes</h2>

      <article className='py-6 sm:py-12'>
        <div className='space-y-2 text-center'>
        <div className='container  p-6 mx-auto space-y-8 '>
            <h2 className='text-3xl font-bold'>partem repriminique an pto</h2>
            <p className='text-sm mb-16'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
        </div>
        <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4'>
           {
            blogData.map((blog,index) => (
                <div key={index} className="flex flex-col md:flex-row items-center ">
                 <img src="frontend/src/assets/OIP.jpg" alt={blog.title} />

                    <h3 className='text-2xl font-semibold'> {blog.title}</h3>
                    <p className='text-sm'>{blog.date}</p>
                    <p className='text-sm'>{blog.views}</p>
                    <p className='text-sm'>{blog.category}</p>
                    </div>
            ))

           }
        </div>

        </div>
    </article>
    </section>
   
  )
}

export default Resources
