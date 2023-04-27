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

const LogisticsInformation = () => {
    const [fobPrice, setFobPrice] = useState("")
    return (
        <div>
            <div className='w-full grid grid-cols-1 gap-4'>
                <div className='grid lg:grid-cols-8 items-center gap-2 w-full'>
                    <span className='lg:col-span-1 lg:text-right'>Processing Time</span>
                    <input className='lg:col-span-7 max-w-full w-full  h-10 border border-gray-400 focus:border-primary rounded focus:outline-none block px-2 text-sm text-gray-900 focus:ring-blue-500' label="Product Name" />
                </div>
                <div className='grid lg:grid-cols-8 items-center gap-2 w-full'>
                    <span className='lg:col-span-1 lg:text-right'>Part</span>
                    <input className='lg:col-span-7 max-w-full w-full  h-10 border border-gray-400 focus:border-primary rounded focus:outline-none block px-2 text-sm text-gray-900 focus:ring-blue-500' label="Product Name" />
                </div>

                <div className='grid lg:grid-cols-8 lg:items-start gap-2 w-full'>
                    <span className='lg:col-span-1 col-span-2 lg:text-right'>Supply Ability</span>
                    <div className='lg:col-span-7 col-span-6 grid grid-cols-1 gap-2' >
                        <div className=' grid lg:grid-cols-3 gap-2'>
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
                        <span>Please select both the amount and type in unit.</span>
                    </div>
                </div>

                <div className='grid lg:grid-cols-8 items-start gap-2 w-full'>
                    <span className='lg:col-span-1 lg:text-right'>Packaging Details</span>
                    <textarea
                        className='col-span-7 w-full h-28 bg-gray-100 focus:border focus:border-primary rounded focus:outline-none block p-2 text-gray-900 focus:ring-blue-500 resize-none'
                        name="" id="" cols="30" rows="10" placeholder='Write Details Here...' >
                    </textarea>
                </div>
            </div>

        </div>
    );
};
export default LogisticsInformation;