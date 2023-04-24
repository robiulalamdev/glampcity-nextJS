import RecommendedDropdown from "@/components/Dropdowns/HomePageDropdowns/RecommendedDropdown";
import { setOpenRecommended } from "@/Slices/bannerSlice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import call from '../../../assets/icons/banner-icons/call.png'
import banner from '../../../assets/images/banner-images/banner.png'
import BannerCarousel from "./BannerCarousel";
import Categories from "./Categories";

import { Carousel } from 'antd';
const Arrow = ({ type, style, className, onClick }) => (
    <svg type={type} style={style} className={`${className} absolute top-4 left-7`} onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>

);

const Banner = () => {
    const { openRecommended } = useSelector((state) => state.bannerSlice)
    const dispatch = useDispatch()
    return (
        <section className=''>
            <div className='grid lg:grid-cols-4 gap-6 pt-8'>
                <Categories />

                <div className='lg:col-span-3 order-first lg:order-none'>
                    <div className='w-full flex flex-col-reverse lg:flex-row lg:items-center gap-6'>
                        <div className="flex-grow relative">
                            <div className='flex-grow flex items-center'>
                                <input onClick={() => dispatch(setOpenRecommended(true))} className='flex-grow h-10 w-full focus:outline-none border focus:border-primary px-2' type="search" name="search" placeholder='What do you need?' />
                                <button className='w-36 h-10 text-white bg-primary hover:bg-darkPrimary duration-150 flex justify-center items-center' type="submit"><span>Search</span></button>
                            </div>
                            {
                                openRecommended && <RecommendedDropdown />
                            }
                        </div>
                        <div className='flex items-center gap-6'>
                            <a href="tel:+ 6511 22 333">
                                <Image className='w-10' src={call} alt="" />
                            </a>
                            <div className='flex flex-col gap-1'>
                                <a href="tel:+ 6511 22 333" className='text-sm text-gray-600'>+ 6511 22 333</a>
                                <a href="tel:+ 6511 22 333" className='text-[10px] text-gray-900'>Support 24/7 time</a>
                            </div>
                        </div>
                    </div>


                    <div className='relative w-full max-h-[368px] mt-6'>
                        <BannerCarousel />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;