import React from 'react'
import "../../pages/Customer/home.css";
import Img from "../../images/card/one.jpg"
const MainBanner = () => {
  return (
    <>
      <div className='w-[100vw] h-[45vh] flex justify-between px-1'>
        <img className='w-[40%]' src={Img} alt="" />
        <div className='w-[60%] pl-12 flex justify-around flex-col border bg-white'>
          <div className='-mt-8'><h1 className='font-normal text-4xl text-ubunto '>WedBook - Your Personal <br />
            Wedding Planner</h1></div>
          <div className='-mt-12'><span className='font-bold text-ubunto text-primary'>Plan your wedding with Us</span>
            <h1 className='font-normal text-3xl text-ubunto'>Leave us to <br />
              focus on you...</h1></div>
        </div>
      </div>
    </>
  )
}

export default MainBanner