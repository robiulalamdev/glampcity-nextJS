import { setSelectedPhoneCode, setShowPhoneCode } from '@/Slices/loginRegisterSlice';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PhoneCodeDropdown = () => {
    const { phoneCodes } = useSelector((state) => state.loginRegisterSlice)
    const dispatch = useDispatch()


    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                dispatch(setShowPhoneCode(false))
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <div ref={dropdownRef} class="absolute right-0 z-50 w-full rounded bg-white shadow shadow-gray-400">
            <div className=''>
                {
                    phoneCodes && phoneCodes.map(pCode => <div
                        onClick={() => dispatch(setSelectedPhoneCode(pCode.phoneCode))}
                        className='cursor-pointer w-full hover:bg-gray-200 px-2 py-1'>
                        <h1 className='text-left text-black font-semibold text-sm'>{pCode.phoneCode}</h1>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PhoneCodeDropdown;