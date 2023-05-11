import React from 'react';

const ViewOrderFilter = ({ data }) => {
    // console.log(data);
    return (
        <div className='grid grid-cols-2 items-center gap-2 w-fit mx-auto ml-0'>
            <h1 className='text-right text-gray-600'>{data?.title}</h1>
            <div className='w-full h-10 border border-blue-300 rounded'>
                <input className='px-2 text-sm h-full w-full focus:outline-none rounded' type="text" placeholder='Please select' />
            </div>
        </div>
    );
};

export default ViewOrderFilter;