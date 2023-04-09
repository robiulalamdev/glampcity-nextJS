import CountryOrRegion from '@/components/HomeComponents/CountryOrRegion/CountryOrRegion';
import FutureProducts from '@/components/HomeComponents/FutureProducts/FutureProducts';
import LatestProducts from '@/components/HomeComponents/LatestProducts/LatestProducts';
import NewArrival from '@/components/HomeComponents/NewArrival/NewArrival';
import ProductRequirements from '@/components/HomeComponents/ProductRequirements/ProductRequirements';
import TopRanking from '@/components/HomeComponents/TopRanking/TopRanking';
import TradeServices from '@/components/HomeComponents/TradeServices/TradeServices';
import React from 'react';
import Banner from '../../components/HomeComponents/Banner/Banner'
import ContactForm from '@/components/HomeComponents/ContactForm/ContactForm';
import FrequentlyAsk from '@/components/HomeComponents/FrequentlyAsk/FrequentlyAsk';
import FooterInbox from '@/components/HomeComponents/FooterInbox/FooterInbox';


const index = () => {
    return (
        <section className=''>
            <div className='bg-[#faf8f8]'>
                <div className='max-w-[1440px] mx-auto px-3 md:px-8'>
                    <Banner />
                    <section section className='grid md:grid-cols-2 gap-4 mt-16'>
                        <NewArrival />
                        <TopRanking />
                    </section>
                    <LatestProducts />
                    <FutureProducts />
                    <CountryOrRegion />
                    <TradeServices />
                    <ProductRequirements />
                </div>
            </div>

            <div className='bg-[#0029FF1F]'>
                <div className='max-w-[1440px] mx-auto px-3 md:px-8'>
                    <ContactForm />
                </div>
            </div>
            <div className='bg-white'>
                <div className='max-w-[1440px] mx-auto px-3 md:px-8'>
                    <FrequentlyAsk />
                </div>
            </div>

            <div className='bg-[#3432FF]'>
                <div className='max-w-[1440px] mx-auto px-3 md:px-8'>
                    <FooterInbox />
                </div>
            </div>
        </section>
    );
};

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://heylink.ahmadalanazi.com/api/category/show`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
};

export default index; 