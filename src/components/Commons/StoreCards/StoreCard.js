import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import profile from '../../../assets/images/future-products-images/img.png'

const StoreCard = ({ store }) => {
    // const name = store?.name.toLowerCase().split(' ').join('-')
    return (
        <Link href={`/stores/${store?.username}`} className='cursor-pointer w-fit h-fit flex justify-center items-center mx-auto rounded-full border-[12px] md:border-[20px] border-gray-400 hover:border-primary duration-150 relative overflow-hidden'>
            <Image className='w-32 md:w-60 h-32 md:h-60 rounded-full border-[8px] md:border-[14px] border-white' src={profile} alt="" />
            <div className='absolute w-[124px] md:w-56 h-8 md:h-10 bg-white flex justify-center items-center object-cover'>
                <span className='text-black font-semibold text-sm'>{store?.name}</span>
            </div>
        </Link>
    );
};

export default StoreCard;