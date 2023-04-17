import InfoOfProduct from '@/components/AddProductComponents/InfoOfProduct/InfoOfProduct';
import WaitApproveProduct from '@/components/AddProductComponents/InfoOfProduct/WaitApproveProduct';
import SelectLanguageAndCategory from '@/components/AddProductComponents/SelectLanguageAndCategory/SelectLanguageAndCategory';
import { Tab, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
import React, { useState } from 'react';

const data = [
    {
        id: "1",
        label: "Select Language Site & Category",
        value: "Select Language Site & Category",
    },
    {
        id: "2",
        label: "Fill in the marketing information of product",
        value: "Fill in the marketing information of product",
    },
    {
        id: "3",
        label: "Waiting for approved",
        value: "Waiting for approved",
    }
];

const Addproduct = () => {
    const [selectetdTab, setSelectedTab] = useState("1")
    return (
        <main className='max-w-[1440px] mx-auto px-3 md:px-8 mt-12 min-h-screen'>
            <h1 className='text-[#222222] text-3xl font-bold'>Display New Product</h1>

            <Tabs value="html" className="mt-6" >
                <TabsHeader >
                    {data.map(({ id, label }) => (
                        <Tab onClick={() => setSelectedTab(id)} key={id} value={id}
                            className={`${selectetdTab === id && "bg-white"}`} >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {selectetdTab === "1" && <SelectLanguageAndCategory />}
                    {selectetdTab === "2" && <InfoOfProduct />}
                    {selectetdTab === "3" && <WaitApproveProduct />}
                </TabsBody>

            </Tabs>

        </main>
    );
};

export default Addproduct;