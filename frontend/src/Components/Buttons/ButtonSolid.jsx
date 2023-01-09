import React from 'react';

const ButtonSolid = ({ clickEvent, text }) => {
    return (
        <button onClick={clickEvent} className='border  border-teal-700 px-5 py-0.5 mt-3 text-lg text-white bg-primary font-semibold transition-all ease-in-out duration-700 hover:bg-white hover:text-teal-500'>{text}</button>

    );
}

export default ButtonSolid;
