import { setShowForm } from '@/Slices/createCompanySlice';
import React from 'react';
import { useDispatch } from 'react-redux';

const BusynessType = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <h1 className='text-xl font-bold text-left mb-4'>Manage Company Information</h1>
            <div className='flex items-start gap-4'>
                <h1 className='text-gray-500 font-semibold'>Business Type <span className='text-rose-600'>*</span>:</h1>
                <div className='grid grid-cols-1 gap-3'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <input className='cursor-pointer' type="checkbox" name="manufacture" id="manufacture" />
                        <label className='cursor-pointer' htmlFor="manufacture">Manufacture</label>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <input className='cursor-pointer' type="checkbox" name="tradingCompany" id="tradingCompany" />
                        <label className='cursor-pointer' htmlFor="tradingCompany">Trading Company</label>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <input className='cursor-pointer' type="checkbox" name="agent" id="agent" />
                        <label className='cursor-pointer' htmlFor="agent">Agent</label>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <input className='cursor-pointer' type="checkbox" name="businessService" id="businessService" />
                        <label className='cursor-pointer' htmlFor="businessService">Business Service</label>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <input className='cursor-pointer' type="checkbox" name="other" id="other" />
                        <label className='cursor-pointer' htmlFor="other">Other</label>
                    </div>
                </div>

            </div>
            <hr className='my-6' />
            <button type='submit' onClick={() => dispatch(setShowForm('2'))}
                className='bg-primary hover:bg-darkPrimary w-32 h-10 rounded-md mt-10 flex justify-center items-center text-white text-xl'>
                <span>Next</span>
            </button>
        </div>
    );
};

export default BusynessType;