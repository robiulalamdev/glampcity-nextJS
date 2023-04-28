import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import upperArrow from '../../assets/images/create-company-images/upperArrow.png'
import { setShowTabsData } from '@/Slices/createCompanySlice';
import { useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";

const months = ["January", "February"]

const CompanyIntroduction = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [companyLogo, setCompanyLogo] = useState(null)
    const [companyPhotos, setCompanyPhotos] = useState([])
    const dispatch = useDispatch()

    console.log(companyPhotos);

    const [startDate, setStartDate] = useState(new Date());

    const companyLogoRef = useRef()
    const companyPhotoRef = useRef()

    const handleCompanyDetails = (data) => {
        console.log(data);
    }


    const handleCompanyLogo = () => {
        companyLogoRef.current.click()
    }

    const handleCompanyPhoto = () => {
        companyPhotoRef.current.click()
    }

    return (
        <form onSubmit={handleSubmit(handleCompanyDetails)} className=''>

            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
            <div
                className='grid grid-cols-1 gap-6 border border-primary rounded-xl h-fit w-full mt-6 px-2 py-6 md:px-12'>

                <div className='flex flex-col md:flex-row md:gap-2 w-full'>
                    <div className='flex md:items-start md:justify-end w-48'>
                        <h1 className='text-left font-bold text-gray-900'>Company Logo:</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div onClick={() => handleCompanyLogo()} className='w-40 h-40 flex justify-center items-center bg-gray-200 p-6'>
                            {
                                companyLogo ? <img className='w-full h-full'
                                    src={URL.createObjectURL(companyLogo)} alt="" />
                                    :
                                    <Image className='w-full h-full' src={upperArrow} alt="" />
                            }
                        </div>
                        <div className='flex flex-col justify-between items-center gap-4 h-40'>
                            <div className='relative flex justify-center items-center w-28 h-10 border border-primary rounded'>
                                <span className='text-center'>Browse</span>
                                <input ref={companyLogoRef} onChange={(e) => setCompanyLogo(e.target.files[0])} className='absolute w-full h-full opacity-0' type="file" name="image" />
                            </div>
                            <button onClick={() => handleCompanyLogo()} className='relative flex justify-center items-center w-28 h-10'>
                                <span className='text-primary text-center'>Browse</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row md:gap-2 w-full'>
                    <div className='flex md:items-start md:justify-end w-48'>
                        <h1 className='md:col-span-2 text-left font-bold text-gray-900'>Detailed Company:</h1>
                    </div>
                    <textarea className='w-full md:w-96 h-48 p-4 border border-blue-400 focus:border-primary rounded focus:outline-none resize-none' name="detailedCompany" placeholder='Detailed Company' ></textarea>
                </div>

                <div className='flex flex-col md:flex-row md:gap-2 w-full'>
                    <div className='flex md:items-start md:justify-end w-48'>
                        <h1 className='text-left font-bold text-gray-900'>Company Photos:</h1>
                    </div>
                    <div className='w-full md:w-96 h-fit p-4 border border-blue-400 rounded'>
                        <div className='flex justify-between items-center gap-4'>
                            <div className='relative flex justify-center items-center w-32 h-10 border border-primary rounded'>
                                <span className='text-center'>Browse</span>
                                <input ref={companyPhotoRef}
                                    onChange={(e) => setCompanyPhotos([...companyPhotos, e.target.files[0]])}
                                    className='absolute w-full h-full opacity-0' type="file" name="image" id="" />
                            </div>
                            <button onClick={() => handleCompanyPhoto()} className='relative flex justify-center items-center w-32 h-10'>
                                <span className='text-primary text-center'>Browse</span>
                            </button>
                        </div>

                        <hr className='border border-dashed border-blue-400 my-4' />
                        <div className='flex items-center gap-4'>
                            <div onClick={() => handleCompanyPhoto()} className='w-20 md:w-28 h-20 md:h-28 flex justify-center items-center bg-gray-200 p-6'>
                                <Image className='w-full h-full' src={upperArrow} alt="" />
                            </div>
                            <div onClick={() => handleCompanyPhoto()} className='w-20 md:w-28 h-20 md:h-28 flex justify-center items-center bg-gray-200 p-6'>
                                <Image className='w-full h-full' src={upperArrow} alt="" />
                            </div>
                            <div onClick={() => handleCompanyPhoto()} className='w-20 md:w-28 h-20 md:h-28 flex justify-center items-center bg-gray-200 p-6'>
                                <Image className='w-full h-full' src={upperArrow} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

                <h1 className='text-black font-bold text-xl mb-4'>Trade Show:</h1>


                <div className='flex flex-col md:flex-row gap-2 w-full'>
                    <div className='flex md:items-center md:justify-end w-48'>
                        <p className='text-left font-bold text-gray-900'><span className='text-rose-600'>*</span>CTrade show name:</p>
                    </div>

                    <div className='grid grid-cols-1 gap-1'>
                        <input {...register('cTradeName', { required: 'Company Name is required' })}
                            className={`w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.cTradeName ? 'border-rose-600' : 'border-blue-400'}`}
                            type="text" name="cTradeName" placeholder='CTrade show name' />
                    </div>
                </div>


                <div className='flex flex-col md:flex-row gap-2'>
                    <div className='flex md:items-center md:justify-end w-48' >
                        <p className='text-left font-bold text-gray-900'><span className='text-rose-600'>*</span>Date Attended:</p>
                    </div>

                    <div className='grid grid-cols-2 gap-2'>

                        <div className="dropdown w-full">
                            <input {...register('year', { required: 'Year is required' })}
                                className={`w-full md:w-[188px] h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.year ? 'border-rose-600' : 'border-blue-400'}`}
                                type="text" name="year" id="dropdown-btn" placeholder='Month' />

                            <ul className="absolute top-full left-0 hidden dropdown_menu dropdown_menu--animated dropdown_menu-6
                            grid grid-cols-1 bg-slate-50 shadow-xl shadow-gray-900/30 rounded-md">
                                {
                                    months?.map((item, i) => (
                                        <span key={i} className="flex items-center px-2 h-8 w-full hover:bg-primary hover:text-white">
                                            <span>{item}</span>
                                        </span>
                                    ))
                                }

                            </ul>
                        </div>
                        <div className="dropdown w-full">
                            <input {...register('year', { required: 'Year is required' })}
                                className={`w-full md:w-[188px] h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.year ? 'border-rose-600' : 'border-blue-400'}`}
                                type="text" name="year" id="dropdown-btn" placeholder='Year' />

                            <ul className="absolute top-full left-0 hidden dropdown_menu dropdown_menu--animated dropdown_menu-6
                            grid grid-cols-1 bg-slate-50 shadow-xl shadow-gray-900/30 rounded-md">
                                {
                                    months?.map((item, i) => (
                                        <span key={i} className="flex items-center px-2 h-8 w-full hover:bg-primary hover:text-white">
                                            <span>{item}</span>
                                        </span>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-2 w-full'>
                    <div className='flex md:items-center md:justify-end w-48'>
                        <p className='text-left font-bold text-gray-900'><span className='text-rose-600'>*</span>Host (country/region):</p>
                    </div>

                    <div className='grid grid-cols-1 gap-1'>
                        <input {...register('country', { required: 'Country/Region is required' })}
                            className={`w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.country ? 'border-rose-600' : 'border-blue-400'}`}
                            type="text" name="country" placeholder='Host (country/region)' />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row md:gap-2 w-full'>
                    <div className='flex md:items-start md:justify-end w-48'>
                        <h1 className='text-left font-bold text-gray-900'>Trade show instruction:</h1>
                    </div>

                    <textarea className='w-full md:w-96 h-32 p-4 border border-blue-400 focus:border-primary rounded focus:outline-none resize-none' name="detailedCompany" placeholder='Enter Trade show instruction...'></textarea>
                </div>

                <div className='flex flex-col md:flex-row md:gap-2 w-full'>
                    <div className='flex md:items-start md:justify-end w-48'>
                        <h1 className='text-left font-bold text-gray-900'>Trade show Photos:</h1>
                    </div>
                    <div className='w-full md:w-96 h-fit p-4 border border-blue-400 rounded'>
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
            <div className='flex items-center justify-end gap-4 mt-2'>
                <div onClick={() => dispatch(setShowTabsData("2"))}
                    className='w-36 h-10 flex justify-center items-center rounded-md bg-primary hover:bg-darkPrimary text-white font-bold cursor-pointer'>
                    <h1>PREVIEW</h1>
                </div>
                <button type="submit" className='w-36 h-10 flex justify-center items-center rounded-md bg-primary hover:bg-darkPrimary text-white font-bold'>
                    <h1>SUBMIT</h1>
                </button>
            </div>
        </form >
    );
};

export default CompanyIntroduction;