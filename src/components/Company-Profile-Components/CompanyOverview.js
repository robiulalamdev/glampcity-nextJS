import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';


const CompanyOverview = () => {
    const { product } = useSelector((state) => state.viewProductSlice)
    return (
        <section className='mt-6 md:mt-32'>
            <div className='flex flex-col md:flex-row md:items-center gap-4 mt-16'>
                <Link href={`/products/${product?._id}`} className='flex justify-center items-center w-full md:w-56 h-14 border border-primary'>
                    <span className='text-xl text-primary'>Product details</span>
                </Link>
                <Link href='/company-profile' className='flex justify-center items-center w-full md:w-56 h-14 bg-primary'>
                    <span className='text-xl text-white'>Company profile</span>
                </Link>
                <Link href='/buyer-reviews' className='flex justify-center items-center w-full md:w-56 h-14 border border-primary'>
                    <span className='text-xl text-primary'>Buyer Reviews</span>
                </Link>
            </div>
            <hr className='my-6' />

            <div className='mb-6'>
                <h1 className='text-2xl text-primary font-semibold text-left mb-4'>Company Overview</h1>

                <div className='border border-[#0029FF4D] rounded-md'>
                    <h1 className='text-left font-semibold text-black text-xl p-3 md:px-6 pt-6'>Company Album</h1>
                    <div className='grid md:grid-cols-2 gap-6 p-3 md:p-6'>
                        <div className=''>
                            <div className='grid grid-cols-5 mb-4'>
                                <h1 className='col-span-2 text-left text-gray-500 text-md font-semibold'>Business Type:</h1>
                                <h1 className='col-span-3 text-left text-gray-500 text-md'>Trading Company</h1>
                            </div>
                            <div className='grid grid-cols-5 mb-4'>
                                <h1 className='col-span-2 text-left text-gray-500 text-md font-semibold'>Main Product</h1>
                                <h1 className='col-span-3 text-left text-gray-500 text-md'>Man’s sports shoe, Women’s sports shoe, <br /> Running shoes</h1>
                            </div>
                            <div className='grid grid-cols-5 mb-4'>
                                <h1 className='col-span-2 text-left text-gray-500 text-md font-semibold'>Total Annual Revenue:</h1>
                                <h1 className='col-span-3 text-left text-gray-500 text-md'>Bellow $1 million</h1>
                            </div>
                            <div className='grid grid-cols-5 mb-4'>
                                <h1 className='col-span-2 text-left text-gray-500 text-md font-semibold'>Certification</h1>
                                <h1 className='col-span-3 text-left text-gray-500 text-md'>Salesforce Certified Administrator</h1>
                            </div>
                            <div className='grid grid-cols-5 mb-4'>
                                <h1 className='col-span-2 text-left text-gray-500 text-md font-semibold'>Main Market</h1>
                                <h1 className='col-span-3 text-left text-gray-500 text-md'>Asia 30% <br /> Middle-East 20% <br /> Europe 10%</h1>
                            </div>
                        </div>

                        <div className=''>
                            <div className='grid grid-cols-5 mb-4'>
                                <h1 className='col-span-2 text-left text-gray-500 text-md font-semibold'>Country / Region:</h1>
                                <h1 className='col-span-3 text-left text-gray-500 text-md'>China</h1>
                            </div>
                            <div className='grid grid-cols-5 mb-4'>
                                <h1 className='col-span-2 text-left text-gray-500 text-md font-semibold'>Total Employees</h1>
                                <h1 className='col-span-3 text-left text-gray-500 text-md'>10-50 People</h1>
                            </div>
                            <div className='grid grid-cols-5 mb-4'>
                                <h1 className='col-span-2 text-left text-gray-500 text-md font-semibold'>Established:</h1>
                                <h1 className='col-span-3 text-left text-gray-500 text-md'>2018</h1>
                            </div>
                            <div className='grid grid-cols-5 mb-4'>
                                <h1 className='col-span-2 text-left text-gray-500 text-md font-semibold'>Production Certificate:</h1>
                                <h1 className='col-span-3 text-left text-gray-500 text-md'>Salesforce Certified Administrator</h1>
                            </div>
                            <div className='grid grid-cols-5 mb-4'>
                                <h1 className='col-span-2 text-left text-gray-500 text-md font-semibold'>Trade Marks:</h1>
                                <h1 className='col-span-3 text-left text-gray-500 text-md'>Ade Better</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyOverview;