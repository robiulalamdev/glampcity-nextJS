import React, { useState } from 'react';
import stars from '../../assets/images/product-details/product-images/stars.png'
import blueRight from '../../assets/images/product-details/product-images/blue-right.png'
import message from '../../assets/images/product-details/product-images/message.png'
import card from '../../assets/images/product-details/product-images/card.png'
import comment from '../../assets/images/product-details/product-images/comment.png'
import img1 from '../../assets/images/product-details/product-images/img1.png'
import img2 from '../../assets/images/product-details/product-images/img2.png'
import img3 from '../../assets/images/product-details/product-images/img3.png'
import img4 from '../../assets/images/product-details/product-images/img4.png'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedImage } from '@/Slices/viewProductSlice';

const ProductReview = () => {
    const { images, selectedImage } = useSelector((state) => state.viewProductSlice)
    const dispatch = useDispatch()
    return (
        <section className='mt-8'>
            <div className='grid md:grid-cols-2 lg:grid-cols-10 gap-5 cursor-pointer'>
                <div className='lg:col-span-3 border rounded-md w-full'>
                    <div>
                        <img className='w-full h-96' src='https://i.postimg.cc/x1DwgCZd/img1.png' alt="" />
                    </div>
                    <div className='grid grid-cols-4 gap-4 p-4'>
                        {
                            images.map(img => <div
                                className='w-full h-full'>
                                <img className='w-full h-full' src='https://i.postimg.cc/x1DwgCZd/img1.png' alt="" />
                            </div>)
                        }
                    </div>
                </div>

                <div className='lg:col-span-4 border rounded-md w-full p-2 md:p-4'>
                    <div className='border-b border-gray-400 mb-4 pb-4'>
                        <h1 className='text-black font-bold text-left text-2xl'>Wholesale men’s casual shoes</h1>
                        <div className='flex items-center gap-4 mt-4'>
                            <Image className='w-24' src={stars} alt="" />
                            <span className='text-primary text-md'>5 Ratings</span>
                        </div>
                    </div>
                    <div className='border-b border-gray-400 mb-4 pb-4'>
                        <h1 className='text-primary font-bold text-left text-3xl'>$10.00/ pieces</h1>
                        <h1 className='text-gray-500 mt-2 font-semibold text-left text-xl'>Enter Promo Code</h1>

                        <div className='flex items-center mt-4 w-full'>
                            <input className='w-full h-12 focus:outline-none border border-l border-y border-gray-500 px-2' type="text" placeholder='Promo Code' />
                            <button className='w-44 h-12 flex justify-center items-center text-white bg-primary'>
                                <span className='text-xl uppercase'>Submit</span>
                            </button>
                        </div>
                    </div>
                    <div className='border-b border-gray-400 mb-4 pb-4'>
                        <div className='grid grid-cols-3 mb-2'>
                            <h1 className='col-span-1 text-xl text-gray-500 text-left'>Color</h1>
                            <div className='col-span-2 flex items-center gap-4'>
                                <div className='w-6 h-6 bg-rose-600'></div>
                                <div className='w-6 h-6 bg-green-600'></div>
                                <div className='w-6 h-6 bg-sky-600'></div>
                                <div className='w-6 h-6 bg-yellow-600'></div>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 mb-2 mt-4'>
                            <h1 className='col-span-1 text-xl text-gray-500 text-left'>Size</h1>
                            <div className='col-span-2 flex items-center gap-4'>
                                <div className='w-10 h-8 border rounded'><span>2</span></div>
                                <div className='w-10 h-8 border rounded'><span>4</span></div>
                                <div className='w-10 h-8 border rounded'><span>8</span></div>
                                <div className='w-10 h-8 border rounded'><span>8.5</span></div>
                            </div>
                        </div>
                        <div className='grid md:grid-cols-5 mb-2 mt-4'>
                            <h1 className='md:col-span-1 text-xl text-gray-500 text-left'>Shipping:</h1>
                            <h1 className='md:col-span-4 text-gray-500 text-left text-xl'>Express ( Ocean, Land, Air )</h1>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex gap-8 mt-4'>
                            <div className='flex flex-col justify-start '>
                                <h1 className='text-gray-500 text-left text-xl'>Protection:</h1>
                            </div>
                            <div className='mt-1'>
                                <div className='flex items-center gap-4'>
                                    <Image className='w-4' src={blueRight} alt="" />
                                    <h1 className='text-gray-500'>On time delivery</h1>
                                </div>
                                <div className='flex items-center gap-4 mt-1'>
                                    <Image className='w-4' src={blueRight} alt="" />
                                    <h1 className='text-gray-500'>Refund policy</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-3 border rounded-md w-full p-2 md:p-4'>
                    <p className='text-center text-xl text-gray-500 mb-4'>For more detailed information including pricing, customization, and shipping</p>

                    <button className='flex justify-center items-center gap-4 mb-4 w-full h-12 bg-primary rounded-[50px]'>
                        <Image className='w-6' src={message} alt="" />
                        <span className='text-white'>Contact Supplier</span>
                    </button>
                    <button className='flex justify-center items-center gap-4 mb-4 w-full h-12 border border-primary rounded-[50px]'>
                        <Image className='w-6' src={comment} alt="" />
                        <span className='text-primary'>Contact Supplier</span>
                    </button>

                    <div className='mt-6 border p-3 rounded-md'>
                        <h1 className='text-xl text-left text-black font-semibold'>Baoding Shunxuan Trading Co, Ltd</h1>
                        <div className='flex items-center gap-2 mt-4'>
                            <Image className='w-6' src={card} alt="" />
                            <h1 className='text-gray-500 text-xl'>Trading Company</h1>
                        </div>
                        <div className='flex justify-center items-center gap-2 mt-6'>
                            <div className='flex flex-col justify-center items-center w-full h-20 p-1 bg-[#F2F4FF] rounded-md'>
                                <h1 className='text-gray-500 text-xl text-center'>Response time</h1>
                                <h1 className='text-primary font-semibold text-2xl text-center'>2h+</h1>
                            </div>
                            <div className='flex flex-col justify-center items-center w-full h-20 p-1 bg-[#F2F4FF] rounded-md'>
                                <h1 className='text-gray-500 text-xl text-center'>On- time Delivery</h1>
                                <h1 className='text-primary font-semibold text-2xl text-center'>81.6%</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-8 py-4'>
                <h1 className='text-2xl text-black font-semibold text-left mb-4'>You may also like</h1>

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

export default ProductReview;