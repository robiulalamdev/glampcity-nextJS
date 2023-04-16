import ProductDetails from '@/components/Product-View-Components/ProductDetails';
import ProductReview from '@/components/Product-View-Components/ProductReview';
import ProductSubmit from '@/components/Product-View-Components/ProductSubmit';
import SmallTabs from '@/components/TabsComponents/SmallTabs';
import { setProduct } from '@/Slices/viewProductSlice';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { prodcuts } from '@/utils/products';

const product = {
    "price": 0,
    "flashSale": false,
    "status": "Show",
    "_id": "641b36c144fa7ab0e89f7ea7",
    "title": "Savlon Soap",
    "slug": "new-arrival",
    "parent": "New Arrival",
    "children": "Bath",
    "image": "https://i.ibb.co/XL8Dmw5/Savlon-Fresh-Antiseptic-Soap-100-Gm.jpg",
    "discount": 0,
    "unit": "100gm",
    "quantity": 100,
    "type": "Health Care",
    "tag": [
        "bath",
        "soap"
    ],
    "description": "bathroom accessories are items specifically designed for use in a bathroom, such as soap dishes, towel racks, etc. bathroom accessories accessories typically have durable, decorative finishes."
}

const Product = () => {
    const router = useRouter()


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