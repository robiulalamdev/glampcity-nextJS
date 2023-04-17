import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';

const WaitApproveProduct = () => {
    return (
        <div>
            <div className='grid grid-cols-1 gap-4 border border-primary rounded-xl h-fit w-full mt-6 px-2 py-6 md:px-12 mb-16'>
                <div className='flex items-start gap-2'>
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.9994 0.166992C9.54102 0.166992 0.166016 9.54199 0.166016 21.0003C0.166016 32.4587 9.54102 41.8337 20.9994 41.8337C32.4577 41.8337 41.8327 32.4587 41.8327 21.0003C41.8327 9.54199 32.4577 0.166992 20.9994 0.166992ZM16.8327 31.417L6.41602 21.0003L9.35352 18.0628L16.8327 25.5212L32.6452 9.70866L35.5827 12.667L16.8327 31.417Z" fill="#0029FF" fill-opacity="0.65" />
                    </svg>
                    <div className='grid grid-cols-1 gap-2'>
                        <h1 className='text-xl font-bold'>Your product information has been submitted.</h1>
                        <span>Your product will be checked and the result will be available in 24 hours.
                            <span className='text-primary text-sm'>Check which categories the product will be listed under.</span></span>

                        <div className='flex flex-col-reverse md:flex-row md:items-center gap-2'>
                            <Button className='w-fit px-4 h-12 bg-primary hover:bg-darkPrimary duration-300 flex justify-center items-center rounded'>
                                <h1 className='text-white font-semibold'>Back to manage product</h1>
                            </Button>
                            <span>You can continue to <span className='text-primary text-sm'>Display a New Product</span></span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default WaitApproveProduct;

