import SingelStore from '@/components/HomeComponents/FutureProducts/SingelStore';
import React from 'react';

const Stores = ({ stores }) => {
    return (
        <section className='max-w-[1440px] mx-auto px-4 py-8'>
            <h1 className='text-gray-900 text-3xl text-center font-semibold mb-5'>Featured Products from <strong>Verified Suppliers</strong></h1>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-16'>
                {
                    stores && stores?.map(store => <SingelStore store={store} />)
                }
            </div>
        </section>
    );
};

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:5055/api/store`)
    const stores = await res.json()
    // Pass data to the page via props
    return { props: { stores } }
}

export default Stores;