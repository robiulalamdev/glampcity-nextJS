import StoreCard from '@/components/Commons/StoreCards/StoreCard';
import React from 'react';

const Stores = ({ stores }) => {
    return (
        <section className='max-w-[1440px] mx-auto px-4 py-8'>
            <h1 className='text-gray-900 text-3xl text-left font-bold mb-5'>All Suppliers</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16'>
                {
                    stores && stores?.map(store => <StoreCard store={store} />)
                }
            </div>
        </section>
    );
};

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:5055/api/store`)
    const stores = await res.json()
    return { props: { stores } }
}

export default Stores;