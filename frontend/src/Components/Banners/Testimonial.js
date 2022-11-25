import React from 'react'
import TestimonialCard from '../cards/TestimonialCard'

const Testimonial = () => {
  return (
    <>
      <div className='w-[100vw] flex flex-col  items-center mb-4'>
        <div className='pt-6'>
          <h1 className='text-center font-bold text-xl text-ubunto text-primary'>Testimonial</h1>
          <span className='text-2xl font-semibold'>What people say about us?</span>
        </div>
        <div className='flex justify-evenly w-full pt-8'>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>

      </div>
    </>
  )
}

export default Testimonial