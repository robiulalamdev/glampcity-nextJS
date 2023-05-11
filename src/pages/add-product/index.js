import InfoOfProduct from '@/components/AddProductComponents/InfoOfProduct/InfoOfProduct';
import WaitApproveProduct from '@/components/AddProductComponents/InfoOfProduct/WaitApproveProduct';
import SelectLanguageAndCategory from '@/components/AddProductComponents/SelectLanguageAndCategory/SelectLanguageAndCategory';
import React, { useState } from 'react';
const Addproduct = () => {
    const [selectetdTab, setSelectedTab] = useState(0)


    return (
        <main className='max-w-[1440px] mx-auto px-3 md:px-8 mt-12 min-h-screen'>
            <h1 className='text-[#222222] text-3xl font-bold'>Display New Product</h1>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-1 w-full mt-4'>

                <div className='relative flex items-center justify-center w-full'>
                    <svg className={`${selectetdTab === 0 ? "text-primary" : "text-[#EEF0FD]"} min-w-full h-fit md:h-20`} viewBox="0 0 450 72" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.5L428.965 1L450 37.5L426.965 72H0V0.5Z" />
                    </svg>
                    <span className={`absolute px-4 py-2 ${selectetdTab === 0 ? "text-white" : "text-gray-900"}`}>Select Language Site & Category</span>
                </div>

                <div className='relative flex items-center justify-center w-full'>
                    <svg className={`${selectetdTab === 1 ? "text-primary" : "text-[#EEF0FD]"} min-w-full h-fit md:h-20`} viewBox="0 0 482 73" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 0H457.43L482 36.5L457.43 73L0 71L23 36.5L2 0Z" />
                    </svg>

                    <span className={`absolute px-4 py-2 ${selectetdTab === 1 ? "text-white" : "text-gray-900"}`}>Fill in the marketing information of product</span>
                </div>

                <div className='relative flex items-center justify-center w-full'>
                    <svg className={`${selectetdTab === 2 ? "text-primary" : "text-[#EEF0FD]"} min-w-full h-fit md:h-20`} viewBox="0 0 458 73" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 0H457.43L457.43 36.5L457.43 73L0 71L23 36.5L2 0Z" />
                    </svg>


                    <span className={`absolute px-4 py-2 ${selectetdTab === 2 ? "text-white" : "text-gray-900"}`}>Waiting for approved</span>
                </div>

            </div>



            {selectetdTab === 0 && <SelectLanguageAndCategory />}
            {selectetdTab === 1 && <InfoOfProduct selectetdTab={selectetdTab} setSelectedTab={setSelectedTab} />}
            {selectetdTab === 2 && <WaitApproveProduct />}

            {
                selectetdTab === 0 && <button onClick={() => setSelectedTab(selectetdTab + 1)} className='flex items-center justify-center w-24 h-10 bg-primary hover:bg-darkPrimary duration-300 text-white rounded mt-8'>
                    <span>Next</span>
                </button>
            }

        </main>
    );
};


export default Addproduct;