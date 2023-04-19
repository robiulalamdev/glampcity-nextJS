import { Select } from 'antd';
import React, { useState } from 'react';

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
                            <input className='max-w-full w-full  h-10 border border-gray-400 focus:border-primary rounded focus:outline-none block px-2 text-sm text-gray-900 focus:ring-blue-500' label="Product Name" />

                            <Select
                                showSearch
                                className='w-full h-10'
                                placeholder="Select Product Group"
                                optionFilterProp="children"
                                onChange={(value) => setFobPrice(value)}
                                // onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={[
                                    {
                                        value: 'Nigeria',
                                        label: 'Nigeria',
                                    },
                                    {
                                        value: 'UK',
                                        label: 'UK',
                                    }
                                ]}
                            />
                            <Select
                                showSearch
                                className='w-full h-10'
                                placeholder="Select Product Group"
                                optionFilterProp="children"
                                onChange={(value) => setFobPrice(value)}
                                // onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={[
                                    {
                                        value: 'Nigeria',
                                        label: 'Nigeria',
                                    },
                                    {
                                        value: 'UK',
                                        label: 'UK',
                                    }
                                ]}
                            />
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