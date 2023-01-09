import React from 'react';

const ButtonOutline = ({ text, clickEvent }) => {
    return (
        <button onClick={clickEvent} className='border  border-teal-700 px-5 py-0.5 mt-3 text-lg text-teal-600 font-semibold transition-all ease-in-out duration-700 hover:text-white hover:bg-teal-500'>{text}</button>
    );
}

export default ButtonOutline;
