import React from 'react'
import TestimonialCard from '../cards/TestimonialCard'

const Testimonial = () => {
  return (
  <>
    <div className='w-[100vw] h-[60vh] flex flex-col  items-center bg-gray-300'>
<div className='pt-6'>
<h1 className='text-center font-bold text-3xl text-secular text-green-500'>TESTIMONIAL</h1>
        <span className='text-3xl '>What people say about us?</span>
</div>
    <div className='flex justify-evenly w-full pt-16'>
    <TestimonialCard/>
    <TestimonialCard/>
    
    </div>

    </div>
  </>
  )
}

export default Testimonial