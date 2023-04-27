import React from 'react';
import { Popconfirm } from 'antd';


const MyShoppingCard = ({ data, handleRemove }) => {
    // console.log(data);

    return (
        <div className='w-full h-fit flex justify-between gap-5 items-center border rounded-md p-4'>
            <div className='flex justify-between items-center gap-4'>
                <div>
                    <img className='w-40 h-32' src={data?.images[0]} alt="" />
                </div>
                <div className='text-left'>
                    <h1 className='text-black font-semibold text-xl text-left'>{data?.title}</h1>
                    <div>
                        <p className='text-gray-500'>Brand: No</p>
                        <p className='text-gray-500'>Color: Black</p>
                    </div>
                    <div className='flex items-center gap-4 mt-3'>
                        <p className='text-gray-500'>Price: </p>
                        <h1 className='text-primary font-bold text-xl'>${data?.price}</h1>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-black font-semibold text-xl mb-3'>Quantity</h1>
                <h1 className='text-black font-semibold text-xl mb-3'>1</h1>

                <Popconfirm
                    title="Delete the Shipping Address"
                    description="Are you sure to delete this Address?"
                    className='text-black'
                    onConfirm={() => handleRemove(data?._id)}
                    okText="Yes"
                    cancelText="No"
                >
                    <button className='text-[#DB1A10] hover:text-rose-800 font-semibold underline cursor-pointer'>Remove</button>
                </Popconfirm>

            </div>
        </div>
    );
}

export default MyShoppingCard;