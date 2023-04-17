import React from 'react';
import CategoryInfo from './CategoryInfo';
import TradeTransformation from './TradeTransformation';
import LogisticsInformation from './LogisticsInformation';
import { Button, Checkbox } from '@material-tailwind/react';

const InfoOfProduct = () => {
    return (
        <div className=' w-full mb-8'>
            <div className='grid grid-cols-1 gap-4 w-full'>
                <div className='grid grid-cols-1 gap-4 border border-primary rounded-xl h-fit w-full mt-6 px-2 py-6 md:px-12'>
                    <h1 className='text-xl font-bold'>Select Category</h1>
                    <CategoryInfo />
                </div>
                <div className='grid grid-cols-1 gap-4 border border-primary rounded-xl h-fit w-full mt-6 px-2 py-6 md:px-12'>
                    <h1 className='text-xl font-bold'>Trade Transformation</h1>
                    <TradeTransformation />
                </div>
                <div className='grid grid-cols-1 gap-4 border border-primary rounded-xl h-fit w-full mt-6 px-2 py-6 md:px-12'>
                    <h1 className='text-xl font-bold'>Logistics Information</h1>
                    <LogisticsInformation />
                </div>
            </div>

            <div>
                <Checkbox label="*Please double check and confirm your submitted information does not violatr anyand all listing related policies before submission." />

                <div className='flex items-center gap-6 mt-4'>
                    <Button className='w-24 h-8 bg-primary hover:bg-darkPrimary duration-300 flex justify-center items-center rounded'>
                        <h1 className='text-white font-semibold'>Submit</h1>
                    </Button>
                    <Button className='w-24 h-8 border border-[#0029FF] bg-white duration-300 flex justify-center items-center rounded'>
                        <h1 className='text-primary font-semibold'>Preview</h1>
                    </Button>
                    <Button className='w-24 h-8 border border-[#0029FF] bg-white duration-300 flex justify-center items-center rounded'>
                        <h1 className='text-primary font-semibold'>Save</h1>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default InfoOfProduct;