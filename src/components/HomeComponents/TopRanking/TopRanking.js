import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img1 from '../../../assets/images/top-ranking-images/img1.png'
import img2 from '../../../assets/images/top-ranking-images/img2.png'
import img3 from '../../../assets/images/top-ranking-images/img3.png'
import img4 from '../../../assets/images/top-ranking-images/img4.png'
import img5 from '../../../assets/images/top-ranking-images/img5.png'
import img6 from '../../../assets/images/top-ranking-images/img6.png'

const topRankingProducts = [
    { id: '1', img: img1, title: 'Nike Shoes - Men', price: 29, },
    { id: '2', img: img2, title: 'Nike Shoes - Men', price: 29, },
    { id: '3', img: img3, title: 'Nike Shoes - Men', price: 29, },
    { id: '4', img: img4, title: 'Nike Shoes - Men', price: 29, },
    { id: '5', img: img5, title: 'Nike Shoes - Men', price: 29, },
    { id: '6', img: img6, title: 'Nike Shoes - Men', price: 29, },
]

const TopRanking = () => {
    return (
        <div className='bg-secondary rounded-3xl p-4 md:p-7 cursor-pointer'>
            <div className='mb-5 flex justify-between items-center'>
                <h1 className='text-gray-900 md:text-2xl text-left font-bold'>Top-ranking</h1>
                <Link href='/categories/top-ranking' className='text-primary font-bold'>See All</Link>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    topRankingProducts.map(product => <Link href='/product-view'
                        className='flex flex-col justify-center items-center gap-2 rounded-xl pb-2 bg-white'>
                        <Image className='w-full md:w-52 h-24 md:h-28 rounded-xl' src={product.img} alt="" />
                        <span className='text-gray-900 text-sm font-bold text-center'>{product.title}</span>
                        <span className='text-gray-900 text-sm font-bold text-center'>{product.price}$</span>
                    </Link>
                    )
                }
            </div>

        </div>
    );
};

export default TopRanking;