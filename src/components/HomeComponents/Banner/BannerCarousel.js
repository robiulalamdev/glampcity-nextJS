import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner from '../../../assets/images/banner-images/banner.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Image from "next/image";

const BannerCarousel = () => {
    return (
        <div className="w-full max-h-[368px] relative">
            <Swiper navigation={true} modules={[Navigation]} className="">
                <SwiperSlide>
                    <Image className="w-96 md:w-full max-h-[368px]" src={banner} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-96 md:w-full max-h-[368px]" src={banner} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-96 md:w-full max-h-[368px]" src={banner} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default BannerCarousel;
