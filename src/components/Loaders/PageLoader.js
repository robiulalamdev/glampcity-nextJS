import React from 'react';
import logo from "../../assets/logo/logo.png"
import Image from 'next/image';

const PageLoader = () => {
    return (
        <div class="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-white p-3">
            <Image className='w-40' src={logo} alt="" />
        </div>
    );
};

export default PageLoader;