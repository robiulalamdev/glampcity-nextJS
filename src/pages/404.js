import Image from 'next/image';
import React from 'react';

import error from "../assets/images/404.png"
import Link from 'next/link';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <Image className='w-96 md:w-[800px]' src={error} alt="" />
            <div>
                <Link href="/" className='w-fit h-10 bg-primary hover:bg-darkPrimary duration-150 text-white font-bold flex items-center justify-center px-6'>
                    <span>Back To Home</span>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;