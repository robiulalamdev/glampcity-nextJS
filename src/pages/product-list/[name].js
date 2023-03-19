import CommonProductCard from '@/components/Commons/ProductCards/CommonProductCard';
import LatestSignelProduct from '@/components/HomeComponents/LatestProducts/LatestSignelProduct';
import SmallLoader from '@/components/Loaders/SmallLoader';
import { setIsloading } from '@/Slices/controllerSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ParentByProducts = () => {
    const { isLoading } = useSelector((state) => state.controllerSlice)
    const dispatch = useDispatch()
    const router = useRouter()
    const name = router.query.name?.replaceAll('-', ' ')
    const [data, setData] = useState([])

    // console.log(router);

    const handleLatestProducts = (from, to) => {
        fetch(`http://localhost:5055/api/products/getLatestProducts/${from ? from : 0}/${to ? to : 10}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                dispatch(setIsloading(false))
            })
    }

    const handleAllProductsOfCTG = (from, to) => {
        fetch(`http://localhost:5055/api/products/cat/${name}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                dispatch(setIsloading(false))
            })
    }

    const handlePagination = (from, to) => {
        if (name === 'latest products') {
            handleLatestProducts(from, to)
        }
        else {
            handleAllProductsOfCTG()
        }
    }

    useEffect(() => {
        dispatch(setIsloading(true))
        if (name === 'latest products') {
            handleLatestProducts(0, 10)
        }
        else {
            handleAllProductsOfCTG()
        }

    }, [router])
    // console.log('category name: ', name);

    if (isLoading) {
        return <SmallLoader />
    }

    // console.log(data);

    return (
        <section className='max-w-[1440px] mx-auto px-4'>
            <div className='rounded-3xl md:p-4 mt-8'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-gray-900 text-2xl text-left font-bold'>{name} Products</h1>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3'>

                    {
                        data?.map((product, i) => <CommonProductCard key={i} product={product} />)
                    }
                </div>
                {
                    data.length === 0 && <div className='flex justify-center items-center'>
                        <h1 className='text-center font-bold text-black text-2xl'>No products of {name} Category</h1>
                    </div>
                }


                {/* <div className="flex flex-col items-center mt-12">

                    <span className="text-sm text-gray-700 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">10</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
                    </span>
                    <div className="inline-flex mt-2 xs:mt-0">

                        <button onClick={() => handlePagination(fromNumber, 10 - data.length)}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                            Prev
                        </button>
                        <button onClick={() => handlePagination(data.length, data.length + 10)}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Next
                            <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </div> */}

            </div>
        </section>
    );
};

export default ParentByProducts;