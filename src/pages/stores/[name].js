import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { prodcuts } from '@/utils/products';
import CommonProductCard from '@/components/Commons/ProductCards/CommonProductCard';

const SingelStore = () => {
    const router = useRouter()
    const name = router.query.name


    // console.log(data);
    return (
        <section className='max-w-[1440px] mx-auto px-4'>
            <div className='rounded-3xl md:p-4 mt-8'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-gray-900 text-2xl text-left font-bold'>Products of {name}</h1>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3'>

                    {
                        prodcuts?.map((product, i) => <CommonProductCard key={i} product={product} />)
                    }
                </div>
                {
                    prodcuts.length === 0 && <div className='flex justify-center items-center'>
                        <h1 className='text-center font-bold text-black text-2xl'>No products of {name} Category</h1>
                    </div>
                }
            </div>
        </section>
    );
};

export default SingelStore;