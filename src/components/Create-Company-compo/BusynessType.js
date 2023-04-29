import { setBusinessType, setShowForm } from '@/Slices/createCompanySlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const BusynessType = () => {
    const { businessType } = useSelector((state) => state.createCompanySlice)
    const dispatch = useDispatch()

    const [type1, setType1] = useState("");
    const [type2, setType2] = useState("");
    const [type3, setType3] = useState("");
    const [type4, setType4] = useState("");
    const [type5, setType5] = useState("");

    // console.log(type1, type2, type3, type4, type5);
    const handleBusinessType = () => {
        const types = [type1 && type1, type2 && type2, type3 && type3, type4 && type4, type5 && type5].filter(Boolean);
        dispatch(setBusinessType(types))
        dispatch(setShowForm('2'))
    }

    console.log(businessType);

    return (
        <div>
            <h1 className='text-xl font-bold text-left mb-4'>Manage Company Information</h1>
            <div className='flex items-start gap-4'>
                <h1 className='text-gray-500 font-semibold'>Business Type <span className='text-rose-600'>*</span>:</h1>

                <div className='grid grid-cols-1 gap-3'>

                    <div className='flex items-center gap-2 cursor-pointer'>
                        <input className='cursor-pointer' type="checkbox" name="manufacture" id="manufacture" />
                        <label onClick={() => setType1(type1 ? "" : "Manufacture")} className='cursor-pointer' htmlFor="manufacture">Manufacture</label>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <input className='cursor-pointer' type="checkbox" name="tradingCompany" id="tradingCompany" />
                        <label onClick={() => setType2(type2 ? "" : "Trading Company")} className='cursor-pointer' htmlFor="tradingCompany">Trading Company</label>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <input className='cursor-pointer' type="checkbox" name="agent" id="agent" />
                        <label onClick={() => setType3(type3 ? "" : "Agent")} className='cursor-pointer' htmlFor="agent">Agent</label>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <input className='cursor-pointer' type="checkbox" name="businessService" id="businessService" />
                        <label onClick={() => setType4(type4 ? "" : "Business Service")} className='cursor-pointer' htmlFor="businessService">Business Service</label>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <input className='cursor-pointer' type="checkbox" name="other" id="other" />
                        <label onClick={() => setType5(type5 ? "" : "Other")} className='cursor-pointer' htmlFor="other">Other</label>
                    </div>

                </div>

            </div>
            <hr className='my-6' />

            {
                type1 || type2 || type3 || type4 || type5 ? <button
                    onClick={() => handleBusinessType()}
                    className='bg-primary hover:bg-darkPrimary w-32 h-10 rounded-md mt-10 flex justify-center items-center text-white text-xl'>
                    <span>Next</span>
                </button>
                    :
                    <button disabled className='bg-gray-500 w-32 h-10 rounded-md mt-10 flex justify-center items-center text-white text-xl cursor-none'>
                        <span>Next</span>
                    </button>
            }


        </div>
    );
};

export default BusynessType;