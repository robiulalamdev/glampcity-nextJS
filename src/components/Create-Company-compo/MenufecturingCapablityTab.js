import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import upperArrow from '../../assets/images/create-company-images/upperArrow.png'

const MenufecturingCapablityTab = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [cooperationFile, setCooperationFile] = useState(null)
    console.log(cooperationFile);

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
                className='grid grid-cols-1 gap-6 border border-primary rounded-xl h-fit w-full mt-6 px-2 py-6 md:px-12'>
                <h1 className='text-black font-bold text-xl mb-4'>Factory you cooperate with</h1>


                <div className='flex flex-col md:flex-row md:items-center gap-2 w-full'>
                    <label className='text-left font-bold text-gray-900'>
                        <span className='text-rose-600'>*</span>Factory Name:</label>
                    <div className='grid grid-cols-1 gap-1'>
                        <input {...register('fectoryName', { required: 'Company Name is required' })}
                            className='max-w-full w-full md:w-96 h-10 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none' type="text" name="fectoryName" id="fectoryName" />
                        {errors.fectoryName && <p className='text-red-600 text-sm'>{errors.fectoryName.message}</p>}
                    </div>
                </div>


                <div className='flex flex-col md:flex-row md:items-start gap-6'>
                    <h1 className='text-left font-bold text-gray-900'>Cooperation contacts:</h1>
                    <div className='flex items-center gap-4'>
                        <div onClick={() => handleCooperationFile()} className='w-40 h-40 flex justify-center items-center bg-gray-200 p-6'>
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
                                <input onChange={(e) => setCooperationFile(e.target.files[0])} ref={cooperationRef} className='absolute w-full h-full opacity-0' type="file" name="image" id="" />
                            </div>
                            <div className='relative flex justify-center items-center w-40 h-10'>
                                <span className='text-primary text-center'>Browse</span>
                                <input onChange={(e) => setCooperationFile(e.target.files[0])} ref={cooperationRef} className='absolute w-full h-full opacity-0' type="file" name="image" id="" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col md:flex-row md:items-center gap-2 w-full'>
                    <label className='text-left font-bold text-gray-900'>Years of cooperation:</label>
                    <div className='grid grid-cols-1 gap-1'>
                        <input {...register('yearsOfCooperation', { required: 'Company Name is required' })}
                            className='max-w-full w-full md:w-96 h-10 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none' type="text" name="yearsOfCooperation" id="yearsOfCooperation" />
                        {errors.yearsOfCooperation && <p className='text-red-600 text-sm'>{errors.yearsOfCooperation.message}</p>}
                    </div>
                </div>

                <div className='flex flex-col md:flex-row md:items-center gap-2 w-full'>
                    <label className='text-left font-bold text-gray-900'>Total Transaction:</label>
                    <div className='grid grid-cols-1 gap-1'>
                        <input {...register('totalTransaction', { required: 'Company Name is required' })}
                            className='max-w-full w-full md:w-96 h-10 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none' type="text" name="totalTransaction" id="totalTransaction" />
                        {errors.totalTransaction && <p className='text-red-600 text-sm'>{errors.totalTransaction.message}</p>}
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

export default MenufecturingCapablityTab;