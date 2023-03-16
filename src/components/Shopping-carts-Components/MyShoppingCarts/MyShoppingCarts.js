import React from 'react';
import blueRight from '../../.././assets/icons/shopping-cart-icons/blue-right.png'
import img4 from '../../../assets/images/product-details/product-images/img4.png'
import img1 from '../../../assets/images/product-details/product-images/img1.png'
import img2 from '../../../assets/images/product-details/product-images/img2.png'
import img3 from '../../../assets/images/product-details/product-images/img3.png'
import Image from 'next/image';

const MyShoppingCarts = ({ nextHandle }) => {
    const nexPermit = (data) => {
        nextHandle(data)
    }
    return (
        <section className='min-h-screen mt-16'>
            <div className='flex items-center gap-4 mb-4'>
                <Image className='w-6' src={blueRight} alt="" />
                <p className='text-[#4CAF50] text-sm md:text-xl font-semibold'>1 new item(s) have been added to your cart</p>
            </div>
            <div className='w-full grid lg:grid-cols-3 gap-5'>
                <div className='w-full md:col-span-2 h-fit flex justify-between gap-5 items-center border rounded-md p-4'>
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
                <div className='w-full lg:col-span-1 border rounded-md text-left p-4'>
                    <h1 className='text-black font-semibold text-xl'>My Shopping Cart <span className='text-gray-500 text-sm'>(2 items)</span></h1>

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
                    <div className='flex justify-center items-center gap-8 mt-4'>
                        <button className='flex justify-center items-center w-full md:w-56 h-12 rounded-[50px] border border-primary'>
                            <span className='text-primary uppercase text-xl'>GO TO CART</span>
                        </button>
                        <button onClick={() => nexPermit(2)} className='flex justify-center items-center w-full md:w-56 h-12 rounded-[50px] bg-primary'>
                            <span className='text-white uppercase text-xl'>Checkout</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='mt-8 py-4'>
                <h1 className='text-2xl text-black font-semibold text-left mb-4'>Just for you</h1>

                <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    <div className=''>
                        <Image className='w-full h-56' src={img1} alt="" />
                        <div className='p-2 border-b border-x rounded-b-md border-[#0029FF4D]'>
                            <h1 className='text-xl text-black text-left mb-2'>Trending product 2023 new arrival</h1>
                            <p className='font-semibold text-xl text-black text-left'><strong>$</strong>10.50</p>
                        </div>
                    </div>
                    <div className=''>
                        <Image className='w-full h-56' src={img2} alt="" />
                        <div className='p-2 border-b border-x rounded-b-md border-[#0029FF4D]'>
                            <h1 className='text-xl text-black text-left mb-2'>Trending product 2023 new arrival</h1>
                            <p className='font-semibold text-xl text-black text-left'><strong>$</strong>10.50</p>
                        </div>
                    </div>
                    <div className=''>
                        <Image className='w-full h-56' src={img3} alt="" />
                        <div className='p-2 border-b border-x rounded-b-md border-[#0029FF4D]'>
                            <h1 className='text-xl text-black text-left mb-2'>Trending product 2023 new arrival</h1>
                            <p className='font-semibold text-xl text-black text-left'><strong>$</strong>10.50</p>
                        </div>
                    </div>
                    <div className=''>
                        <Image className='w-full h-56' src={img4} alt="" />
                        <div className='p-2 border-b border-x rounded-b-md border-[#0029FF4D]'>
                            <h1 className='text-xl text-black text-left mb-2'>Trending product 2023 new arrival</h1>
                            <p className='font-semibold text-xl text-black text-left'><strong>$</strong>10.50</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyShoppingCarts;