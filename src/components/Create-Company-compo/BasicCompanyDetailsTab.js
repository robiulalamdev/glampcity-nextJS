import React from 'react';
import { useForm } from 'react-hook-form';

const BasicCompanyDetailsTab = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleCompanyDetails = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(handleCompanyDetails)} className=''>
            <div
                className='grid grid-cols-1 gap-6 border border-primary rounded-xl h-fit w-full mt-6 px-2 py-6 md:px-12'>

                <div className='flex flex-col md:flex-row gap-2 w-full'>
                    <label className='text-left font-bold text-gray-900' htmlFor="companyName" id='companyName'><span className='text-primary'>*</span>Company Name:</label>
                    <div className='grid grid-cols-1 gap-1'>
                        <input {...register('companyName', { required: 'Company Name is required' })}
                            className='max-w-full w-full md:w-96 h-10 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none' type="text" name="companyName" id="companyName" />
                        {errors.companyName && <p className='text-red-600 text-sm'>{errors.companyName.message}</p>}
                    </div>
                </div>


                <div className='flex flex-col md:flex-row gap-2 w-full'>
                    <label className='text-left font-bold text-gray-900' htmlFor="country" id='country'><span className='text-primary'>*</span>Location of Registration: <span className='text-sm'>Country/ Region</span></label>
                    <div className='grid grid-cols-1 gap-1'>
                        <input {...register('country', { required: 'Location is required' })}
                            className='max-w-full w-full md:w-96 h-10 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none' type="text" name="country" id="country" />
                        {errors.country && <p className='text-red-600 text-sm'>{errors.country.message}</p>}
                    </div>
                </div>

                <div className='flex flex-col md:flex-row items-start gap-x-2 mb-3'>
                    <label className='text-left font-bold text-gray-900' htmlFor="" id=''><span className='text-primary'>*</span>Company Address:</label>
                    <div className='grid grid-cols-1 gap-6'>
                        <div className='flex flex-col md:flex-row md:items-center gap-2 w-full'>
                            <span className='text-sm'>Street</span>
                            <input {...register('street', { required: 'City is required' })}
                                className={`max-w-full w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.street ? 'border-rose-600' : 'border-blue-400'}`} type="text" name="street" id="street" />
                        </div>
                        <div className='flex flex-col md:flex-row md:items-center gap-2 w-full'>
                            <span className='text-sm'>City</span>
                            <input {...register('city', { required: 'City is required' })}
                                className={`max-w-full w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.city ? 'border-rose-600' : 'border-blue-400'}`} type="text" name="city" id="city" />
                        </div>

                        <div className='flex flex-col md:flex-row md:items-center gap-2 w-full'>
                            <span className='text-sm'>Country/ Region</span>
                            <input {...register('country', { required: 'Country is required' })}
                                className={`max-w-full w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.country ? 'border-rose-600' : 'border-blue-400'}`} type="text" name="country" id="country" />
                        </div>

                        <div className='flex flex-col md:flex-row md:items-center gap-2 w-full'>
                            <span className='text-sm'>Postal code</span>
                            <input {...register('postalCode', { required: 'postalCode is required' })}
                                className={`max-w-full w-full md:w-96 h-10 px-3 border focus:border-primary rounded focus:outline-none ${errors?.postalCode ? 'border-rose-600' : 'border-blue-400'}`} type="text" name="postalCode" id="postalCode" />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-2 w-full'>
                    <label className='text-left font-bold text-gray-900' htmlFor="country" id='country'><span className='text-primary'>*</span>Main Product:</label>
                    <div className='grid grid-cols-1 gap-1'>
                        <div className='flex flex-col md:flex-row md:items-center gap-4'>
                            <input {...register('country', { required: 'Location is required' })}
                                className='max-w-full w-full md:w-56 h-10 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none' type="text" name="country" id="country" />
                            <input {...register('country', { required: 'Location is required' })}
                                className='max-w-full w-full md:w-56 h-10 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none' type="text" name="country" id="country" />
                            <input {...register('country', { required: 'Location is required' })}
                                className='max-w-full w-full md:w-56 h-10 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none' type="text" name="country" id="country" />
                            <input {...register('country', { required: 'Location is required' })}
                                className='max-w-full w-full md:w-56 h-10 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none' type="text" name="country" id="country" />
                        </div>
                        {errors.country && <p className='text-red-600 text-sm'>{errors.country.message}</p>}
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-2 w-full'>
                    <label className='text-left font-bold text-gray-900'><span className='text-primary'>*</span>Your Company Registered: </label>
                    <div className='grid grid-cols-1 gap-1'>
                        <input {...register('companyRegistered', { required: 'Company Registered is required' })}
                            className='max-w-full w-full md:w-96 h-10 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none' type="text" name="companyRegistered" id="companyRegistered" />
                        {errors.companyRegistered && <p className='text-red-600 text-sm'>{errors.companyRegistered.message}</p>}
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-2 w-full'>
                    <label className='text-left font-bold text-gray-900'><span className='text-primary'>*</span>Legal Owner:</label>
                    <div className='grid grid-cols-1 gap-1'>
                        <input {...register('legalOwner', { required: 'Company Name is required' })}
                            className='max-w-full w-full md:w-96 h-10 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none' type="text" name="legalOwner" id="legalOwner" />

                        {errors.legalOwner && <p className='text-red-600 text-sm'>{errors.legalOwner.message}</p>}
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

export default BasicCompanyDetailsTab;