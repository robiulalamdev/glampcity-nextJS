import StoreCard from '@/components/Commons/StoreCards/StoreCard';
import React from 'react';

import { stores } from '@/utils/stores';

const Stores = () => {
    return (
        <section className='max-w-[1440px] mx-auto px-4 py-8'>
            <h1 className='text-gray-900 text-3xl text-left font-bold mb-5'>All Suppliers</h1>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-16'>
                {
                    stores && stores?.map(store => <StoreCard store={store} />)
                }
            </div>
        </section>
    );
};

export default Stores;