import React from 'react';

const Input = ({ text }) => {
    return (
        <input type="text" className="border border-gray-400 w-[80%] rounded-lg px-3 py-1 mt-3 text-base outline-none " placeholder={text} required />

    );
}

export default Input;
