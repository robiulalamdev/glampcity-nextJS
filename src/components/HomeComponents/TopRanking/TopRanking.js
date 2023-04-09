import { setTopRankingProducts } from '@/Slices/viewProductSlice';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TopRanking = () => {
    const { topRankingProducts } = useSelector((state) => state.viewProductSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`https://heylink.ahmadalanazi.com/api/top-ranking-product`)
            .then(res => res.json())
            .then(data => {
                dispatch(setTopRankingProducts(data));
            })
    }, [])
    return (
        <div className='bg-secondary rounded-3xl p-4 md:p-7 cursor-pointer'>
            <div className='mb-5 flex justify-between items-center'>
                <h1 className='text-gray-900 text-xl md:text-2xl text-left font-bold'>Top Ranking</h1>
                <Link href='/product-list/top-ranking-products' className='text-primary hover:text-darkPrimary duration-300 font-bold'>See All</Link>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    topRankingProducts?.slice(0, 6)?.map((product, i) => <Link key={i}
                        href={`/products/${product?.productId}`}
                        className='flex flex-col items-center gap-2 border rounded-xl pb-2 bg-white
                        hover:bg-blue-100 hover:shadow-xl hover:shadow-purple-100 duration-300'>
                        <div className='w-full h-28 rounded-xl overflow-hidden'>
                            <img className='w-full h-28 object-cover rounded-xl hover:scale-150 duration-500' src={product.image} alt="" />
                        </div>
                        <div className='flex flex-col justify-start items-start md:justify-center md:items-center gap-2 w-full px-2'>
                            <span className='text-gray-900 font-bold'>{product.title}</span>
                            <span className='text-gray-900 text-sm font-bold'>{product.price}$</span>
                        </div>
                    </Link>
                    )
                }
            </div>

        </div>
    );
};

export default TopRanking;