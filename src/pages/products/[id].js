import ProductDetails from '@/components/Product-View-Components/ProductDetails';
import ProductReview from '@/components/Product-View-Components/ProductReview';
import ProductSubmit from '@/components/Product-View-Components/ProductSubmit';
import { setProduct } from '@/Slices/viewProductSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {
    const { isLoading } = useSelector((state) => state.controllerSlice)
    const { product } = useSelector((state) => state.viewProductSlice)
    const dispatch = useDispatch()
    const router = useRouter()
    const id = router.query.id

    useEffect(() => {
        fetch(`http://localhost:5055/api/products/${id}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setProduct(data))
            })

    }, [id])
    return (
        <section>
            <div className='bg-white'>
                <div className='max-w-[1440px] mx-auto px-4 md:px-8'>
                    <ProductReview product={product} />
                    <div className='flex flex-col md:flex-row md:items-center gap-4 mt-16'>
                        <Link href={`/products/${product?._id}`} className='flex justify-center items-center w-full md:w-56 h-14 bg-primary'>
                            <span className='text-xl text-white'>Product details</span>
                        </Link>
                        <Link href='/company-profile' className='flex justify-center items-center w-full md:w-56 h-14 border border-primary'>
                            <span className='text-xl text-primary'>Company profile</span>
                        </Link>
                        <Link href='/buyer-reviews' className='flex justify-center items-center w-full md:w-56 h-14  border border-primary'>
                            <span className='text-xl text-primary'>Buyer Reviews</span>
                        </Link>
                    </div>
                    <hr className='my-6' />

                    <ProductDetails />
                    <ProductSubmit />
                </div>
            </div>
        </section >
    );
};

// export async function getStaticProps({ params }) {
//     // params contains the post `id`.
//     // If the route is like /posts/1, then params.id is 1
//     const res = await fetch(`http://localhost:5055/api/products/${params.id}`)
//     const product = await res.json()

//     // Pass product data to the page via props
//     return { props: { product } }
// }

export default Product;