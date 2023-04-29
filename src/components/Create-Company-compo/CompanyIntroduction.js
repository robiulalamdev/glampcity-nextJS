import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import upperArrow from '../../assets/images/create-company-images/upperArrow.png'
import { setCompanyIntroductionData, setShowTabsData } from '@/Slices/createCompanySlice';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from "react-datepicker";

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


const CompanyIntroduction = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const {
        businessType,
        basicCompanyDetailsData,
        manufacturingCapabilityData,
        companyIntroductionData
    } = useSelector((state) => state.createCompanySlice)
    const {

    } = companyIntroductionData;

    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [companyLogo, setCompanyLogo] = useState(null)
    const [companyPhotos, setCompanyPhotos] = useState([])
    const [tradeShowPhotos, setTradeShowPhotos] = useState([])
    const dispatch = useDispatch()

    const handleCompanyDetails = (data) => {
        if (companyLogo) {
            data.company_logo = companyLogo
        }
        if (companyPhotos) {
            data.company_photos = companyPhotos
        }
        if (tradeShowPhotos) {
            data.trade_show_photos = tradeShowPhotos
        }
        if (data) {
            dispatch(setCompanyIntroductionData(data))
            if (companyIntroductionData) {

            }
        }
        console.log(data);
    }


    const companyLogoRef = useRef()
    const companyPhotoRef = useRef()
    const tradeShowPhotoRef = useRef()

    // handle company logo with on click
    const handleCompanyLogo = () => {
        companyLogoRef.current.click()
    }
    const handleGetCompanyLogo = (file) => {
        if (file) {
            setCompanyLogo(file)
        }
    }

    // handle company photos
    const handleCompanyPhoto = () => {
        companyPhotoRef.current.click()
    }

    const handleGetCompanyPhoto = (file) => {
        if (file) {
            setCompanyPhotos([...companyPhotos, file])
        }
    }


    // handle trade show photos
    const handleTradeShowPhoto = () => {
        tradeShowPhotoRef.current.click()
    }

    const handleGetTradeShowPhoto = (file) => {
        if (file) {
            setTradeShowPhotos([...tradeShowPhotos, file])
        }
    }

    // console.log(companyPhotos);

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
                                <input ref={companyLogoRef} onChange={(e) => handleGetCompanyLogo(e.target.files[0])} className='absolute w-full h-full opacity-0' type="file" name="image" accept="image/*" />
                            </div>
                            <span onClick={() => handleCompanyLogo()} className='relative flex justify-center items-center w-28 h-10'>
                                <span className='text-primary text-center'>Browse</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row md:gap-2 w-full'>
                    <div className='flex md:items-start md:justify-end w-48'>
                        <h1 className='md:col-span-2 text-left font-bold text-gray-900'>Detailed Company:</h1>
                    </div>
                    <textarea className='w-full md:w-96 h-48 p-4 border border-blue-400 focus:border-primary rounded focus:outline-none resize-none' name="detailed_company" placeholder='Detailed Company' ></textarea>
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
                                    onChange={(e) => handleGetCompanyPhoto(e.target.files[0])}
                                    className='absolute w-full h-full opacity-0'
                                    accept="image/*" type="file" name="image" id="" />
                            </div>
                            <span onClick={() => handleCompanyPhoto()} className='relative flex justify-center items-center w-32 h-10'>
                                <span className='text-primary text-center'>Browse</span>
                            </span>
                        </div>

                        <hr className='border border-dashed border-blue-400 my-4' />
                        <div className='grid grid-cols-3 gap-3'>
                            {
                                companyIntroductionData?.company_photos && companyIntroductionData?.company_photos?.map((photo, i) => (
                                    <div key={i} className='w-20 md:w-28 h-20 md:h-28 flex justify-center items-center bg-gray-200 p-6'>
                                        <img className='w-full h-full' src={photo && URL?.createObjectURL(photo)} alt="" />
                                    </div>
                                ))
                            }
                            {
                                companyPhotos && companyPhotos?.map((photo, i) => (
                                    <div key={i} className='w-20 md:w-28 h-20 md:h-28 flex justify-center items-center bg-gray-200 p-6'>
                                        <img className='w-full h-full' src={photo && URL?.createObjectURL(photo)} alt="" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>

                <h1 className='text-black font-bold text-xl mb-4'>Trade Show:</h1>


                <div className='flex flex-col md:flex-row gap-2 w-full'>
                    <div className='flex md:items-center md:justify-end w-48'>
                        <p className='text-left font-bold text-gray-900'><span className='text-rose-600'>*</span>CTrade show name:</p>
                    </div>

                    <div className='grid grid-cols-1 gap-1'>
                        <input {...register('ctrade_show_name', { required: 'Company Name is required' })}
                            className={`w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.ctrade_show_name ? 'border-rose-600' : 'border-blue-400'}`}
                            type="text" name="ctrade_show_name" placeholder='CTrade show name' />
                    </div>
                </div>


                <div className='flex flex-col md:flex-row gap-2'>
                    <div className='flex md:items-center md:justify-end w-48' >
                        <p className='text-left font-bold text-gray-900'><span className='text-rose-600'>*</span>Date Attended:</p>
                    </div>

                    <div className={`relative w-full md:w-96 h-10 grid grid-cols-2 gap-2`}>

                        <input {...register('date_attended', { required: 'Year is required' })}
                            className='absolute opacity-0'
                            type="text" name='date_attended'
                            value={month && year ? `${month}/${year}` : ""} />

                        <div className="dropdown w-full">
                            <input
                                className={`w-full md:w-[188px] h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.date_attended ? 'border-rose-600' : 'border-blue-400'}`}
                                type="text" name="year" id="dropdown-btn" readOnly value={month} placeholder='Month' />

                            <ul className="absolute top-full left-0 hidden dropdown_menu dropdown_menu--animated dropdown_menu-6
    grid grid-cols-1 bg-slate-50 shadow-xl shadow-gray-900/30 rounded-md">
                                {
                                    months?.map((item, i) => (
                                        <span onClick={() => setMonth(item)} key={i} className="flex items-center px-2 h-8 w-full hover:bg-primary hover:text-white">
                                            <span>{item}</span>
                                        </span>
                                    ))
                                }

                            </ul>
                        </div>
                        <div className="dropdown w-full">
                            <input
                                className={`w-full md:w-[188px] h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.date_attended ? 'border-rose-600' : 'border-blue-400'}`}
                                type="text" name="year" id="dropdown-btn" readOnly value={year} placeholder='Year' />

                            <ul className="absolute top-full left-0 hidden dropdown_menu dropdown_menu--animated dropdown_menu-6
    grid grid-cols-1 bg-slate-50 shadow-xl shadow-gray-900/30 rounded-md">
                                {
                                    months?.map((item, i) => (
                                        <span onClick={() => setYear(item)} key={i} className="flex items-center px-2 h-8 w-full hover:bg-primary hover:text-white">
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
                                <input ref={tradeShowPhotoRef}
                                    onChange={(e) => handleGetTradeShowPhoto(e.target.files[0])}
                                    className='absolute w-full h-full opacity-0'
                                    accept="image/*" type="file" name="image" />
                            </div>
                            <span onClick={() => handleTradeShowPhoto()} className='relative flex justify-center items-center w-32 h-10'>
                                <span className='text-primary text-center'>Browse</span>
                            </span>
                        </div>

                        <hr className='border border-dashed border-blue-400 my-4' />
                        <div className='grid grid-cols-3 gap-3'>
                            {
                                companyIntroductionData?.trade_show_photos && companyIntroductionData?.trade_show_photos?.map((photo, i) => (
                                    <div key={i} className='w-20 md:w-28 h-20 md:h-28 flex justify-center items-center bg-gray-200 p-6'>
                                        <img className='w-full h-full' src={photo && URL?.createObjectURL(photo)} alt="" />
                                    </div>
                                ))
                            }
                            {
                                tradeShowPhotos && tradeShowPhotos?.map((photo, i) => (
                                    <div key={i} className='w-20 md:w-28 h-20 md:h-28 flex justify-center items-center bg-gray-200 p-6'>
                                        <img className='w-full h-full' src={photo && URL?.createObjectURL(photo)} alt="" />
                                    </div>
                                ))
                            }
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