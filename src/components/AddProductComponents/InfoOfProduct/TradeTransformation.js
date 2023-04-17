import { Checkbox, Input, Option, Radio, Select } from '@material-tailwind/react';
import React from 'react';

const TradeTransformation = () => {
    return (
        <div>
            <div className='w-full grid grid-cols-1 gap-4'>
                <div className='grid lg:grid-cols-8 items-center gap-2 w-full'>
                    <span className='lg:col-span-1 col-span-2 lg:text-right'>Price Setting: </span>
                    <div className="lg:col-span-7 flex flex-col lg:flex-row lg:gap-4">
                        <Radio
                            id="uniform-price"
                            name="type"
                            label="Set uniform price of FOB"
                            ripple={true}
                        />
                        <Radio
                            id="one-price"
                            name="type"
                            label="Set one FOB price"
                            ripple={false}
                        />
                    </div>
                </div>


                <div className='grid lg:grid-cols-8 items-start lg:items-center gap-2 w-full'>
                    <span className='lg:col-span-1 lg:text-right'>FOB price</span>
                    <div className='lg:col-span-7 grid lg:grid-cols-4 gap-2' >

                        <Select className='z-auto' >
                            <Option>Material Tailwind HTML</Option>
                            <Option>Material Tailwind React</Option>
                            <Option>Material Tailwind Vue</Option>
                            <Option>Material Tailwind Angular</Option>
                            <Option>Material Tailwind Svelte</Option>
                        </Select>
                        <div className="">
                            <input className='max-w-full w-full bg-white h-10 border border-gray-400 focus:border-primary rounded focus:outline-none block px-2 text-sm text-gray-900 focus:ring-blue-500'
                                type="number" name="" id="" />
                        </div>
                        <div className="">
                            <input className='max-w-full w-full bg-white h-10 border border-gray-400 focus:border-primary rounded focus:outline-none block px-2 text-sm text-gray-900 focus:ring-blue-500'
                                type="number" name="" id="" />
                        </div>
                        <div className="">
                            <Select className='z-auto' >
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
                            </Select>
                        </div>
                    </div>
                </div>

                <div className='grid lg:grid-cols-8 items-center gap-2 w-full'>
                    <span className='lg:col-span-1 col-span-2 lg:text-right'>Payment Option: </span>
                    <div className="lg:col-span-7 flex flex-col lg:flex-row lg:gap-4">
                        <Checkbox id='L/C' name='L/C' label="L/C" />
                        <Checkbox id='D/A' name='D/A' label="D/A" />
                        <Checkbox id='D/P' name='D/P' label="D/P" />
                        <Checkbox id='T/T' name='T/T' label="T/T" />
                        <Checkbox id='Western Union' name='Western Union' label="Western Union" />
                        <Checkbox id='Others' name='Others' label="Others" />
                    </div>
                </div>


            </div>
        </div>
    );
};
export default TradeTransformation;