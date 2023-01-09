import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center flex-col'>
            <h1 className='text-[170px] text-teal-500'>404</h1>
            <h3 className='text-4xl mb-6'>OOPS! PAGE NOT FOUND </h3>
            <p className='text-base  text-black w-2/5 text-center'>The page you are looking for might have been removed or is temporarily unavailable</p>
            <Link to='/' className='border border-teal-700 px-5 py-0.5 mt-3 text-lg text-teal-600 font-semibold transition-all ease-in-out duration-700 hover:text-white hover:bg-teal-500'>Back to Homepage</Link>
        </div>
    );
}

export default Error;
