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

    console.log(router);

    useEffect(() => {
        dispatch(setIsloading(true))
        fetch(`http://localhost:5055/api/products/cat/${name}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                dispatch(setIsloading(false))
            })
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
            </div>
        </section>
    );
};

export default ParentByProducts;