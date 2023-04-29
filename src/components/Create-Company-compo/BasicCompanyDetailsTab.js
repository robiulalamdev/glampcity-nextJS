import { setShowForm } from '@/Slices/createCompanySlice';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const BasicCompanyDetailsTab = () => {
    const { businessType } = useSelector((state) => state.createCompanySlice)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()

    const handleCompanyDetails = (data) => {
        console.log(data);
    }

    console.log(businessType);
    // onClick={() => dispatch(setShowTabsData(type?.id))}
    return (
        <form onSubmit={handleSubmit(handleCompanyDetails)} className=''>
            <div
                className='grid grid-cols-1 gap-4 border border-primary rounded-xl h-fit w-full mt-6 px-2 py-6 md:px-6'>

                <div className='flex flex-col md:flex-row gap-2 w-full'>
                    <div className='flex md:items-center md:justify-end w-80'>
                        <p className='text-left font-bold text-gray-900'><span className='text-primary'>*</span>Company Name:</p>
                    </div>
                    <div className='grid grid-cols-1 gap-1'>
                        <input {...register('company_name', { required: 'Company Name is required' })}
                            className={`w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.company_name ? 'border-rose-600' : 'border-blue-400'}`}
                            type="text" name="company_name" placeholder='Enter Company Name' />
                    </div>
                </div>


                <div className='flex flex-col md:flex-row gap-2 w-full'>
                    <div className='flex md:items-center md:justify-end w-80'>
                        <p className='text-left font-bold text-gray-900'><span className='text-primary'>*</span>Location of Registration: <span className='text-sm'>Country/ Region</span></p>
                    </div>

                    <div className='grid grid-cols-1 gap-1'>
                        <input {...register('location_of_registration', { required: 'Location is required' })}
                            className={`w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.location_of_registration ? 'border-rose-600' : 'border-blue-400'}`}
                            type="text" name="location_of_registration" placeholder='Enter Country/ Region' />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row items-start gap-x-2 mb-3'>
                    <div className='flex md:items-center md:justify-end w-80'>
                        <p className='text-left font-bold text-gray-900' id=''><span className='text-primary'>*</span>Company Address:</p>
                    </div>
                    <div className='grid grid-cols-1 gap-4'>

                        <div className='flex flex-col md:flex-row md:items-center md:gap-1 w-full'>
                            <div className='flex md:items-center md:justify-end w-28'>
                                <span className='text-sm'>Street</span>
                            </div>

                            <input {...register('street', { required: 'Street is required' })}
                                className={`w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.street ? 'border-rose-600' : 'border-blue-400'}`} type="text" name="street" placeholder='Enter Street Address' />
                        </div>

                        <div className='flex flex-col md:flex-row md:items-center md:gap-1 w-full'>
                            <div className='flex md:items-center md:justify-end w-28'>
                                <span className='text-sm'>City</span>
                            </div>

                            <input {...register('city', { required: 'city is required' })}
                                className={`w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.city ? 'border-rose-600' : 'border-blue-400'}`}
                                type="text" name="city" placeholder='Enter City Address' />
                        </div>

                        <div className='flex flex-col md:flex-row md:items-center md:gap-1 w-full'>
                            <div className='flex md:items-center md:justify-end w-28'>
                                <span className='text-sm'>Country/ Region</span>
                            </div>

                            <input {...register('country', { required: 'Country is required' })}
                                className={`w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.country ? 'border-rose-600' : 'border-blue-400'}`} type="text" name="country" placeholder='Enter Country Name' />
                        </div>

                        <div className='flex flex-col md:flex-row md:items-center md:gap-1 w-full'>
                            <div className='flex md:items-center md:justify-end w-28'>
                                <span className='text-sm'>Postal code</span>
                            </div>
                            <input {...register('postal_code', { required: 'postal code is required' })}
                                className={`w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.postal_code ? 'border-rose-600' : 'border-blue-400'}`} type="text" name="postal_code" placeholder='Enter Postal Code' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-2 w-full'>
                    <div className='flex md:items-center md:justify-end w-80'>
                        <p className='text-left font-bold text-gray-900'><span className='text-primary'>*</span>Main Product:</p>
                    </div>

                    <div className='grid grid-cols-1 gap-1'>

                        <div className='grid lg:grid-cols-2 gap-4'>

                            <input {...register('main_product1', { required: 'main product is required' })}
                                className={`w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.main_product1 ? 'border-rose-600' : 'border-blue-400'}`}
                                type="text" name="main_product1" placeholder='Product No 1' />

                            <input {...register('main_product2', { required: 'main product is required' })}
                                className={`w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.main_product2 ? 'border-rose-600' : 'border-blue-400'}`}
                                type="text" name="main_product2" placeholder='Product No 2' />

                            <input {...register('main_product3', { required: 'main product is required' })}
                                className={`w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.main_product3 ? 'border-rose-600' : 'border-blue-400'}`}
                                type="text" name="main_product3" placeholder='Product No 3' />

                            <input {...register('main_product4', { required: 'main product is required' })}
                                className={`w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.main_product4 ? 'border-rose-600' : 'border-blue-400'}`}
                                type="text" name="main_product4" placeholder='Product No 4' />
                        </div>

                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-2 w-full'>
                    <div className='flex md:items-center md:justify-end w-80'>
                        <p className='text-left font-bold text-gray-900'><span className='text-primary'>*</span>Your Company Registered: </p>
                    </div>

                    <div className='grid grid-cols-1 gap-1'>
                        <input {...register('company_registered', { required: 'Company Registered is required' })}
                            className={`w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.company_registered ? 'border-rose-600' : 'border-blue-400'}`}
                            type="text" name="company_registered" placeholder='Enter Your Company Registered' />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-2 w-full'>
                    <div className='flex md:items-center md:justify-end w-80'>
                        <p className='text-left font-bold text-gray-900'><span className='text-primary'>*</span>Legal Owner:</p>
                    </div>

                    <div className='grid grid-cols-1 gap-1'>
                        <input {...register('legal_owner', { required: 'Company Name is required' })}
                            className={`w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.legal_owner ? 'border-rose-600' : 'border-blue-400'}`}
                            type="text" name="legal_owner" placeholder='Enter Legal Owner' />
                    </div>
                </div>

            </div>

            <div className='flex items-center justify-end gap-4 mt-2'>
                <div onClick={() => dispatch(setShowForm("1"))}
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

export default BasicCompanyDetailsTab;