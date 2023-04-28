import { setIsloading } from '@/Slices/controllerSlice';
import SmallLoader from '@/components/Loaders/SmallLoader';
import ProductCard from '@/components/ProductCards/ProductCard';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import noData from "../../../../assets/icons/no-data.png"
import Image from 'next/image';

const ChildrenByProducts = ({ path }) => {
    const { isLoading } = useSelector((state) => state.controllerSlice)

    const dispatch = useDispatch()
    const [data, setData] = useState([])
    console.log(data);


    const handleAllProductsOfCTG = () => {
        fetch(`http://localhost:5055/api/products/cat/${path?.name}/${path?.children}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                dispatch(setIsloading(false))
            })
    }


    useEffect(() => {
        dispatch(setIsloading(true))
        handleAllProductsOfCTG()

    }, [path])

    if (isLoading) {
        return <SmallLoader />
    }

    return (
        <section className='max-w-[1440px] mx-auto px-4 min-h-screen'>
            <div className='rounded-3xl md:p-4 mt-8'>
                <div className='flex justify-between items-center mb-2'>
                    {/* <h1 className='text-gray-900 text-2xl text-left font-bold'>{path?.name} Products</h1> */}
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
                    {
                        data?.map((product, i) => <ProductCard key={i} product={product} />)
                    }
                </div>
                {
                    data.length === 0 && <div className='flex flex-col items-center'>
                        <Image className='w-60 md:w-96' src={noData} alt="" />
                        <span className='text-center font-bold' >No Products</span>
                    </div>
                }
            </div>
        </section>
    );
};


export async function getServerSideProps({ params }) {
    return {
        props: {
            path: params,
        },
    };
}

export default ChildrenByProducts;