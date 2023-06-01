import DeleteModal from '@/components/Modals/DeleteModal';
import React, { useState } from 'react';


const MyShoppingCard = ({ data, handleGetCartProducts }) => {
    const [deleteModal, setDeleteModal] = useState(false)


    return (
        <div className='w-full h-fit flex justify-between gap-5 items-center border rounded-md p-4'>
            <div className='flex justify-between items-center gap-4'>
                <div>
                    <img className='w-24 h-24' src={data?.product?.images[0]} alt="" />
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
                <h1 className='text-black font-semibold text-xl mb-3'>{data?.quantity}</h1>


                <button onClick={() => setDeleteModal(true)}
                    className='text-[#DB1A10] hover:text-rose-800 font-semibold underline cursor-pointer'>Remove</button>

            </div>
            <DeleteModal open={deleteModal} close={setDeleteModal} endpoint={`cartProduct/${data?._id}`} refetch={handleGetCartProducts} />
        </div>
    );
}

export default MyShoppingCard;