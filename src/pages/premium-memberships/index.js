import PremiumMembershipsTable from '@/components/PremiumMembershipsCompo/PremiumMembershipsTable';
import React from 'react';

const index = () => {
    return (
        <main className='max-w-[1440px] mx-auto px-4 py-12'>
            <h1 className='text-center font-bold text-black text-2xl'>Our Premium <span className='text-red-600'>Packages</span></h1>
            <p className='text-center font-semibold text-black'>Premium Features and Ultimate Services</p>

            <div className='mt-12 max-w-[1440px] overflow-x-auto overflow-y-hidden'>
                <PremiumMembershipsTable />
            </div>
        </main>
    );
};

export default index;