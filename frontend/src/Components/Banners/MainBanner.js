import React from 'react'
import "../../pages/home/home.css";
import Img from "../../images/card/one.jpg"
const MainBanner = () => {
  return (
    <>
        <div className='w-[100vw] h-[45vh] flex justify-between'>
            <img className='w-[45%]' src={Img} alt="" />
            <div className='w-[55%] pl-12 flex justify-around flex-col'>
<div className='-mt-8'><h1 className='font-normal text-4xl text-secular '>WedBook - Your Personal <br />
Wedding Planner</h1></div>
<div className='-mt-12'><span className='text-lg font-semibold text-primary'>Plan your wedding with Us</span>
<h1  className='font-normal text-3xl text-secular'>Leave us to <br />
focus on you...</h1></div>
            </div>
        </div>
    </>
  )
}

export default MainBanner