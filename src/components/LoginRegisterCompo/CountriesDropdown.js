import { setSelectedCountry } from '@/Slices/loginRegisterSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CountriesDropdown = () => {
    const { countries } = useSelector((state) => state.loginRegisterSlice)
    const dispatch = useDispatch()

    return (
        <div class="absolute right-0 z-10 w-fit rounded bg-gray-50 shadow shadow-gray-400">
            <div className=''>
                {
                    countries && countries?.map(r => <div
                        onClick={() => dispatch(setSelectedCountry(r?.country))}
                        className='cursor-pointer w-full hover:bg-gray-200 px-2 py-1'>
                        <h1 className='text-left text-black font-semibold text-sm'>{r.country}</h1>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CountriesDropdown;