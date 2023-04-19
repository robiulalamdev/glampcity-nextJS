import React, { useState } from 'react';
import { Checkbox, Select } from 'antd';

const CategoryInfo = () => {
    const [productGroup, setProductGroup] = useState("")
    const [placeOfOrigin, setPlaceOfOrigin] = useState("")

    console.log(productGroup);
    return (
        <div>
            <div className='w-full grid grid-cols-1 gap-4'>
                <div className='grid lg:grid-cols-8 items-center gap-2 w-full'>
                    <span className='lg:col-span-1 lg:text-right'>Product Name <span className='text-red-500'>*</span></span>
                    <input className='lg:col-span-7 max-w-full w-full  h-10 border border-gray-400 focus:border-primary rounded focus:outline-none block px-2 text-sm text-gray-900 focus:ring-blue-500' label="Product Name" />
                </div>
                <div className='grid lg:grid-cols-8 items-center gap-2 w-full'>
                    <span className='lg:col-span-1 lg:text-right'>Product Keyword <span className='text-red-500'>*</span></span>
                    <input className='lg:col-span-7 max-w-full w-full  h-10 border border-gray-400 focus:border-primary rounded focus:outline-none block px-2 text-sm text-gray-900 focus:ring-blue-500' label="Product Name" />
                </div>
                <div className='grid lg:grid-cols-8 items-center gap-2 w-full'>
                    <span className='lg:col-span-1 lg:text-right'>Product Group</span>
                    <div className="w-72">
                        <Select
                            showSearch
                            className='w-full h-10'
                            placeholder="Select Product Group"
                            optionFilterProp="children"
                            onChange={(value) => setProductGroup(value)}
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
                </div>
            </div>
            <hr className='my-4 border-primary' />

            <div className='w-full grid grid-cols-1 gap-4'>
                <div className='grid grid-cols-8 items-center gap-2 w-full'>
                    <span className='lg:col-span-1 col-span-2 lg:text-right'>style: </span>
                    <span className='text-gray-600'>Fresh</span>
                </div>
                <div className='grid grid-cols-8 items-center gap-2 w-full'>
                    <span className='lg:col-span-1 col-span-2 lg:text-right'>Product Type: </span>
                    <span className='text-gray-600'>Fresh</span>
                </div>
                <div className='grid grid-cols-8 items-center gap-2 w-full'>
                    <span className='lg:col-span-1 col-span-2 lg:text-right'>Type: </span>
                    <span className='text-gray-600'>Fresh</span>
                </div>
                <div className='grid lg:grid-cols-8 items-center gap-2 w-full'>
                    <span className='lg:col-span-1 lg:text-right'>Model Number <span className='text-red-500'>*</span></span>
                    <input className='lg:col-span-7 max-w-full w-full  h-10 border border-gray-400 focus:border-primary rounded focus:outline-none block px-2 text-sm text-gray-900 focus:ring-blue-500' label="Product Name" />
                </div>
                <div className='grid lg:grid-cols-8 items-center gap-2 w-full'>
                    <span className='lg:col-span-1 lg:text-right'>Brand Name <span className='text-red-500'>*</span></span>
                    <input className='lg:col-span-7 max-w-full w-full  h-10 border border-gray-400 focus:border-primary rounded focus:outline-none block px-2 text-sm text-gray-900 focus:ring-blue-500' label="Product Name" />
                </div>
                <div className='grid lg:grid-cols-8 items-center gap-2 w-full'>
                    <span className='lg:col-span-1 lg:text-right'>Place of Origin</span>
                    <div className="w-72">
                        <Select
                            showSearch
                            className='w-full h-10'
                            placeholder="-Select-"
                            optionFilterProp="children"
                            onChange={(value) => setPlaceOfOrigin(value)}
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
                </div>
                <div className='grid grid-cols-8 items-center gap-2 w-full'>
                    <span className='lg:col-span-1 col-span-2 lg:text-right'>Product Details: </span>
                    <span className='w-full col-span-7 text-gray-600'>For the best visual effect, we recommend keeping the image within 750px(width)*800(height) and table width within 750px.</span>
                </div>
                <textarea
                    className='max-w-full w-full h-72 bg-gray-100 focus:border focus:border-primary rounded focus:outline-none block p-2 text-gray-900 focus:ring-blue-500 resize-none'
                    name="" id="" cols="30" rows="10" placeholder='Write Details Here...' >

                </textarea>
            </div>
        </div>
    );
};

export default CategoryInfo;