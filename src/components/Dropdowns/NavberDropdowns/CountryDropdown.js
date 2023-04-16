import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import img from '../../../assets/icons/navber-icons/bd.png'


const countries = [
    { shortName: 'US', fullName: 'United states', img: "https://cdn-icons-png.flaticon.com/128/206/206626.png" },
    { shortName: 'UK', fullName: 'UK', img: "https://cdn-icons-png.flaticon.com/128/555/555417.png" }
]
const CountryDropdown = ({ closeDropdown }) => {

    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                closeDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <div ref={dropdownRef} class="absolute right-2 z-50 w-36 rounded bg-gray-50 shadow shadow-gray-400">
            <div className=''>
                {
                    countries && countries.map(country => <div className='grid grid-cols-4 hover:bg-gray-200 px-2 py-1'>
                        <img className='w-5 rounded-full' height={70} width={70} src={country.img} alt="" />
                        <h1 className='col-span-3 text-left text-black font-semibold text-sm'>{country.fullName}</h1>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CountryDropdown;