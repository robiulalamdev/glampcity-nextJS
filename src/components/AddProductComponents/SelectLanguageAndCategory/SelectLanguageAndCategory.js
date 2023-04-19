import { setCategories } from '@/Slices/bannerSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectCategory from './SelectCategory';
import RecentlyUsedCategory from './RecentlyUsedCategory';

const tabs = [
    { id: '1', title: 'Search Categories' },
    { id: '2', title: 'Recently Used Categories' },
]

const SelectLanguageAndCategory = () => {
    const [showTabsData, setShowTabsData] = useState("1")
    const { categories } = useSelector((state) => state.bannerSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`http://localhost:5055/api/category/show`)
            .then(res => res.json())
            .then(data => {
                dispatch(setCategories(data))
            })
    }, [])

    // console.log(categories);

    return (
        <div>
            <div
                className='grid grid-cols-1 gap-4 border border-primary rounded-xl h-fit w-full mt-6 px-2 py-6 md:px-12'>
                <h1 className='text-xl font-bold'>Select Category</h1>
                <div className='flex items-center flex-wrap gap-4 mt-6 cursor-pointer'>
                    {
                        tabs?.map(type => (
                            <div onClick={() => setShowTabsData(type?.id)}
                                className={`h-8 w-fit
                                ${showTabsData === type?.id ? 'border-b border-primary text-primary' : 'border-b border-white text-gray-600'}`}>
                                <h1 className='font-semibold'>{type?.title}</h1>
                            </div>
                        ))
                    }
                </div>
                <div>
                    {showTabsData === "1" && <SelectCategory categories={categories} />}
                    {showTabsData === "2" && <RecentlyUsedCategory categories={categories} />}
                </div>

            </div>
        </div>
    );
};

export default SelectLanguageAndCategory;