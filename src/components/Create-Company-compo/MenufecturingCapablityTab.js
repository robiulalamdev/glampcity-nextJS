import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import upperArrow from '../../assets/images/create-company-images/upperArrow.png'
import { setShowTabsData } from '@/Slices/createCompanySlice';
import { useDispatch } from 'react-redux';

const MenufecturingCapablityTab = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [cooperationFile, setCooperationFile] = useState(null)
    const dispatch = useDispatch()
    // console.log(cooperationFile);

    const handleCompanyDetails = (data) => {
        console.log(data);
    }

    const cooperationRef = useRef()

    const handleCooperationFile = () => {
        cooperationRef.current.click()
    }



    return (
        <form onSubmit={handleSubmit(handleCompanyDetails)} className=''>
            <div
                className='grid grid-cols-1 gap-4 border border-primary rounded-xl h-fit w-full mt-6 px-2 py-6 md:px-12'>
                <h1 className='text-black font-bold text-xl mb-4'>Factory you cooperate with</h1>


                <div className='flex flex-col md:flex-row md:items-center gap-2 w-full'>
                    <div className='flex md:items-center md:justify-end w-44'>
                        <p className='text-left font-bold text-gray-900'>
                            <span className='text-rose-600'>*</span>Factory Name:</p>
                    </div>

                    <div className='grid grid-cols-1 gap-1'>
                        <input {...register('factory_name', { required: 'Factory Name is required' })}
                            className={`w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.factory_name ? 'border-rose-600' : 'border-blue-400'}`}
                            type="text" name="factory_name" placeholder='Enter Factory Name' />
                    </div>
                </div>


                <div className='flex flex-col md:flex-row md:items-start gap-2'>
                    <div className='flex md:items-center md:justify-end w-44'>
                        <h1 className='text-left font-bold text-gray-900'>Cooperation contacts:</h1>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div onClick={() => handleCooperationFile()}
                            className='w-40 h-40 flex justify-center items-center bg-gray-200 p-6'>
                            {
                                cooperationFile ? <img className='w-full h-full'
                                    src={URL.createObjectURL(cooperationFile)} alt="" />
                                    :
                                    <Image className='w-full h-full' src={upperArrow} alt="" />
                            }
                        </div>
                        <div className='flex flex-col justify-between items-center gap-4 h-40'>
                            <div className='relative flex justify-center items-center w-40 h-10 border border-primary rounded'>
                                <span className='text-center'>Browse</span>
                                <input onChange={(e) => setCooperationFile(e.target.files[0])} ref={cooperationRef} className='absolute w-full h-full opacity-0' type="file" name="image" />
                            </div>
                            <div className='relative flex justify-center items-center w-40 h-10'>
                                <span className='text-primary text-center'>Browse</span>
                                <input onChange={(e) => setCooperationFile(e.target.files[0])} ref={cooperationRef} className='absolute w-full h-full opacity-0' type="file" name="image" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col md:flex-row md:items-center gap-2 w-full'>
                    <div className='flex md:items-center md:justify-end w-44'>
                        <p className='text-left font-bold text-gray-900'>Years of Cooperation:</p>
                    </div>

                    <div className='grid grid-cols-1 gap-1'>
                        <input {...register('yearsOfCooperation')}
                            className='w-full md:w-96 h-10 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none' type="text" name="yearsOfCooperation" placeholder='Enter Years of Cooperation' />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row md:items-center gap-2 w-full'>
                    <div className='flex md:items-center md:justify-end w-44'>
                        <p className='text-left font-bold text-gray-900'>Total Transaction:</p>
                    </div>
                    <div className='grid grid-cols-1 gap-1'>
                        <input {...register('totalTransaction')}
                            className='w-full md:w-96 h-10 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none' type="text" name="totalTransaction" placeholder='Enter Total Transaction' />
                    </div>
                </div>

            </div>
            <div className='flex items-center justify-end gap-4 mt-2'>
                <div onClick={() => dispatch(setShowTabsData("1"))}
                    className='w-36 h-10 flex justify-center items-center rounded-md bg-primary hover:bg-darkPrimary text-white font-bold cursor-pointer'>
                    <h1>PREVIEW</h1>
                </div>
                <button type="submit" className='w-36 h-10 flex justify-center items-center rounded-md bg-primary hover:bg-darkPrimary text-white font-bold'>
                    <h1>NEXT</h1>
                </button>
            </div>
        </form >
    );
};

export default MenufecturingCapablityTab;