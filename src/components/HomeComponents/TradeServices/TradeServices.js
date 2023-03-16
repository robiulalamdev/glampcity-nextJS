import React from 'react';
import img from '../../../assets/images/future-products-images/img1.png'
import img1 from '../../../assets/images/new-arrival-images/img1.png'
import img3 from '../../../assets/images/new-arrival-images/img3.png'
import img4 from '../../../assets/images/new-arrival-images/img4.png'
import img5 from '../../../assets/images/new-arrival-images/img5.png'
import love from '../../../assets/icons/latest-products-icons/love.png'
import icon1 from '../../../assets/icons/trade-servies-icons/img1.png'
import icon2 from '../../../assets/icons/trade-servies-icons/img2.png'
import icon3 from '../../../assets/icons/trade-servies-icons/img3.png'
import icon4 from '../../../assets/icons/trade-servies-icons/img4.png'
import ProductCard from '../../ProductCards/ProductCard';
import Link from 'next/link';
import Image from 'next/image';

const products = [
    { id: '15df56', img: img1, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '2ddff', img: img3, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '3ffd44fdsf', img: img3, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '4d4fdf4s', img: img4, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '5dff4f', img: img5, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: 'dsdf56', img: img4, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
]

const TradeServices = () => {
    return (
        <section className='mt-32 cursor-pointer'>
            <h1 className='text-gray-900 text-3xl text-center font-semibold mb-5'>Trade services</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto'>
                <div className='border shadow rounded-md p-7 hover:bg-blue-100 bg-white hover:shadow hover:shadow-blue-400 duration-300'>
                    <div className='w-16 h-14 bg-[#E64CB2] mx-auto md:mx-0 flex justify-center items-center'>
                        <Image className='w-8' src={icon1} alt="" />
                    </div>
                    <h1 className='text-gray-900 font-bold text-center md:text-left text-xl mt-6'>Trade Assurance</h1>
                    <p className='text-sm text-gray-500 mt-2 text-center md:text-left'>Select the date you intend to book (<Link href='' className='text-primary'>Click Here</Link>) and the rates and availability of the tent will appear</p>
                </div>
                <div className='border shadow rounded-md p-7 hover:bg-blue-100 bg-white hover:shadow hover:shadow-blue-400 duration-300'>
                    <div className='w-16 h-14 bg-[#DA525A] mx-auto md:mx-0 flex justify-center items-center'>
                        <Image className='w-8' src={icon2} alt="" />
                    </div>
                    <h1 className='text-gray-900 font-bold text-center md:text-left text-xl mt-6'>Payment</h1>
                    <p className='text-sm text-gray-500 mt-2 text-center md:text-left'>Click on the respective tent type to view the packages included (e.g Couple Deluxe /Couple Suite / Family Suite / Jumbo Tent)</p>
                </div>
                <div className='border shadow rounded-md p-7 hover:bg-blue-100 bg-white hover:shadow hover:shadow-blue-400 duration-300'>
                    <div className='w-16 h-14 bg-[#EFAF65] mx-auto md:mx-0 flex justify-center items-center'>
                        <Image className='w-8' src={icon3} alt="" />
                    </div>
                    <h1 className='text-gray-900 font-bold text-center md:text-left text-xl mt-6'>Inspection Solution</h1>
                    <p className='text-sm text-gray-500 mt-2 text-center md:text-left'>Scroll down to 'Add On' section to view the extra packages available.</p>
                </div>
                <div className='border shadow rounded-md p-7 hover:bg-blue-100 bg-white hover:shadow hover:shadow-blue-400 duration-300'>
                    <div className='w-16 h-14 bg-[#4C8DD9] mx-auto md:mx-0 flex justify-center items-center'>
                        <Image className='w-8' src={icon4} alt="" />
                    </div>
                    <h1 className='text-gray-900 font-bold text-center md:text-left text-xl mt-6'>Ocean and Air shi text-centerpmd:ping</h1>
                    <p className='text-sm text-gray-500 mt-2 text-left'>Click 'Book Now' when you are ready to book</p>
                </div>
            </div>

            <div className='mt-16'>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                    <div className='relative col-span-2 lg:col-span-1 rounded-xl bg-[#804AFC] mt-6'>
                        <div className='px-6 mt-3'>
                            <h1 className='font-bold text-white text-2xl text-center md:text-left '>The Most <br /> Popular Products</h1>
                            <div className='w-36 h-9 mx-auto md:mx-0 bg-white rounded-[50px] flex justify-center items-center mt-2'>
                                <button className='text-[#804AFC] font-semibold'>View More</button>
                            </div>

                            <h1 className='text-white text-xl text-center md:text-left mt-2'>Upto</h1>
                            <h1 className='text-white font-bold text-5xl text-center md:text-left'>10%</h1>
                            <h1 className='text-white text-xl my-2 text-center'>Rebate</h1>
                        </div>

                    </div>
                    {
                        products.map((product, i) => <ProductCard key={i} product={product} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default TradeServices;