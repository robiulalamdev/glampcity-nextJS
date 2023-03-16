import Image from 'next/image';
import React from 'react';
import img1 from '../../assets/images/customer-support/banner.png'
import img2 from '../../assets/icons/banner-icons/search.png'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '@/Slices/customerSupportSlice';
import MyAccount from '@/components/CustomerSupportComponets/MyAccount';

const CustomerSupportMain = () => {
    const { categories, selectedCategory } = useSelector((state) => state.customerSupportSlice)
    const dispatch = useDispatch()
    return (
        <section className='bg-white min-h-screen'>
            <div className='w-full h-80 relative'>
                <Image className='w-full h-full' src={img1} alt="" />
                <div className='absolute top-0 h-full w-full flex items-center justify-center px-4'>
                    <div className='mx-auto w-full md:w-[600px] h-full flex items-center'>
                        <input className='flex-grow h-12 w-full focus:outline-none border px-2' type="search" name="search" placeholder='What do you need?' />
                        <button className='w-32 h-12 bg-primary flex justify-center items-center' type="submit">
                            <Image className='w-6' src={img2} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className='max-w-[1440px] mx-auto mt-8 px-4'>
                <div className='flex md:justify-between items-center flex-wrap md:flex-nowrap bg-gray-100 border h-20 w-full'>
                    {
                        categories.map(ctg => <button onClick={() => dispatch(setSelectedCategory(ctg.id))}
                            key={ctg.id}
                            className={`w-fit px-4 md:w-full h-20 flex justify-center items-center
                            ${selectedCategory === ctg.id ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white text-black'}`}>
                            <h1 className='font-semibold text-xl'>{ctg.title}</h1>
                        </button>
                        )
                    }
                </div>

                {
                    selectedCategory === '1' && <MyAccount />
                }
            </div>
        </section>
    );
};

export default CustomerSupportMain;