import InfoOfProduct from '@/components/AddProductComponents/InfoOfProduct/InfoOfProduct';
import WaitApproveProduct from '@/components/AddProductComponents/InfoOfProduct/WaitApproveProduct';
import SelectLanguageAndCategory from '@/components/AddProductComponents/SelectLanguageAndCategory/SelectLanguageAndCategory';
import React, { useState } from 'react';
import { Steps, } from 'antd';

const Addproduct = () => {
    const [selectetdTab, setSelectedTab] = useState(0)

    // console.log(selectetdTab);
    return (
        <main className='max-w-[1440px] mx-auto px-3 md:px-8 mt-12 min-h-screen'>
            <h1 className='text-[#222222] text-3xl font-bold'>Display New Product</h1>


            <Steps className='mt-4'
                current={selectetdTab}
                // progressDot={customDot}
                items={[
                    {
                        title: 'step 1',
                        description: "Select Language Site & Category",
                    },
                    {
                        title: 'step 2',
                        description: "Fill in the marketing information of product",
                    },
                    {
                        title: 'step 3',
                        description: "Waiting for approved",
                    }
                ]}
            />



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