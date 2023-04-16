'use client';
import { setCategories } from '@/Slices/bannerSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import arrow from '../../../assets/icons/banner-icons/right-arrow.png'
import AllCategoriesModal from '../../Modals/CategoriesModals/AllCategoriesModal';
import { categories } from '@/utils/categories';


const Categories = () => {
    const [allCategories, setAllCategories] = useState(null)

    return (
        <div className='lg:col-span-1 cursor-pointer relative'>
            <div>
                <div className='bg-primary h-12 w-full flex justify-center items-center text-white'>
                    <h1 className='font-bold'>Browse Categories</h1>
                </div>
                {
                    categories && categories?.slice(0, 7).map(category => <button
                        key={category._id}
                        className="group w-full relative">
                        <Link
                            href={`/product-list/${category?.slug}`}
                            className=' hover:bg-gray-300 border-b border-x h-12 w-full flex justify-between items-center px-3 text-gray-900'>
                            <h1 className='font-semibold'>{category?.parent}</h1>
                            <Image className="w-2" src={arrow} alt="" />
                        </Link>

                        <div className='hidden group-focus:block group-hover:block z-50 absolute -right-10 bg-white w-full border-t-8 border-t-primary border-b border-x max-h-72 overflow-y-auto'>
                            {
                                category?.children?.map((subCTG, i) => <Link key={i}
                                    href={`/product-list/${category?.slug}/${subCTG?.replaceAll(' ', '-')}`}
                                    className='hover:bg-gray-300 border-b border-x h-12 w-full flex items-center px-3 text-gray-900'>
                                    <h1 className='font-semibold'>{subCTG}</h1>
                                </Link>)
                            }
                        </div>
                    </button>)
                }


                <div onClick={() => setAllCategories(categories)}
                    className='bg-primary hover:bg-darkPrimary duration-300 h-12 w-full flex justify-center items-center text-white'>
                    <h1 className='font-bold'>View all categories</h1>
                </div>

                {
                    allCategories && <AllCategoriesModal allCategories={allCategories}
                        closeModal={setAllCategories} />
                }
            </div>
        </div >
    );
};

export default Categories;

