'use client';
import { useState } from 'react';
import usa from '../../../assets/icons/navber-icons/usa.png'
import downArrow from '../../../assets/icons/navber-icons/down-arrow.png'
import Link from 'next/link';
import Image from 'next/image';
import img from '../../../assets/icons/navber-icons/bd.png'
import ni from '../../../assets/icons/navber-icons/ni.png'
import uk from '../../../assets/icons/navber-icons/uk.png'
import { Dropdown } from 'antd';

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
    { _id: "1", title: "Premium Memberships", url: "premium-memberships" }
]


const items = [
    { key: '1', label: (<Link href="all-orders">all-orders</Link>), },
    { key: '2', label: (<Link href="buyer-reviews">buyer-reviews</Link>), },
    { key: '3', label: (<Link href="company-profile">company-profile</Link>), },
    { key: '4', label: (<Link href="conversation">conversation</Link>), },
    { key: '5', label: (<Link href="customer-support">customer-support</Link>), },
    { key: '6', label: (<Link href="messages">messages</Link>), },
    { key: '7', label: (<Link href="order-refunds">order-refunds</Link>), },
    { key: '8', label: (<Link href="personalize">personalize</Link>), },
    { key: '9', label: (<Link href="shopping-carts">shopping-carts</Link>), },
    { key: '10', label: (<Link href="user-wellcome">user-wellcome</Link>), },
    { key: '11', label: (<Link href="create-company">create-company</Link>), },
    { key: '12', label: (<Link href="add-product">add-product</Link>), },
    { key: '13', label: (<Link href="premium-membership">premium-membership</Link>), },
]



const countries = [
    { shortName: 'UK', fullName: 'United kingdom', img: uk },
    { shortName: 'NI', fullName: 'Nigeria', img: ni }
]

const TopNavber = () => {
    const [countryDropdown, setCountryDropdown] = useState(false)

    return (
        <nav className='bg-[#E5EAFF57] cursor-pointer'>
            <div className='flex justify-end items-center gap-8 max-w-[1440px] mx-auto px-4 h-14'>

                <div class="dropdown">
                    <button id="dropdown-btn" class="px-4 py-2 font-semibold text-gray-700 bg-gray-100 rounded-md
                    cursor-pointer focus:bg-primary focus:text-white hover:text-primary hover:ring-2 focus:hover:ring-0">
                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <ul class="absolute top-full left-0 hidden dropdown_menu dropdown_menu--animated dropdown_menu-6
                    grid grid-cols-1 bg-slate-50 shadow-xl shadow-gray-900/30 rounded-md w-48">
                        {
                            routes?.map((item, i) => (
                                <Link href={item?.url} class="flex items-center px-2 h-8 w-full hover:bg-primary hover:text-white">
                                    <span>{item.title}</span>
                                </Link>
                            ))
                        }

                    </ul>
                </div>

                <Link href='/customer-support' className='text-sm text-gray-500'>Help Center</Link>
                <Link href='/contact' className='text-sm text-gray-500'>Contact Us</Link>


                <div class="dropdown">
                    <button id="dropdown-btn" class="flex justify-between items-center gap-3 hover:text-primary">
                        <Image className='w-6' src={uk} alt="" />
                        <h1 className='text-sm text-gray-500 hover:text-primary'>USA</h1>
                        <svg className='w-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    <ul class="absolute top-full right-0 hidden dropdown_menu dropdown_menu--animated dropdown_menu-6
                    grid grid-cols-1 bg-slate-50 shadow-xl shadow-gray-900/30 rounded-md w-48">
                        {
                            countries?.map((country, i) => (
                                <button className='flex items-center gap-2 hover:bg-gray-200 px-2 h-8 w-full' >
                                    <Image className='w-6 rounded-full' height={70} width={70} src={country.img} alt="" />
                                    <h1 className='col-span-3 text-left text-black font-semibold'>{country.fullName}</h1>
                                </button>
                            ))
                        }

                    </ul>
                </div>


            </div>
        </nav >
    );
};

export default TopNavber;