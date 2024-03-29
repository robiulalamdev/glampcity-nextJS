import { setTopRankingProducts } from '@/Slices/viewProductSlice';
import ProductCard from '@/components/ProductCards/ProductCard';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TopRanking = () => {
    const { topRankingProducts } = useSelector((state) => state.viewProductSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`http://localhost:5055/api/top-ranking-product`)
            .then(res => res.json())
            .then(data => {
                dispatch(setTopRankingProducts(data));
            })
    }, [])
    return (
        <div className='bg-secondary md:rounded-3xl md:p-7 cursor-pointer'>
            <div className='mb-5 flex justify-between items-center'>
                <h1 className='text-gray-900 text-xl md:text-2xl text-left font-bold'>Top Ranking</h1>
                <Link href='/product-list/top-ranking-products' className='text-primary hover:text-darkPrimary duration-300 font-bold'>See All</Link>
            </div>

            <div className='grid grid-cols-2 gap-3'>
                {
                    topRankingProducts?.slice(0, 4)?.map((product, i) => <ProductCard key={i} product={product} />)
                }
            </div>

        </div>
    );
};

export default TopRanking;