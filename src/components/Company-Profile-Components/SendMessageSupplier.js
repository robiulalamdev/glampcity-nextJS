import Image from 'next/image';
import React from 'react';
import downArrow from '../../assets/images/product-details/product-images/down-arrow.png'

const SendMessageSupplier = () => {
    return (
        <div className='mt-4'>
            <h1 className='text-2xl text-primary font-semibold text-left mb-4'>Send your messages to this supplier</h1>
            <div className='flex items-center gap-5 text-gray-500'>
                <p>To :</p>
                <p>Lisa Yang</p>
            </div>

            <h1 className='text-md text-black font-semibold text-left mb-3 mt-4'>Message :</h1>
            <form action="">
                <textarea className='border border-[#0029FF4D] focus:outline-primary rounded-md h-72 w-full p-6' name="message" placeholder='Enter your inquiry details such as product name, color, size, MOQ, FOB, etc.  '></textarea>
                <p className='text-sm text-left text-gray-500 py-2'>Your message must be between 20-8000 characters</p>
                <div>
                    <label className='text-left block' htmlFor="quantity">Quantity:</label>
                    <div className='grid md:grid-cols-2 gap-4 md:gap-16'>
                        <div>
                            <input className='block px-3 w-full h-10 focus:outline-none border' defaultValue='1' name='quantity' type="number" />
                        </div>
                        <div className='relative cursor-pointer'>
                            <input className='cursor-pointer block px-3 w-full h-10 focus:outline-none border' type="text" placeholder='Pair / Pairs' />

                            <Image className='cursor-pointer w-4 absolute top-4 right-4' src={downArrow} alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-3 mt-6'>
                    <input type="checkbox" name="" id="" />
                    <span className='text-sm text-left text-gray-500'>Recommend matching suppliers if this supplier  doesn’t contact me on message center within 24 hours.</span>
                </div>
                <div className='flex items-center gap-3 mt-6'>
                    <input type="checkbox" name="" id="" />
                    <span className='text-sm text-left text-gray-500'>I agree to share my <strong className='text-gray-900'>Business Card</strong> to the supplier</span>
                </div>

                <h1 className='text-sm text-left text-gray-500 pt-8'>Recommend matching suppliers if this supplier  doesn’t contact me on message center within 24 hours.</h1>

                <button className='w-56 h-12 bg-primary flex justify-center items-center rounded-md mx-auto my-14' type="submit">
                    <span className='text-white text-md font-semibold'>Submit</span>
                </button>
            </form>
        </div>
    );
};

export default SendMessageSupplier;