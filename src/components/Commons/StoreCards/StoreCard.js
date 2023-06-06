import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import profile from '../../../assets/images/future-products-images/img.png'

const StoreCard = ({ store }) => {
    return (
        <Link href={`/stores/${store?.username}`}
            className='cursor-pointer w-fit h-fit flex justify-center items-center mx-auto rounded-full hover:border-primary duration-150 relative overflow-hidden'>
            {
                store?.logo ? <img draggable="false" className='w-60 h-60 rounded-full border-[8px] md:border-[14px] border-white' src={store?.logo} alt="" />
                    :
                    <Image draggable="false" className='w-60 h-60 rounded-full border-[8px] md:border-[14px] border-white' src={profile} alt="" />
            }
            <div className='absolute w-full h-8 md:h-10 bg-white flex justify-center items-center object-cover'>
                <span className='text-black font-semibold text-sm'>{store?.name}</span>
            </div>
        </Link>
    );
};

export default StoreCard;