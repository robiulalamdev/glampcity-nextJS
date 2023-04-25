import Image from 'next/image';
import React, { useEffect } from 'react';
import img from '../../../assets/images/future-products-images/img1.png'
import profile from '../../../assets/images/future-products-images/img.png'
import img1 from '../../../assets/images/new-arrival-images/img1.png'
import img3 from '../../../assets/images/new-arrival-images/img3.png'
import img4 from '../../../assets/images/new-arrival-images/img4.png'
import img5 from '../../../assets/images/new-arrival-images/img5.png'
import ProductCard from '../../ProductCards/ProductCard';
import { setVerifiedStores } from '@/Slices/storeSlice';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import bestSeller from '../../../assets/images/product-details/product-images/bestSeller.png'
import StoreCard from '@/components/Commons/StoreCards/StoreCard';
import { setPopularProducts } from '@/Slices/viewProductSlice';

const products = [
    { id: '1556', img: img1, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '2df', img: img3, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '3f44fdsf', img: img3, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '4d4f4s', img: img4, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '5d4f4f', img: img5, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '64fd4', img: img4, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
]

const FutureProducts = () => {
    const { verifiedStores } = useSelector((state) => state.storeSlice)
    const { popularProducts } = useSelector((state) => state.viewProductSlice)
    const dispatch = useDispatch()


    useEffect(() => {
        fetch(`http://localhost:5055/api/store/getVerifiedStores`)
            .then(res => res.json())
            .then(data => {
                dispatch(setVerifiedStores(data));
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5055/api/popular-product`)
            .then(res => res.json())
            .then(data => {
                dispatch(setPopularProducts(data));
            })
    }, [])


    return (
        <section className='mt-32 cursor-pointer'>
            <h1 className='text-gray-900 text-3xl text-center font-semibold mb-5'>Featured Products from <strong>Verified Suppliers</strong></h1>
            <div className='mt-16 md:mt-28'>
                <div className='flex items-center flex-wrap justify-start gap-4 md:gap-8 w-fit'>
                    {
                        verifiedStores && verifiedStores?.map((store, i) => <StoreCard key={i} store={store} />)
                    }
                </div>
                <Link href='/stores' className='flex justify-center items-center bg-primary hover:bg-darkPrimary duration-150 h-14 md:w-60 mt-20 mx-auto'>
                    <button className='text-white font-semibold'>View More</button>
                </Link>
            </div>

            <div className='mt-16'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>

                    <Link href={`/product-list/popular-products`}
                        className='relative col-span-2 md:col-span-1 flex items-center rounded-xl bg-[#FF9F46] px-6 py-3 hover:-translate-y-8 duration-700'>
                        <div className=''>
                            <h1 className='font-bold text-white text-2xl text-center md:text-left '>The Most <br /> Popular Products</h1>
                            <div className='w-36 h-9 mx-auto md:mx-0 bg-white hover:bg-gray-200 duration-150 rounded-[50px] flex justify-center items-center mt-2'>
                                <button className='text-[#FFA048] font-semibold'>View More</button>
                            </div>

                            <h1 className='text-white text-xl text-center md:text-left mt-2'>Upto</h1>
                            <h1 className='text-white font-bold text-5xl text-center md:text-left'>10%</h1>
                            <h1 className='text-white text-xl mt-2 text-center'>Rebate</h1>
                        </div>
                        <Image className='h-52 mx-auto mr-0' src={bestSeller} alt="" />
                    </Link>
                    {
                        popularProducts?.map((product, i) => <ProductCard key={i} product={product} />)
                    }
                </div>
            </div>

        </section>
    );
};

export default FutureProducts;