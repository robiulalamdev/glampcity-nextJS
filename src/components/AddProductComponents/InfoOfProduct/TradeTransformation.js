import { Checkbox, Radio, Select } from 'antd';
import React, { useState } from 'react';

const TradeTransformation = () => {
    const [fobPrice, setFobPrice] = useState("")
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <div>
            <div className='w-full grid grid-cols-1 gap-4'>
                <div className='grid lg:grid-cols-8 items-center gap-2 w-full'>
                    <span className='lg:col-span-1 col-span-2 lg:text-right'>Price Setting: </span>
                    <div className="lg:col-span-7 flex flex-col lg:flex-row lg:gap-4">
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>Set uniform price of FOB</Radio>
                            <Radio value={2}>Set one FOB price</Radio>
                        </Radio.Group>
                    </div>
                </div>


                <div className='grid lg:grid-cols-8 items-start lg:items-center gap-2 w-full'>
                    <span className='lg:col-span-1 lg:text-right'>FOB price</span>
                    <div className='lg:col-span-7 grid lg:grid-cols-4 gap-2' >

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
                                    value: 'Nigeria',
                                    label: 'Nigeria',
                                },
                                {
                                    value: 'UK',
                                    label: 'UK',
                                }
                            ]}
                        />
                        <div className="">
                            <input className='max-w-full w-full bg-white h-10 border border-gray-400 focus:border-primary rounded focus:outline-none block px-2 text-sm text-gray-900 focus:ring-blue-500'
                                type="number" name="" id="" />
                        </div>
                        <div className="">
                            <input className='max-w-full w-full bg-white h-10 border border-gray-400 focus:border-primary rounded focus:outline-none block px-2 text-sm text-gray-900 focus:ring-blue-500'
                                type="number" name="" id="" />
                        </div>
                        <div className="">
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
                    </div>
                </div>

                <div className='grid lg:grid-cols-8 items-center gap-2 w-full'>
                    <span className='lg:col-span-1 col-span-2 lg:text-right'>Payment Option: </span>
                    <div className="lg:col-span-7 flex flex-col lg:flex-row lg:gap-4">
                        <Checkbox>L/C</Checkbox>
                        <Checkbox>D/A</Checkbox>
                        <Checkbox>D/P</Checkbox>
                        <Checkbox>T/T</Checkbox>
                        <Checkbox>Western Union</Checkbox>
                        <Checkbox>Others</Checkbox>
                    </div>
                </div>


            </div>
        </div>
    );
};
export default TradeTransformation;