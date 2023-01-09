import React from 'react';

const CheckList = ({ checklistText }) => {
    return (
        <div className='flex items-center mt-1 ml-4'>
            <input type="checkbox" className='w-[13px] h-[13px]' /> <small className='pl-3 text-base font-semibold'>{checklistText}</small>
        </div>
    );
}

export default CheckList;
