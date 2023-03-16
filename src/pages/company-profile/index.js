import CompanyOverview from '@/components/Company-Profile-Components/CompanyOverview';
import ProductCapacity from '@/components/Company-Profile-Components/ProductCapacity';
import RDCapacity from '@/components/Company-Profile-Components/RDCapacity/RDCapacity';
import SendMessageSupplier from '@/components/Company-Profile-Components/SendMessageSupplier';
import TradeCapabilities from '@/components/Company-Profile-Components/TradeCapablities/TradeCapabilities';
import React from 'react';

const CompanyProfile = () => {
    return (
        <section className=''>
            <div className='bg-white'>
                <div className='max-w-[1440px] mx-auto px-4 md:px-8'>
                    <CompanyOverview />
                    <ProductCapacity />
                    <RDCapacity />
                    <TradeCapabilities />
                    <SendMessageSupplier />
                </div>
            </div>
        </section>
    );
};

export default CompanyProfile;