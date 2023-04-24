import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
import Image from "next/image";

export default class CountryAutoSlider extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <Slider {...settings} >
                <div className='mx-auto'>
                    <Image className='w-full h-full pl-4' src={img1} alt="" />
                </div>
                <div className='mx-auto'>
                    <Image className='w-full h-full pl-4' src={img2} alt="" />
                </div>
                <div className='mx-auto'>
                    <Image className='w-full h-full pl-4' src={img3} alt="" />
                </div>
                <div className='mx-auto'>
                    <Image className='w-full h-full pl-4' src={img4} alt="" />
                </div>
                <div className='mx-auto'>
                    <Image className='w-full h-full pl-4' src={img5} alt="" />
                </div>
                <div className='mx-auto'>
                    <Image className='w-full h-full pl-4' src={img6} alt="" />
                </div>
                <div className='mx-auto'>
                    <Image className='w-full h-full pl-4' src={img7} alt="" />
                </div>
                <div className='mx-auto'>
                    <Image className='w-full h-full pl-4' src={img8} alt="" />
                </div>
                <div className='mx-auto'>
                    <Image className='w-full h-full pl-4' src={img9} alt="" />
                </div>
                <div className='mx-auto'>
                    <Image className='w-full h-full pl-4' src={img10} alt="" />
                </div>
            </Slider>
        );
    }
}