import { setShowTabsData } from '@/Slices/createCompanySlice';
import BasicCompanyDetailsTab from '@/components/Create-Company-compo/BasicCompanyDetailsTab';
import BusynessType from '@/components/Create-Company-compo/BusynessType';
import CompanyIntroduction from '@/components/Create-Company-compo/CompanyIntroduction';
import MenufecturingCapablityTab from '@/components/Create-Company-compo/MenufecturingCapablityTab';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CreateCompany = () => {
    const { showForm, showTabsData, busynessTypes } = useSelector((state) => state.createCompanySlice)
    const dispatch = useDispatch()
    // console.log(showForm);
    return (
        <section className='bg-white'>
            <div className='max-w-[1440px] mx-auto px-4 py-12'>
                {
                    showForm === '1' && <BusynessType />
                }
                {
                    showForm === '2' && <div>
                        <h1 className='text-gray-500 font-semibold'>Business type selected: <span className='text-primary'>Other</span></h1>
                        <div className='flex items-center flex-wrap gap-4 mt-6 cursor-pointer'>
                            {
                                busynessTypes?.map(type => (
                                    <div onClick={() => dispatch(setShowTabsData(type?.id))}
                                        className={`h-8 w-fit
                                ${showTabsData === type?.id ? 'border-b border-primary text-primary' : 'border-b border-white text-gray-600'}`}>
                                        <h1 className='font-semibold text-xl'>{type?.title}</h1>
                                    </div>
                                ))
                            }
                        </div>

                        {
                            showTabsData === '1' && <BasicCompanyDetailsTab />
                        }
                        {
                            showTabsData === '2' && <MenufecturingCapablityTab />
                        }
                        {
                            showTabsData === '3' && <CompanyIntroduction />
                        }
                    </div>
                }
            </div>
        </section>
    );
};

export default CreateCompany;

