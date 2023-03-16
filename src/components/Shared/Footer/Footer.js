import React from 'react';
import logo from '../../../assets/logo/logo.png'
import facebook from '../../../assets/icons/footer-icons/facebook.png'
import twitter from '../../../assets/icons/footer-icons/twitter.png'
import instagram from '../../../assets/icons/footer-icons/instagram.png'
import youtube from '../../../assets/icons/footer-icons/youTube.png'
import linkedin from '../../../assets/icons/footer-icons/linkedIn.png'
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='bg-gray-100 px-4 pt-8 mt-16'>
            <div className='max-w-[1440px] mx-auto cursor-pointer'>
                <div className='grid md:grid-cols-3 lg:grid-cols-7 gap-4 gap-y-6 md:gap-y-16'>
                    <div className='lg:col-span-2'>
                        <Image className='w-20 mb-6 mx-auto md:mx-0' src={logo} alt="footerImage" />
                        <p className='text-gray-500 text-center md:text-left mb-4'>Enim enim integer quam volutpat, a ut fames. Ornare sem egestas tincidunt vitae at nisi ultricies arcu.</p>

                        <h1 className='text-black font-bold text-xl text-center md:text-left mb-4'>Follow Us</h1>
                        <div className='flex justify-center md:justify-start items-center gap-4'>
                            <a target='_blank' href="">
                                <Image className='w-3' src={facebook} alt="footerImage" />
                            </a>
                            <a target='_blank' href="">
                                <Image className='w-5' src={instagram} alt="footerImage" />
                            </a>
                            <a target='_blank' href="">
                                <Image className='w-5' src={linkedin} alt="footerImage" />
                            </a>
                            <a target='_blank' href="">
                                <Image className='w-5' src={youtube} alt="footerImage" />
                            </a>
                            <a target='_blank' href="">
                                <Image className='w-5' src={twitter} alt="footerImage" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-black text-xl font-bold text-center md:text-left mb-4 md:mb-10'>Customer Services</h1>

                        <div className='text-gray-500 text-left font-normal flex flex-col justify-start items-center md:items-start gap-3'>
                            <p>Help Center</p>
                            <p>Report Abuse</p>
                            <p>Open Case</p>
                            <p>Policies And Rules</p>
                            <p>Get Paid for Your Feedback</p>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-black text-xl font-bold text-center md:text-left mb-4 md:mb-10'>About US</h1>

                        <div className='text-gray-500 text-left font-normal flex flex-col justify-start items-center md:items-start gap-3'>
                            <p>About</p>
                            <p>Contact us</p>
                            <p>Sitemap</p>
                            <p>Blog</p>
                            <p>Notice</p>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-black text-xl font-bold text-center md:text-left mb-4 md:mb-10'>Source</h1>

                        <div className='text-gray-500 text-left font-normal flex flex-col justify-start items-center md:items-start gap-3'>
                            <p>Resources</p>
                            <p>All Categories</p>
                            <p>Request for Quoteation</p>
                            <p>Ready to Ship</p>
                            <p>Buyer Partners</p>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-black text-xl font-bold text-center md:text-left mb-4 md:mb-10'>Sell</h1>

                        <div className='text-gray-500 text-left font-normal flex flex-col justify-start items-center md:items-start gap-3'>
                            <p>Supplier memberships</p>
                            <p>Learning Center</p>
                            <p>Partner Program</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-black text-xl font-bold text-center md:text-left mb-4 md:mb-10'>Trade Services</h1>

                        <div className='text-gray-500 text-left font-normal flex flex-col justify-start items-center md:items-start gap-3'>
                            <p>Trade Assurance</p>
                            <p>Business Identity</p>
                            <p>Logistics Services</p>
                        </div>
                    </div>
                </div>

                <div className='mb-4 mt-20'>
                    <h1 className='text-gray-600 text-center'>Copyright © 2022 Glampcity</h1>
                    <div className='flex justify-center items-center flex-wrap gap-2 w-full mt-2'>
                        <h1>All Rights Reserved |</h1>
                        <Link href='/' className='text-primary underline'>Terms and Conditions </Link>
                        <span>|</span>
                        <Link href='/' className='text-primary underline'>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;