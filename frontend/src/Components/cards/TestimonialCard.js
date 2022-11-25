import React from 'react';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

const TestimonialCard = () => {
  return (
    <>
      <div className='bg-white text-center w-1/4 '>
        <div className='w-full flex justify-center items-center'>
          <ImQuotesLeft className='text-4xl my-2 text-primary' />
        </div>
        <p className='text-testimonial testimonial-message px-6 text-center italic'>Thank you soo much for all hard work,your flexibility and dilligence in pulling together a very successfull event.It was a pleasure to work with you</p>
        <h1 className='py-2 font-bold text-md text-ubunto text-gray-500'>Tahmeed Ullah</h1>
      </div>
    </>
  )
}

export default TestimonialCard;