import ClickToStart from '@/components/BuyerComponents/ClickToStart/ClickToStart';
import RegisterComplete from '@/components/BuyerComponents/RegisterComplete/RegisterComplete';
import UpgradeNow from '@/components/BuyerComponents/UpgradeNow/UpgradeNow';
import React from 'react';

const index = () => {
    return (
        <section className='bg-[#F5F5F5]'>
            <div className='bg-white'>
                <div className='max-w-[1440px] mx-auto px-3 md:px-8'>
                    <RegisterComplete />
                    <UpgradeNow />
                </div>
            </div>
            <div className='bg-[#1C3CE7CC]'>
                <div className='max-w-[1440px] mx-auto px-3 md:px-8'>
                    <ClickToStart />
                </div>
            </div>
        </section>
    );
};

export default index;