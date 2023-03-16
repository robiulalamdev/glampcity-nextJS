import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import stars from '../../assets/icons/buyer-reviews/stars.png'
import img1 from '../../assets/icons/buyer-reviews/flag.png'
import star from '../../assets/icons/buyer-reviews/star.png'
import starG from '../../assets/icons/buyer-reviews/star-gray.png'

const BuyerReviewMain = () => {
    return (
        <section className='bg-white min-h-screen'>
            <div className='max-w-[1440px] mx-auto px-4 md:px-8 py-6'>
                <div className='flex flex-col md:flex-row md:items-center gap-4 mt-16'>
                    <Link href='/product-details' className='flex justify-center items-center w-full md:w-56 h-14 border border-primary'>
                        <span className='text-xl text-primary'>Product details</span>
                    </Link>
                    <Link href='/company-profile' className='flex justify-center items-center w-full md:w-56 h-14 border border-primary'>
                        <span className='text-xl text-primary'>Company profile</span>
                    </Link>
                    <Link href='/buyer-reviews' className='flex justify-center items-center w-full md:w-56 h-14  bg-primary'>
                        <span className='text-xl text-white'>Buyer Reviews</span>
                    </Link>
                </div>
                <hr className='my-6' />

                {/* ----------------suplier services---------------- */}
                <div className='my-8'>
                    <h1 className='text-black font-bold text-2xl mb-4'>Supplier Service</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:max-w-[900px]'>
                        <div className='md:col-span-1 grid grid-cols-1 gap-4'>
                            <h1 className='text-5xl text-gray-600 font-bold'>4.0</h1>
                            <Image className='w-32' src={stars} alt="" />
                            <h1 className='text-xl text-gray-500 font-bold'>35 Reviews</h1>
                        </div>

                        <div className='md:col-span-2 grid grid-cols-1 gap-2'>
                            <div className='flex items-center gap-3'>
                                <div className='w-7 h-6 bg-white rounded border'></div>
                                <h1 className='text-black font-bold text-xl'>5</h1>
                                <Image className='w-5' src={star} alt="" />
                                <div class="w-full bg-gray-200 rounded-full h-5">
                                    <div class="bg-[#FF6600] h-5 rounded-full w-[100%]"></div>
                                </div>
                                <h1 className='text-black font-bold text-xl'>5</h1>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='w-7 h-6 bg-white rounded border'></div>
                                <h1 className='text-black font-bold text-xl'>4</h1>
                                <Image className='w-5' src={star} alt="" />
                                <div class="w-full bg-gray-200 rounded-full h-5">
                                    <div class="bg-[#FF6600] h-5 rounded-full w-[80%]"></div>
                                </div>
                                <h1 className='text-gray-300 font-bold text-xl'>4</h1>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='w-7 h-6 bg-white rounded border'></div>
                                <h1 className='text-black font-bold text-xl'>3</h1>
                                <Image className='w-5' src={starG} alt="" />
                                <div class="w-full bg-gray-200 rounded-full h-5">
                                    <div class="bg-[#FF6600] h-5 rounded-full w-[60%]"></div>
                                </div>
                                <h1 className='text-gray-300 font-bold text-xl'>3</h1>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='w-7 h-6 bg-gray-300 rounded border'></div>
                                <h1 className='text-black font-bold text-xl'>2</h1>
                                <Image className='w-5' src={starG} alt="" />
                                <div class="w-full bg-gray-200 rounded-full h-5">
                                    <div class="bg-[#FF6600] h-5 rounded-full w-[0%]"></div>
                                </div>
                                <h1 className='text-gray-300 font-bold text-xl'>0</h1>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='w-7 h-6 bg-gray-300 rounded border'></div>
                                <h1 className='text-black font-bold text-xl'>1</h1>
                                <Image className='w-5' src={starG} alt="" />
                                <div class="w-full bg-gray-200 rounded-full h-5">
                                    <div class="bg-[#FF6600] h-5 rounded-full w-[0%]"></div>
                                </div>
                                <h1 className='text-gray-300 font-bold text-xl'>0</h1>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <div className='w-full h-fit md:h-16 py-4 px-4 md:py-0 bg-[#0029FF14] rounded-md flex flex-col md:flex-row justify-start md:items-center gap-4'>
                        <h1 className='text-xl text-gray-600'>Filter:</h1>
                        <div className='flex items-center gap-2'>
                            <input type="radio" name="view" id="all" />
                            <label htmlFor='all' id='all' className='text-xl text-gray-900'>All</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="radio" name="view" id="positive" />
                            <label htmlFor='positive' id='positive' className='text-xl text-gray-900'>Positive Review</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="radio" name="view" id="negetive" />
                            <label htmlFor='negetive' id='negetive' className='text-xl text-gray-900'>Negative Review</label>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-6'>
                        <div className='flex items-center gap-8 md:gap-44 mt-4'>
                            <div className='grid grid-cols-1 gap-4'>
                                <h1 className='text-3xl font-bold text-black'>Nikolas410</h1>
                                <div className='flex justify-start items-center gap-3'>
                                    <Image className='w-14' src={img1} alt="" />
                                    <h1 className='text-3xl font-bold text-black'>USA</h1>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 gap-4'>
                                <Image className='w-36' src={stars} alt="" />
                                <h1 className='text-2xl text-gray-600'>Very good</h1>
                            </div>
                        </div>
                        <div className='flex items-center gap-8 md:gap-44 mt-4'>
                            <div className='grid grid-cols-1 gap-4'>
                                <h1 className='text-3xl font-bold text-black'>Nikolas410</h1>
                                <div className='flex justify-start items-center gap-3'>
                                    <Image className='w-14' src={img1} alt="" />
                                    <h1 className='text-3xl font-bold text-black'>USA</h1>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 gap-4'>
                                <Image className='w-36' src={stars} alt="" />
                                <h1 className='text-2xl text-gray-600'>Very good</h1>
                            </div>
                        </div>
                        <div className='flex items-center gap-8 md:gap-44 mt-4'>
                            <div className='grid grid-cols-1 gap-4'>
                                <h1 className='text-3xl font-bold text-black'>Nikolas410</h1>
                                <div className='flex justify-start items-center gap-3'>
                                    <Image className='w-14' src={img1} alt="" />
                                    <h1 className='text-3xl font-bold text-black'>USA</h1>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 gap-4'>
                                <Image className='w-36' src={stars} alt="" />
                                <h1 className='text-2xl text-gray-600'>Very good</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuyerReviewMain;