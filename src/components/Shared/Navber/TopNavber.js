'use client';
import { useState } from 'react';
import usa from '../../../assets/icons/navber-icons/usa.png'
import downArrow from '../../../assets/icons/navber-icons/down-arrow.png'
import Link from 'next/link';
import Image from 'next/image';
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import img from '../../../assets/icons/navber-icons/bd.png'

const routes = [
    { _id: "1", title: "All Orders", url: "all-orders" },
    { _id: "1", title: "Buyer Reviews", url: "buyer-reviews" },
    { _id: "1", title: "Company Profile", url: "company-profile" },
    { _id: "1", title: "Conversation", url: "conversation" },
    { _id: "1", title: "Customer Support", url: "customer-support" },
    { _id: "1", title: "Messages", url: "messages" },
    { _id: "1", title: "Order Refunds", url: "order-refunds" },
    { _id: "1", title: "Personalize", url: "personalize" },
    { _id: "1", title: "Shopping Carts", url: "shopping-carts" },
    { _id: "1", title: "user-wellcome", url: "user-wellcome" },
    { _id: "1", title: "Create Company", url: "create-company" },
    { _id: "1", title: "Add Product", url: "add-product" },
    { _id: "1", title: "Premium Memberships", url: "premium-memberships" },
]



const countries = [
    { shortName: 'UK', fullName: 'Bangladesh', img: img },
    { shortName: 'US', fullName: 'United State', img: img },
    // { shortName: 'PK', fullName: 'Pakistan', img: img },
    // { shortName: 'ID', fullName: 'Idia', img: img },
    // { shortName: 'BD', fullName: 'Bangladesh', img: img },
]

const TopNavber = () => {
    const [countryDropdown, setCountryDropdown] = useState(false)

    return (
        <nav className='bg-[#E5EAFF57] cursor-pointer'>
            <div className='flex justify-end items-center gap-8 max-w-[1440px] mx-auto px-4 h-14'>


                <Menu>
                    <MenuHandler>
                        <svg className='w-6 h-6 active:text-primary hover:text-primary' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </MenuHandler>
                    <MenuList>
                        {
                            routes.map((route, i) => (<Link href={route?.url} className='w-full h-10 flex justify-start items-center px-2 hover:bg-primary hover:text-white bg-white text-black'>
                                <MenuItem key={i}
                                    className='hover:bg-primary hover:text-white'>
                                    <span>{route?.title}</span>
                                </MenuItem>
                            </Link>
                            ))
                        }
                    </MenuList>
                </Menu>

                <Link href='/help-center' className='text-sm text-gray-500'>Help Center</Link>
                <Link href='/contact' className='text-sm text-gray-500'>Contact Us</Link>

                <Menu>
                    <MenuHandler>
                        <div onClick={() => setCountryDropdown(!countryDropdown)}
                            className='relative flex justify-between items-center gap-3 hover:text-primary'>
                            <Image className='w-6' src={usa} alt="" />
                            <h1 className='text-sm text-gray-500 hover:text-primary'>USA</h1>
                            <svg className='w-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>

                        </div>
                    </MenuHandler>
                    <MenuList className='cursor-pointer'>
                        {
                            countries && countries.map(country => <MenuItem className='grid grid-cols-4 hover:bg-gray-200'>
                                <Image className='w-5 rounded-full' height={70} width={70} src={country.img} alt="" />
                                <h1 className='col-span-3 text-left text-black font-semibold text-sm'>{country.fullName}</h1>
                            </MenuItem>)
                        }
                    </MenuList>
                </Menu>
            </div>
        </nav>
    );
};

export default TopNavber;