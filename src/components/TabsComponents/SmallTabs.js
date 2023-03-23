import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

const SmallTabs = () => {
    const { product } = useSelector((state) => state.viewProductSlice)
    const { pathname } = useRouter()

    // console.log(pathname);
    return (
        <div className='flex flex-col md:flex-row md:items-center gap-4 mt-16'>
            <Link href={`/products/${product?._id}`}
                className={`flex justify-center items-center w-full md:w-56 h-12 border rounded-md  
                ${pathname.includes('/products') ? 'bg-primary text-white' : 'text-primary border-primary hover:bg-blue-400 hover:text-white duration-300'}`}>
                <span className='text-xl font-semibold'>Product Details</span>
            </Link>
            <Link href={`/company-profile`}
                className={`flex justify-center items-center w-full md:w-56 h-12 border rounded-md  
                ${pathname === '/company-profile' ? 'bg-primary text-white' : 'text-primary border-primary hover:bg-blue-400 hover:text-white duration-300'}`}>
                <span className='text-xl font-semibold'>Company profile</span>
            </Link>
            <Link href='/buyer-reviews'
                className={`flex justify-center items-center w-full md:w-56 h-12 border rounded-md  
                ${pathname === '/buyer-reviews' ? 'bg-primary text-white' : 'text-primary border-primary hover:bg-blue-400 hover:text-white duration-300'}`}>
                <span className='text-xl font-semibold'>Buyer Reviews</span>
            </Link>
            <Link href='/order-refunds'
                className={`flex justify-center items-center w-full md:w-56 h-12 border rounded-md  
                ${pathname === '/order-refunds' ? 'bg-primary text-white' : 'text-primary border-primary hover:bg-blue-400 hover:text-white duration-300'}`}>
                <span className='text-xl font-semibold'>Refund</span>
            </Link>
        </div>
    );
};

export default SmallTabs;