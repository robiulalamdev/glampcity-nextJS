import ProductDetails from '@/components/Product-View-Components/ProductDetails';
import ProductReview from '@/components/Product-View-Components/ProductReview';
import ProductSubmit from '@/components/Product-View-Components/ProductSubmit';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Product = () => {
    const location = useRouter()
    return (
        <section>
            <div className='bg-white'>
                <div className='max-w-[1440px] mx-auto px-4 md:px-8'>
                    <ProductReview />
                    <div className='flex flex-col md:flex-row md:items-center gap-4 mt-16'>
                        <Link href='/product-details' className='flex justify-center items-center w-full md:w-56 h-14 bg-primary'>
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

export default Product;