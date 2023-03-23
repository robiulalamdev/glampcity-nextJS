import ProductDetails from '@/components/Product-View-Components/ProductDetails';
import ProductReview from '@/components/Product-View-Components/ProductReview';
import ProductSubmit from '@/components/Product-View-Components/ProductSubmit';
import SmallTabs from '@/components/TabsComponents/SmallTabs';
import { setProduct } from '@/Slices/viewProductSlice';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {
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
                    <SmallTabs />
                    <hr className='my-6' />

                    <ProductDetails />
                    <ProductSubmit />
                </div>
            </div>
        </section >
    );
};

export default Product;