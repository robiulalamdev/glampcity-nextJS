import Image from 'next/image';
import React from 'react';

const ProceedCheckout = ({ nextHandle }) => {
    return (
        <section className='min-h-screen mt-16'>
            <div className='w-full grid lg:grid-cols-3 gap-5'>

                <div className='col-span-2 grid grid-cols-1 gap-5'>
                    <div className='w-full h-fit flex justify-between gap-5 items-center border rounded-md p-4'>
                        <div className='flex justify-between items-center gap-4'>
                            <div>
                                <Image className='w-40 h-32' src='https://i.postimg.cc/6QzF9hp7/img4.png' alt="" />
                            </div>
                            <div className='text-left'>
                                <h1 className='text-black font-semibold text-xl text-left'>Wholesale men’s casual shoes</h1>
                                <div>
                                    <p className='text-gray-500'>Brand: No</p>
                                    <p className='text-gray-500'>Color: Black</p>
                                </div>
                                <div className='flex items-center gap-4 mt-3'>
                                    <p className='text-gray-500'>Price: </p>
                                    <h1 className='text-primary font-bold text-xl'>$10.00</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-black font-semibold text-xl mb-3'>Quantity</h1>
                            <h1 className='text-black font-semibold text-xl mb-3'>1</h1>
                            <h1 className='text-[#DB1A10] font-semibold underline'>Remove</h1>
                        </div>
                    </div>

                    <div className='w-full h-fit flex justify-between gap-5 items-center border rounded-md p-4'>
                        <div className='flex justify-between items-center gap-4'>
                            <div>
                                <Image className='w-40 h-32' src='https://i.postimg.cc/6QzF9hp7/img4.png' alt="" />
                            </div>
                            <div className='text-left'>
                                <h1 className='text-black font-semibold text-xl text-left'>Wholesale men’s casual shoes</h1>
                                <div>
                                    <p className='text-gray-500'>Brand: No</p>
                                    <p className='text-gray-500'>Color: Black</p>
                                </div>
                                <div className='flex items-center gap-4 mt-3'>
                                    <p className='text-gray-500'>Price: </p>
                                    <h1 className='text-primary font-bold text-xl'>$10.00</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-black font-semibold text-xl mb-3'>Quantity</h1>
                            <h1 className='text-black font-semibold text-xl mb-3'>1</h1>
                            <h1 className='text-[#DB1A10] font-semibold underline'>Remove</h1>
                        </div>
                    </div>
                </div>


                <div className='w-full h-fit lg:col-span-1 border rounded-md text-left p-4'>
                    <h1 className='text-black font-semibold text-xl'>Order Summary</h1>

                    <div className='flex justify-between items-center mt-3'>
                        <p className='text-gray-500 text-xl'>Subtotal</p>
                        <p className='text-xl font-bold text-black'>$20.00</p>
                    </div>

                    <div className='flex items-center mt-4 w-full'>
                        <input className='w-full h-12 focus:outline-none border border-l border-y border-gray-500 px-2' type="text" placeholder='Enter Voucher Code' />
                        <button className='w-44 h-12 flex justify-center items-center text-white bg-primary'>
                            <span className='text-xl uppercase'>Apply</span>
                        </button>
                    </div>
                    <div className='flex justify-between items-center mt-3'>
                        <p className='text-gray-500 text-xl'>Total</p>
                        <p className='text-xl font-bold text-black'>$20.00</p>
                    </div>
                    <div className='w-full mt-4'>
                        <button onClick={() => nextHandle(3)} className='flex justify-center items-center w-full h-10 rounded-[50px] bg-primary'>
                            <span className='text-white uppercase'>Proceed to Checkout</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProceedCheckout;