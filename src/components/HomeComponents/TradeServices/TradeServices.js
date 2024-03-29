import React, { useEffect } from 'react';
import icon1 from '../../../assets/icons/trade-servies-icons/img1.png'
import icon2 from '../../../assets/icons/trade-servies-icons/img2.png'
import icon3 from '../../../assets/icons/trade-servies-icons/img3.png'
import icon4 from '../../../assets/icons/trade-servies-icons/img4.png'
import justForYou from '../../../assets/images/product-details/product-images/justForYou.png'
import ProductCard from '../../ProductCards/ProductCard';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setPopularProducts } from '@/Slices/viewProductSlice';

const TradeServices = () => {
    const { popularProducts } = useSelector((state) => state.viewProductSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`http://localhost:5055/api/popular-product`)
            .then(res => res.json())
            .then(data => {
                dispatch(setPopularProducts(data));
            })
    }, [])
    return (
        <section className='pt-32 cursor-pointer'>
            <h1 className='text-gray-900 text-3xl text-center font-semibold mb-5'>Trade services</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto'>
                <div className='border rounded-md p-7 hover:bg-blue-100 bg-white hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-3 duration-700'>
                    <div className='w-16 h-14 bg-[#E64CB2] mx-auto md:mx-0 flex justify-center items-center'>
                        <Image className='w-8' src={icon1} alt="" />
                    </div>
                    <h1 className='text-gray-900 font-bold text-center md:text-left text-xl mt-6'>Trade Assurance</h1>
                    <p className='text-sm text-gray-500 mt-2 text-center md:text-left'>Select the date you intend to book (<Link href='' className='text-primary'>Click Here</Link>) and the rates and availability of the tent will appear</p>
                </div>
                <div className='border rounded-md p-7 hover:bg-blue-100 bg-white hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-3 duration-700'>
                    <div className='w-16 h-14 bg-[#DA525A] mx-auto md:mx-0 flex justify-center items-center'>
                        <Image className='w-8' src={icon2} alt="" />
                    </div>
                    <h1 className='text-gray-900 font-bold text-center md:text-left text-xl mt-6'>Payment</h1>
                    <p className='text-sm text-gray-500 mt-2 text-center md:text-left'>Click on the respective tent type to view the packages included (e.g Couple Deluxe /Couple Suite / Family Suite / Jumbo Tent)</p>
                </div>
                <div className='border rounded-md p-7 hover:bg-blue-100 bg-white hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-3 duration-700'>
                    <div className='w-16 h-14 bg-[#EFAF65] mx-auto md:mx-0 flex justify-center items-center'>
                        <Image className='w-8' src={icon3} alt="" />
                    </div>
                    <h1 className='text-gray-900 font-bold text-center md:text-left text-xl mt-6'>Inspection Solution</h1>
                    <p className='text-sm text-gray-500 mt-2 text-center md:text-left'>Scroll down to 'Add On' section to view the extra packages available.</p>
                </div>
                <div className='border rounded-md p-7 hover:bg-blue-100 bg-white hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-3 duration-700'>
                    <div className='w-16 h-14 bg-[#4C8DD9] mx-auto md:mx-0 flex justify-center items-center'>
                        <Image className='w-8' src={icon4} alt="" />
                    </div>
                    <h1 className='text-gray-900 font-bold text-center md:text-left text-xl mt-6'>Ocean and Air shi text-centerpmd:ping</h1>
                    <p className='text-sm text-gray-500 mt-2 text-left'>Click 'Book Now' when you are ready to book</p>
                </div>
            </div>

            <div className='mt-16'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                    <Link href={`/product-list/popular-products`}
                        className='relative col-span-2 md:col-span-1 flex items-center rounded-xl bg-[#2867ee] px-6 py-3 hover:-translate-y-8 duration-700'>
                        <div className=''>
                            <h1 className='font-bold text-white hover:bg-gray-200 duration-150 text-2xl text-center md:text-left '>The Most <br /> Popular Products</h1>
                            <div className='w-36 h-9 mx-auto md:mx-0 bg-white hover:bg-gray-200 duration-150 rounded-[50px] flex justify-center items-center mt-2'>
                                <button className='text-[#2867ee] font-semibold'>View More</button>
                            </div>

                            <h1 className='text-white text-xl text-center md:text-left mt-2'>Upto</h1>
                            <h1 className='text-white font-bold text-5xl text-center md:text-left'>10%</h1>
                            <h1 className='text-white text-xl mt-2 text-center'>Rebate</h1>
                        </div>
                        <Image className='h-52 mx-auto mr-0' src={justForYou} alt="" />
                    </Link>
                    {
                        popularProducts?.map((product, i) => <ProductCard key={i} product={product} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default TradeServices;