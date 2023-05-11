import SmallLoader from '@/components/Loaders/SmallLoader';
import ProductCard from '@/components/ProductCards/ProductCard';
import { setIsloading } from '@/Slices/controllerSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import noData from "../../../assets/icons/no-data.png"
import Image from 'next/image';

const ParentByProducts = ({ name }) => {
    const { isLoading } = useSelector((state) => state.controllerSlice)
    const dispatch = useDispatch()
    const [data, setData] = useState([])



    const handleFetchData = (endPoint) => {
        fetch(`http://localhost:5055/api/${endPoint}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                dispatch(setIsloading(false))
            })
    }

    const handleAllProductsOfCTG = () => {
        fetch(`http://localhost:5055/api/products/cat/${name}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                dispatch(setIsloading(false))
            })
    }

    useEffect(() => {
        dispatch(setIsloading(true))
        if (name === 'latest-products') {
            handleFetchData('products/getProducts/latest')
        }
        else if (name === 'popular-products') {
            handleFetchData('popular-product')
        }
        else if (name === 'top-ranking-products') {
            handleFetchData('top-ranking-product')
        }
        else {
            handleAllProductsOfCTG()
        }

    }, [name])

    if (isLoading) {
        return <SmallLoader />
    }

    // console.log(data);

    return (
        <section className='max-w-[1440px] mx-auto px-4 min-h-screen'>
            <div className='rounded-3xl md:p-4 mt-8'>
                <div className='flex justify-between items-center mb-2'>
                    <h1 className='text-gray-900 text-2xl text-left font-bold'>{name} Products</h1>
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
            name: params.name,
        },
    };
}

export default ParentByProducts;