import { setCategories } from '@/Slices/bannerSlice';
import React, { useEffect, useState } from 'react';

const SelectCategory = ({ categories }) => {
    const [results, setResults] = useState(null)

    console.log(categories);

    const handleSearch = (e) => {
        const results = categories.filter((ctg) => ctg?.parent.toLowerCase().includes(e.toLowerCase()))
        setResults(results)
    }

    return (
        <div className='bg-white p-2 rounded shadow w-full md:max-w-md'>

            <div>
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input onChange={(e) => handleSearch(e.target.value)} type="search" id="default-search" class="max-w-full w-full  h-12 px-3 border border-blue-400 focus:border-primary rounded focus:outline-none block p-4 pl-10 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500" placeholder="Search Mockups, Logos..." required />

                </div>
            </div>

            <div className='grid grid-cols-1 max-h-96 overflow-y-auto mt-4' >
                {
                    results?.map((ctg, i) => (
                        <div className='w-full h-10 border-b flex items-center justify-start cursor-pointer hover:bg-primary hover:text-white px-4'>
                            <span>{ctg?.parent}</span>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default SelectCategory;