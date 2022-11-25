import React from 'react'
import { RatingData } from "../Data/RatingData";
const RatingCard = () => {
  return (
 <>
   
        {
                RatingData.map((data,index)=>(
                    <div className='w-[800px] flex justify-between border border-x border-y border-gray-300 p-4 flex-col'>
        <div className='flex justify-between w-full'>
            <div className='py-2'>
         
            <h1 className='text-md font-semibold'>{data.customer}</h1>
            <span className='text-xs'>Date:{data.date}</span>
            </div>
        
            <span className='text-md'>{data.review}</span>
        </div>
        <p className='w-full flex text-xs'>
        { data.comment}
        </p>
        </div>
                ))
            }
   
 </>
  )
}

export default RatingCard;