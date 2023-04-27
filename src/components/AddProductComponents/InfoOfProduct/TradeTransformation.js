import React, { useState } from 'react';

const items = [
    {
        value: 'Nigeria',
        label: 'Nigeria',
    },
    {
        value: 'UK',
        label: 'UK',
    }
]

const TradeTransformation = () => {
    const [fobPrice, setFobPrice] = useState("")

    return (
        <div>
            <div className='w-full grid grid-cols-1 gap-4'>
                <div className='grid lg:grid-cols-8 items-center gap-2 w-full'>
                    <span className='lg:col-span-1 col-span-2 lg:text-right'>Price Setting: </span>
                    <div className="lg:col-span-7 flex flex-col lg:flex-row lg:gap-4">
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center gap-2'>
                                <input type="radio" name="priceSetting" id="uniformPrice" />
                                <label htmlFor="uniformPrice">Set uniform price of FOB</label>
                            </div>
                            <div className='flex items-center gap-2'>
                                <input type="radio" name="priceSetting" id="oneFobprice" />
                                <label htmlFor="oneFobprice">Set one FOB price</label>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='grid lg:grid-cols-8 items-start lg:items-center gap-2 w-full'>
                    <span className='lg:col-span-1 lg:text-right'>FOB price</span>
                    <div className='lg:col-span-7 grid lg:grid-cols-4 gap-2' >

                        <div className="dropdown w-full">
                            <input id="dropdown-btn" className='w-full  h-10 border border-gray-400 focus:border-primary rounded focus:outline-none cursor-pointer block px-2 text-sm text-gray-900 focus:ring-blue-500'
                                type="text" value={fobPrice} readOnly placeholder='Select Product Group' />
                            <ul className="absolute top-full left-0 hidden dropdown_menu dropdown_menu--animated dropdown_menu-6
                    grid grid-cols-1 bg-slate-50 shadow-xl shadow-gray-900/30 rounded-md w-full">
                                {
                                    items?.map((item, i) => (
                                        <span onClick={() => setFobPrice(item?.value)}
                                            className="flex items-center px-2 h-8 w-full hover:bg-primary cursor-pointer hover:text-white">
                                            <span>{item.value}</span>
                                        </span>
                                    ))
                                }

                            </ul>
                        </div>
                        <div className="">
                            <input className='max-w-full w-full bg-white h-10 border border-gray-400 focus:border-primary rounded focus:outline-none block px-2 text-sm text-gray-900 focus:ring-blue-500'
                                type="number" name="" id="" />
                        </div>
                        <div className="">
                            <input className='max-w-full w-full bg-white h-10 border border-gray-400 focus:border-primary rounded focus:outline-none block px-2 text-sm text-gray-900 focus:ring-blue-500'
                                type="number" name="" id="" />
                        </div>
                        <div className="dropdown w-full">
                            <input id="dropdown-btn" className='w-full  h-10 border border-gray-400 focus:border-primary rounded focus:outline-none cursor-pointer block px-2 text-sm text-gray-900 focus:ring-blue-500'
                                type="text" value={fobPrice} readOnly placeholder='Select Product Group' />
                            <ul className="absolute top-full left-0 hidden dropdown_menu dropdown_menu--animated dropdown_menu-6
                    grid grid-cols-1 bg-slate-50 shadow-xl shadow-gray-900/30 rounded-md w-full">
                                {
                                    items?.map((item, i) => (
                                        <span onClick={() => setFobPrice(item?.value)}
                                            className="flex items-center px-2 h-8 w-full hover:bg-primary cursor-pointer hover:text-white">
                                            <span>{item.value}</span>
                                        </span>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </div>

                <div className='grid lg:grid-cols-8 items-center gap-2 w-full'>
                    <span className='lg:col-span-1 col-span-2 lg:text-right'>Payment Option: </span>

                    <div className='lg:col-span-7 flex flex-col lg:flex-row lg:gap-4'>
                        <div className='flex items-center gap-2'>
                            <input className='cursor-pointer' type="checkbox" name="L/C" id="L/C" />
                            <label className='cursor-pointer' htmlFor="L/C">L/C</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input className='cursor-pointer' type="checkbox" name="D/A" id="D/A" />
                            <label className='cursor-pointer' htmlFor="D/A">D/A</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input className='cursor-pointer' type="checkbox" name="D/P" id="D/P" />
                            <label className='cursor-pointer' htmlFor="D/P">D/P</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input className='cursor-pointer' type="checkbox" name="T/T" id="T/T" />
                            <label className='cursor-pointer' htmlFor="T/T">T/T</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input className='cursor-pointer' type="checkbox" name="Western Union" id="Western Union" />
                            <label className='cursor-pointer' htmlFor="Western Union">Western Union</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input className='cursor-pointer' type="checkbox" name="Others" id="Others" />
                            <label className='cursor-pointer' htmlFor="Others">Others</label>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};
export default TradeTransformation;