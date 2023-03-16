"use client"
import React from "react";
import img1 from '../../../assets/images/country-images/img1.png'
import img2 from '../../../assets/images/country-images/img2.png'
import img3 from '../../../assets/images/country-images/img3.png'
import img4 from '../../../assets/images/country-images/img4.png'
import img5 from '../../../assets/images/country-images/img5.png'
import img6 from '../../../assets/images/country-images/img6.png'
import img7 from '../../../assets/images/country-images/img7.png'
import img8 from '../../../assets/images/country-images/img8.png'
import img9 from '../../../assets/images/country-images/img9.png'
import img10 from '../../../assets/images/country-images/img10.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./country.module.css"

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";
import Image from "next/image";

const CountryOrRegion = () => {
    return (
        <section className='mt-24'>
            <div className='hidden md:block'>
                <h1 className='text-center font-bold text-gray-900 text-3xl mb-9'>Suppliers by country or region</h1>
                <div className='grid grid-cols-3 md:grid-cols-5 gap-7 mt-16'>
                    <div className='mx-auto'>
                        <Image className='w-full h-full' src={img1} alt="" />
                    </div>
                    <div className='mx-auto'>
                        <Image className='w-full h-full' src={img2} alt="" />
                    </div>
                    <div className='mx-auto'>
                        <Image className='w-full h-full' src={img3} alt="" />
                    </div>
                    <div className='mx-auto'>
                        <Image className='w-full h-full' src={img4} alt="" />
                    </div>
                    <div className='mx-auto'>
                        <Image className='w-full h-full' src={img5} alt="" />
                    </div>
                    <div className='mx-auto'>
                        <Image className='w-full h-full' src={img6} alt="" />
                    </div>
                    <div className='mx-auto'>
                        <Image className='w-full h-full' src={img7} alt="" />
                    </div>
                    <div className='mx-auto'>
                        <Image className='w-full h-full' src={img8} alt="" />
                    </div>
                    <div className='mx-auto'>
                        <Image className='w-full h-full' src={img9} alt="" />
                    </div>
                    <div className='mx-auto'>
                        <Image className='w-full h-full' src={img10} alt="" />
                    </div>
                </div>
            </div>
            <div className='md:hidden cursor-pointer'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false,
                    }}
                    freeMode={true}
                    modules={[Autoplay, FreeMode]}
                    className="mySwiper"
                >
                    <SwiperSlide><Image className='' src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><Image className='' src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><Image className='' src={img3} alt="" /></SwiperSlide>
                    <SwiperSlide><Image className='' src={img4} alt="" /></SwiperSlide>
                    <SwiperSlide><Image className='' src={img5} alt="" /></SwiperSlide>
                    <SwiperSlide><Image className='' src={img6} alt="" /></SwiperSlide>
                    <SwiperSlide><Image className='' src={img7} alt="" /></SwiperSlide>
                    <SwiperSlide><Image className='' src={img8} alt="" /></SwiperSlide>
                    <SwiperSlide><Image className='' src={img9} alt="" /></SwiperSlide>
                    <SwiperSlide><Image className='' src={img10} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default CountryOrRegion;