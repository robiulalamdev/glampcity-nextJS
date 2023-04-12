import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import upperArrow from '../../assets/images/create-company-images/upperArrow.png'

const CompanyIntroduction = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleCompanyDetails = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(handleCompanyDetails)} className=''>
            <div
                className='grid grid-cols-1 gap-6 border border-primary rounded-xl h-fit w-full mt-6 px-2 py-6 md:px-12'>

                <div className='flex flex-col md:flex-row md:items-start gap-6'>
                    <h1 className='text-left font-bold text-gray-900'>Company Logo:</h1>
                    <div className='flex items-center gap-4'>
                        <div className='w-40 h-40 flex justify-center items-center bg-gray-200 p-6'>
                            <Image className='w-full h-full' src={upperArrow} alt="" />
                        </div>
                        <div className='flex flex-col justify-between items-center gap-4 h-40'>
                            <div className='relative flex justify-center items-center w-28 h-10 border border-primary rounded'>
                                <span className='text-center'>Browse</span>
                                <input className='absolute w-full h-full opacity-0' type="file" name="image" id="" />
                            </div>
                            <div className='relative flex justify-center items-center w-28 h-10'>
                                <span className='text-primary text-center'>Browse</span>
                                <input className='absolute w-full h-full opacity-0' type="file" name="image" id="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid md:grid-cols-6 w-full md:w-fit'>
                    <h1 className='md:col-span-2 text-left font-bold text-gray-900'>Detailed Company:</h1>
                    <textarea className='md:col-span-4 w-full md:w-96 h-48 p-4 border border-blue-400 focus:border-primary rounded focus:outline-none resize-none' name="detailedCompany" id="detailedCompany" cols="30" rows="10"></textarea>
                </div>

                <div className='grid md:grid-cols-6 w-full md:w-fit'>
                    <h1 className='md:col-span-2 text-left font-bold text-gray-900'>Company Photos:</h1>
                    <div className='md:col-span-4 w-full md:w-96 h-fit p-4 border border-blue-400 rounded'>
                        <div className='flex justify-between items-center gap-4'>
                            <div className='relative flex justify-center items-center w-32 h-10 border border-primary rounded'>
                                <span className='text-center'>Browse</span>
                                <input className='absolute w-full h-full opacity-0' type="file" name="image" id="" />
                            </div>
                            <div className='relative flex justify-center items-center w-32 h-10'>
                                <span className='text-primary text-center'>Browse</span>
                                <input className='absolute w-full h-full opacity-0' type="file" name="image" id="" />
                            </div>
                        </div>

                        <hr className='border border-dashed border-blue-400 my-4' />
                        <div className='flex items-center gap-4'>
                            <div className='w-20 md:w-28 h-20 md:h-28 flex justify-center items-center bg-gray-200 p-6'>
                                <Image className='w-full h-full' src={upperArrow} alt="" />
                            </div>
                            <div className='w-20 md:w-28 h-20 md:h-28 flex justify-center items-center bg-gray-200 p-6'>
                                <Image className='w-full h-full' src={upperArrow} alt="" />
                            </div>
                            <div className='w-20 md:w-28 h-20 md:h-28 flex justify-center items-center bg-gray-200 p-6'>
                                <Image className='w-full h-full' src={upperArrow} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

                <h1 className='text-black font-bold text-xl mb-4'>Trade Show:</h1>


                <div className='grid md:grid-cols-6 w-full md:w-fit'>
                    <label className='md:col-span-2 text-left font-bold text-gray-900'><span className='text-rose-600'>*</span>CTrade show name:</label>
                    <div className='md:col-span-4 grid grid-cols-1 gap-1'>
                        <input {...register('cTradeName', { required: 'Company Name is required' })}
                            className='max-w-full w-full md:w-96 h-10 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none' type="text" name="cTradeName" id="cTradeName" />
                        {errors.cTradeName && <p className='text-red-600 text-sm'>{errors.cTradeName.message}</p>}
                    </div>
                </div>


                <div className='grid md:grid-cols-6 w-full md:w-fit'>
                    <label className='md:col-span-2 text-left font-bold text-gray-900'><span className='text-rose-600'>*</span>Date Attended:</label>
                    <div className='md:col-span-4 flex items-center gap-4 w-full md:w-fit'>
                        <div className='grid grid-cols-1 gap-1'>
                            <input {...register('year', { required: 'Year is required' })}
                                className='max-w-full w-full md:w-32 h-10 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none' type="text" name="year" id="year" />
                            {errors.year && <p className='text-red-600 text-sm'>{errors.year.message}</p>}
                        </div>
                        <div className='grid grid-cols-1 gap-1'>
                            <input {...register('month', { required: 'Month is required' })}
                                className='max-w-full w-full md:w-32 h-10 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none' type="text" name="month" id="month" />
                            {errors.month && <p className='text-red-600 text-sm'>{errors.month.message}</p>}
                        </div>
                    </div>
                </div>

                <div className='grid md:grid-cols-6 w-full md:w-fit'>
                    <label className='md:col-span-2 text-left font-bold text-gray-900'><span className='text-rose-600'>*</span>Host (country/region):</label>
                    <div className='md:col-span-4 grid grid-cols-1 gap-1'>
                        <input {...register('country', { required: 'Country/Region is required' })}
                            className='max-w-full w-full md:w-72 h-10 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none' type="text" name="country" id="country" />
                        {errors.country && <p className='text-red-600 text-sm'>{errors.country.message}</p>}
                    </div>
                </div>

                <div className='grid md:grid-cols-6 w-full md:w-fit'>
                    <h1 className='md:col-span-2 text-left font-bold text-gray-900'>Trade show instruction:</h1>
                    <textarea className='md:col-span-4 w-full md:w-96 h-32 p-4 border border-blue-400 focus:border-primary rounded focus:outline-none resize-none' name="detailedCompany" id="detailedCompany" cols="30" rows="10"></textarea>
                </div>

                <div className='grid md:grid-cols-6 w-full md:w-fit'>
                    <h1 className='md:col-span-2 text-left font-bold text-gray-900'>Trade show Photos:</h1>
                    <div className='md:col-span-4 w-full md:w-96 h-fit p-4 border border-blue-400 rounded'>
                        <div className='flex justify-between items-center gap-4'>
                            <div className='relative flex justify-center items-center w-32 h-10 border border-primary rounded'>
                                <span className='text-center'>Browse</span>
                                <input className='absolute w-full h-full opacity-0' type="file" name="image" id="" />
                            </div>
                            <div className='relative flex justify-center items-center w-32 h-10'>
                                <span className='text-primary text-center'>Browse</span>
                                <input className='absolute w-full h-full opacity-0' type="file" name="image" id="" />
                            </div>
                        </div>

                        <hr className='border border-dashed border-blue-400 my-4' />
                        <div className='flex items-center gap-4'>
                            <div className='w-20 md:w-28 h-20 md:h-28 flex justify-center items-center bg-gray-200 p-6'>
                                <Image className='w-full h-full' src={upperArrow} alt="" />
                            </div>
                            <div className='w-20 md:w-28 h-20 md:h-28 flex justify-center items-center bg-gray-200 p-6'>
                                <Image className='w-full h-full' src={upperArrow} alt="" />
                            </div>
                            <div className='w-20 md:w-28 h-20 md:h-28 flex justify-center items-center bg-gray-200 p-6'>
                                <Image className='w-full h-full' src={upperArrow} alt="" />
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <div className='flex items-center justify-start gap-4'>
                <button type="submit" className='w-36 h-10 mt-8 flex justify-center items-center rounded-md bg-primary hover:bg-darkPrimary text-white font-bold'>
                    <h1>SAVE</h1>
                </button>
                <button type="submit" className='w-36 h-10 mt-8 flex justify-center items-center rounded-md bg-primary hover:bg-darkPrimary text-white font-bold'>
                    <h1>SUBMIT</h1>
                </button>
            </div>
        </form >
    );
};

export default CompanyIntroduction;