import CompanyOverview from '@/components/Company-Profile-Components/CompanyOverview';
import ProductCapacity from '@/components/Company-Profile-Components/ProductCapacity';
import RDCapacity from '@/components/Company-Profile-Components/RDCapacity/RDCapacity';
import SendMessageSupplier from '@/components/Company-Profile-Components/SendMessageSupplier';
import TradeCapabilities from '@/components/Company-Profile-Components/TradeCapablities/TradeCapabilities';
import ProductReview from '@/components/Product-View-Components/ProductReview';
import React from 'react';

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

const CompanyProfile = () => {
    return (
        <section className=''>
            <div className='bg-white'>
                <div className='max-w-[1440px] mx-auto px-4 md:px-8'>
                    <ProductReview product={product} />
                    <CompanyOverview />
                    <ProductCapacity />
                    <RDCapacity />
                    <TradeCapabilities />
                    <SendMessageSupplier />
                </div>
            </div>
        </section>
    );
};

export default CompanyProfile;