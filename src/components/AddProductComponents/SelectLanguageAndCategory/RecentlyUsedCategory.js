import { setCategories } from '@/Slices/bannerSlice';
import React, { useEffect, useState } from 'react';

const RecentlyUsedCategory = ({ categories }) => {
    const [results, setResults] = useState(null)

    return (
        <div className='bg-white p-2 rounded shadow w-full md:max-w-md'>

            <div className='grid grid-cols-1 max-h-96 overflow-y-auto' >
                {
                    categories?.map((ctg, i) => (
                        <div className='w-full h-10 border-b flex items-center justify-start cursor-pointer hover:bg-primary hover:text-white px-4'>
                            <span>{ctg?.parent}</span>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default RecentlyUsedCategory;