'use client';
import { useEffect, useRef, useState } from 'react';
import usa from '../../../assets/icons/navber-icons/usa.png'
import downArrow from '../../../assets/icons/navber-icons/down-arrow.png'
import Link from 'next/link';
import CountryDropdown from '@/components/Dropdowns/NavberDropdowns/CountryDropdown';
import Image from 'next/image';

const routes = [
    // { _id: "1", title: "All Orders", url: "all-orders" },
    // { _id: "1", title: "Buyer Reviews", url: "buyer-reviews" },
    // { _id: "1", title: "Company Profile", url: "company-profile" },
    // { _id: "1", title: "Conversation", url: "conversation" },
    // { _id: "1", title: "Customer Support", url: "customer-support" },
    // { _id: "1", title: "Messages", url: "messages" },
    // { _id: "1", title: "Order Refunds", url: "order-refunds" },
    // { _id: "1", title: "Personalize", url: "personalize" },
    // { _id: "1", title: "Shopping Carts", url: "shopping-carts" },
    // { _id: "1", title: "user-wellcome", url: "user-wellcome" },
    // { _id: "1", title: "Create Company", url: "create-company" },
]

const TopNavber = () => {
    const [countryDropdown, setCountryDropdown] = useState(false)
    const [showRoutes, setShowRoutes] = useState(false)

    let navberRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!navberRef.current.contains(e.target)) {
                setShowRoutes(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
        <nav className='bg-[#E5EAFF57] cursor-pointer'>
            <div className='flex justify-end items-center gap-8 max-w-[1440px] mx-auto px-4 h-14'>
                {/* 
                <div ref={navberRef} className='relative'>
                    <button onClick={() => setShowRoutes(!showRoutes)} className='hover:bg-primary text-white py-2 px-2'>
                        <img className='w-6' src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png" alt="" />
                    </button>
                    {
                        showRoutes && <div className='w-44 grid grid-cols-1 absolute top-8 right-0 z-40 bg-white shadow border' >
                            {
                                routes.map((route, i) => (
                                    <Link href={route?.url} key={i}
                                        className='w-full h-10 flex justify-start items-center px-2 hover:bg-primary hover:text-white bg-white text-black'>
                                        <span>{route?.title}</span>
                                    </Link>
                                ))
                            }
                        </div>
                    }
                </div> */}

                <Link href='/customer-support' className='text-sm text-gray-500'>Help Center</Link>
                <Link href='/contact' className='text-sm text-gray-500'>Contact Us</Link>
                <div className='relative'>
                    <div onClick={() => setCountryDropdown(!countryDropdown)}
                        className='relative flex justify-between items-center gap-3'>
                        <Image className='w-8' src={usa} alt="" />
                        <h1 className='text-sm text-gray-500'>USA $</h1>
                        <Image className='w-4' src={downArrow} alt="" />
                    </div>
                    {
                        countryDropdown && <CountryDropdown closeDropdown={setCountryDropdown} />
                    }
                </div>
            </div>
        </nav>
    );
};

export default TopNavber;