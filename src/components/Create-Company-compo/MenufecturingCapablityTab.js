import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import upperArrow from '../../assets/images/create-company-images/upperArrow.png'
import { setManufacturingCapabilityData, setShowTabsData } from '@/Slices/createCompanySlice';
import { useDispatch, useSelector } from 'react-redux';

const MenufecturingCapablityTab = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { businessType, manufacturingCapabilityData } = useSelector((state) => state.createCompanySlice)
    const {
        factory_name,
        years_of_cooperation,
        cooperation_contacts,
        total_transaction,
    } = manufacturingCapabilityData;

    const [cooperationFile, setCooperationFile] = useState(null)
    const dispatch = useDispatch()
    // console.log(manufacturingCapabilityData);

    const handleCompanyDetails = (data) => {
        if (cooperationFile) {
            data.cooperation_contacts = cooperationFile
        }
        if (data) {
            dispatch(setManufacturingCapabilityData(data))
            if (manufacturingCapabilityData) {
                dispatch(setShowTabsData("3"))
            }
        }
        // console.log(data);
    }

    console.log(manufacturingCapabilityData);

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
                            type="text" name="factory_name" placeholder='Enter Factory Name'
                            defaultValue={factory_name && factory_name} />
                    </div>
                </div>


                <div className='flex flex-col md:flex-row md:items-start gap-2'>
                    <div className='flex md:items-center md:justify-end w-44'>
                        <h1 className='text-left font-bold text-gray-900'>Cooperation contacts:</h1>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div onClick={() => handleCooperationFile()}
                            className='w-40 h-32 flex justify-center items-center bg-gray-200'>
                            {
                                cooperationFile || cooperation_contacts ? <div className='flex items-center justify-center w-40 h-32 text-white bg-slate-400 p-3' >
                                    <span>{cooperation_contacts ? cooperation_contacts?.name : cooperationFile?.name}</span>
                                </div>
                                    :
                                    <Image className='w-full h-full' src={upperArrow} alt="" />
                            }
                        </div>
                        <div className='flex flex-col justify-between items-center gap-4 h-32'>
                            <div className='relative flex justify-center items-center w-40 h-10 border border-primary rounded'>
                                <span className='text-center'>Browse</span>
                                <input onChange={(e) => setCooperationFile(e.target.files[0])} ref={cooperationRef} className='absolute w-full h-full opacity-0'
                                    type="file" name="cooperation_contacts" />
                            </div>
                            <div className='relative flex justify-center items-center w-40 h-10'>
                                <span onClick={() => handleCooperationFile()} className='text-primary text-center'>Browse</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col md:flex-row md:items-center gap-2 w-full'>
                    <div className='flex md:items-center md:justify-end w-44'>
                        <p className='text-left font-bold text-gray-900'>Years of Cooperation:</p>
                    </div>

                    <div className='grid grid-cols-1 gap-1'>
                        <input {...register('years_of_cooperation')}
                            className='w-full md:w-96 h-10 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none'
                            type="text" name="years_of_cooperation" placeholder='Enter Years of Cooperation'
                            defaultValue={years_of_cooperation && years_of_cooperation} />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row md:items-center gap-2 w-full'>
                    <div className='flex md:items-center md:justify-end w-44'>
                        <p className='text-left font-bold text-gray-900'>Total Transaction:</p>
                    </div>
                    <div className='grid grid-cols-1 gap-1'>
                        <input {...register('total_transaction')}
                            className='w-full md:w-96 h-10 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none'
                            type="text" name="total_transaction" placeholder='Enter Total Transaction'
                            defaultValue={total_transaction && total_transaction} />
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