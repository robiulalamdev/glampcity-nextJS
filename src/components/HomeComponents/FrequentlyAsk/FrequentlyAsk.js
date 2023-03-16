"use client"
import Image from 'next/image';
import { useState } from 'react';
import icon1 from '../../../assets/icons/frequently-ask-icons/icon1.png'
import upArrow from '../../../assets/icons/frequently-ask-icons/up-arrow.png'
import downArrow from '../../../assets/icons/login-register-icons/arrow-down.png'


const FrequentlyAsk = () => {
    const [open1, setOpen1] = useState(true)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    const [open6, setOpen6] = useState(false)
    return (
        <section className='mt-32 bg-white'>
            <h1 className='text-center font-bold text-gray-900 text-2xl md:text-3xl'>Frequently asked questions</h1>
            <div className='grid grid-cols-1 gap-4 cursor-pointer mt-8  max-w-[840px] mx-auto'>
                <div className='w-full border border-[#0029FF4D] rounded pb-6'>
                    <div onClick={() => setOpen1(!open1)}
                        className='flex justify-between items-center border-b border-[#0029FF4D] mx-3 py-3 px-3 md:mx-6 md:py-6 md:px-4 cursor-pointer' >
                        <div className='flex items-center gap-4'>
                            <Image className='w-8 md:w-10' src={icon1} alt="" />
                            <h1 className='md:text-xl font-semibold md:font-bold text-gray-900'>Camping Permit</h1>
                        </div>
                        <div>
                            {
                                open1 ? <Image className='w-5' src={downArrow} alt="" />
                                    :
                                    <Image className='w-6' src={upArrow} alt="" />
                            }
                        </div>
                    </div>

                    {
                        open1 && <div className='pt-3 md:pt-6 px-3 md:px-6'>
                            <p className='text-sm text-gray-600 text-left'>A camping permit is required for each tent. Guests are required to secure their camping permit directly via the AXS portal / Nparks website. Glampingcity will assume that guests have done their due diligence in securing the camping permit prior to booking the tent with Glampingcity. Glamping city will not be responsible for the issuance of camping permit required by Nparks and exclude all responsibility relating to camping permit. Should the guest have failed to secure the camping permit after booking a tent, only rescheduling is allowed.</p>
                        </div>
                    }

                </div>

                <div className='w-full border border-[#0029FF4D] rounded pb-6'>
                    <div onClick={() => setOpen2(!open2)}
                        className='flex justify-between items-center border-b border-[#0029FF4D] mx-3 py-3 px-3 md:mx-6 md:py-6 md:px-4 cursor-pointer' >
                        <div className='flex items-center gap-4'>
                            <Image className='w-8 md:w-10' src={icon1} alt="" />
                            <h1 className='md:text-xl font-semibold md:font-bold text-gray-900'>Rental Duration</h1>
                        </div>
                        <div>
                            {
                                open2 ? <Image className='w-5' src={downArrow} alt="" />
                                    :
                                    <Image className='w-6' src={upArrow} alt="" />
                            }
                        </div>
                    </div>

                    {
                        open2 && <div className='pt-3 md:pt-6 px-3 md:px-6'>
                            <p className='text-sm text-gray-600 text-left'>Usage of camping equipment rental and add ons items will be from 3:00PM to 10:00AM the next following day. *Subject to good weather.</p>
                        </div>
                    }

                </div>


                <div className='w-full border border-[#0029FF4D] rounded pb-6'>
                    <div onClick={() => setOpen3(!open3)}
                        className='flex justify-between items-center border-b border-[#0029FF4D] mx-3 py-3 px-3 md:mx-6 md:py-6 md:px-4 cursor-pointer' >
                        <div className='flex items-center gap-4'>
                            <Image className='w-8 md:w-10' src={icon1} alt="" />
                            <h1 className='md:text-xl font-semibold md:font-bold text-gray-900'>Glamping Area @ East Coast Park</h1>
                        </div>
                        <div>
                            {
                                open3 ? <Image className='w-5' src={downArrow} alt="" />
                                    :
                                    <Image className='w-6' src={upArrow} alt="" />
                            }
                        </div>
                    </div>

                    {
                        open3 && <div className='pt-3 md:pt-6 px-3 md:px-6'>
                            <p className='text-sm text-gray-600 text-left'>Glamping City provides the rental of camping equipment at Area G2 of East Coast Park, along BBQ pit 68-72. A follow-up text message in regards to the exact spot of your tent and rental equipment will be provided on the day of your glamping date. If you would like to request for your tent to be pitched at different areas/specific spot, kindly drop us an email to booking@glampingcity.com . Additional fee may or may not apply.</p>
                        </div>
                    }

                </div>


                <div className='w-full border border-[#0029FF4D] rounded pb-6'>
                    <div onClick={() => setOpen4(!open4)}
                        className='flex justify-between items-center border-b border-[#0029FF4D] mx-3 py-3 px-3 md:mx-6 md:py-6 md:px-4 cursor-pointer' >
                        <div className='flex items-center gap-4'>
                            <Image className='w-8 md:w-10' src={icon1} alt="" />
                            <h1 className='md:text-xl font-semibold md:font-bold text-gray-900'>BBQ pit</h1>
                        </div>
                        <div>
                            {
                                open4 ? <Image className='w-5' src={downArrow} alt="" />
                                    :
                                    <Image className='w-6' src={upArrow} alt="" />
                            }
                        </div>
                    </div>

                    {
                        open4 && <div className='pt-3 md:pt-6 px-3 md:px-6'>
                            <p className='text-sm text-gray-600 text-left'>Booking of BBQ pit shall be done directly via the nparks portal. Kindly select your BBQ pit area within the same campsite, Area G2 (BBQ pit 68 - 71), if you would like for your tent to be situated near your BBQ pit area. Once you have secured your BBQ pit, kindly let us know at least 48 hours before your glamping date.</p>
                        </div>
                    }

                </div>
                <div className='w-full border border-[#0029FF4D] rounded pb-6'>
                    <div onClick={() => setOpen5(!open5)}
                        className='flex justify-between items-center border-b border-[#0029FF4D] mx-3 py-3 px-3 md:mx-6 md:py-6 md:px-4 cursor-pointer' >
                        <div className='flex items-center gap-4'>
                            <Image className='w-8 md:w-10' src={icon1} alt="" />
                            <h1 className='md:text-xl font-semibold md:font-bold text-gray-900'>Rules and Regulations</h1>
                        </div>
                        <div>
                            {
                                open5 ? <Image className='w-5' src={downArrow} alt="" />
                                    :
                                    <Image className='w-6' src={upArrow} alt="" />
                            }
                        </div>
                    </div>

                    {
                        open5 && <div className='pt-3 md:pt-6 px-3 md:px-6'>
                            <p className='text-sm text-gray-600 text-left'>Glamping @ East Coast Park is located in a public park. Kindly adhere to the rules and regulations set by nparks. Glamping City will not be responsible for any breaching of rules.</p>
                        </div>
                    }

                </div>
                <div className='w-full border border-[#0029FF4D] rounded pb-6'>
                    <div onClick={() => setOpen6(!open6)}
                        className='flex justify-between items-center border-b border-[#0029FF4D] mx-3 py-3 px-3 md:mx-6 md:py-6 md:px-4 cursor-pointer' >
                        <div className='flex items-center gap-4'>
                            <Image className='w-8 md:w-10' src={icon1} alt="" />
                            <h1 className='md:text-xl font-semibold md:font-bold text-gray-900'>Bad Weather</h1>
                        </div>
                        <div>
                            {
                                open6 ? <Image className='w-5' src={downArrow} alt="" />
                                    :
                                    <Image className='w-6' src={upArrow} alt="" />
                            }
                        </div>
                    </div>

                    {
                        open6 && <div className='pt-3 md:pt-6 px-3 md:px-6'>
                            <p className='text-sm text-gray-600 text-left'>In the event of bad weather, the check-in time will be subject to change. A follow up text message will be sent regarding delays due to bad weather. If the check-in time is delayed due to bad weather, the check-out time will be extended accordingly.Rescheduling of booking due to bad weather is not allowed unless otherwise agreed.In the event of a thunderstorm or any weather that is deemed to be unacceptable by NParks regulation, all guests will have to evacuate immediately.</p>
                        </div>
                    }

                </div>
            </div>
        </section>
    );
};

export default FrequentlyAsk;