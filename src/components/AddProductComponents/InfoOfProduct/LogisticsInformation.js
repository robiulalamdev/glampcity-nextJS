import { Input, Option, Select } from '@material-tailwind/react';
import React from 'react';

const LogisticsInformation = () => {
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
                            <input className='max-w-full w-full  h-10 border border-gray-400 focus:border-primary rounded focus:outline-none block px-2 text-sm text-gray-900 focus:ring-blue-500' label="Product Name" />

                            <Select className='z-auto' >
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
                            </Select>
                            <Select className='z-auto' >
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
                            </Select>
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