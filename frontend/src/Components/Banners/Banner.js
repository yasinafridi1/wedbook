import React from 'react'
import "../../pages/Customer/home.css";

const Banner = () => {
  return (
    <>
      <div className="Banner flex justify-center items-center flex-col">
        <h1 className="text-gray-300 font-extrabold text-4xl text-ubunto pb-4">Celebrate with Us</h1>
        <span className="text-center text-gray-300 font-semibold">
          As the premier event planning company in the area,Each<br />
          event and client is unique and we believe our services <br />
          should be as well
        </span>
      </div>
    </>
  )
}

export default Banner