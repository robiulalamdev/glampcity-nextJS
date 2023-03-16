'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import arrow from '../../../assets/icons/banner-icons/right-arrow.png'

const AllCategoriesModal = ({ allCategories, closeModal }) => {
    // console.log(allCategories);

    let modalRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!modalRef.current.contains(e.target)) {
                closeModal(null);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <div
            class="h-screen w-full fixed top-0 left-0 right-0 z-40 flex items-center justify-center bg-modal bg-opacity-80 bg-gray-900">
            <div ref={modalRef} className='h-full w-full md:h-fit md:w-[600px] mx-auto bg-white shadow border border-blue-600'>
                <div className='min-h-[300px] max-h-[420px] overflow-y-auto'>
                    <div className='bg-primary h-12 w-full flex justify-center items-center text-white'>
                        <h1 className='font-bold'>Browse Categories</h1>
                    </div>
                    {
                        allCategories && allCategories?.map(category => <Link href={`/categories/${category?.parent?.toLowerCase()}`}
                            className="group relative w-full">
                            <div className=' hover:bg-gray-300 border-b border-x h-12 w-full flex justify-between items-center px-3 text-gray-900'>
                                <h1 className='font-semibold'>{category?.parent}</h1>
                                <Image className="w-2" src={arrow} alt="" />
                            </div>

                            <div
                                className='hidden group-focus:block group-hover:block z-50 absolute right-10 bg-white w-72 border-t-8 border-t-primary border-b border-x shadow max-h-72 overflow-y-auto'>
                                {
                                    category?.children?.map(subCTG => <Link
                                        href={`/categories/${category?.parent?.toLowerCase()}/${subCTG?.toLowerCase()}`}
                                        className='hover:bg-gray-300 border-b border-x h-12 w-full flex items-center px-3 text-gray-900'>
                                        <h1 className='font-semibold'>{subCTG}</h1>
                                    </Link>)
                                }
                            </div>
                        </Link>)
                    }
                </div>
                <button onClick={() => closeModal(null)} className='bg-primary h-12 w-full flex justify-center items-center text-white'>
                    <h1 className='font-bold'>Close</h1>
                </button>
            </div>
        </div>
    );
};

export default AllCategoriesModal;