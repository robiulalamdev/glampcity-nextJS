import { setProduct } from '@/Slices/viewProductSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductReview from '@/components/Product-View-Components/ProductReview';
// import SmallTabs from '@/components/TabsComponents/SmallTabs';
import ProductDetails from '@/components/Product-View-Components/ProductDetails';
import ProductSubmit from '@/components/Product-View-Components/ProductSubmit';
import CompanyProfile from '@/components/Company-Profile-Components/company-profile/CompanyProfile';
import BuyerReview from '@/components/buyer-reviews/BuyerReview';
import Link from 'next/link';

const items = ["Product Details", "Company profile", "Buyer Reviews"]

const Product = ({ id }) => {
    const { product } = useSelector((state) => state.viewProductSlice)
    const dispatch = useDispatch()

    const [selectedData, setSelectedData] = useState("Product Details")

    // console.log(id);

    useEffect(() => {
        if (id) {
            fetch(`https://server.theglampcity.com/api/products/${id}`)
                .then(res => res.json())
                .then(data => {
                    dispatch(setProduct(data))
                })
        }

    }, [id])
    return (
        <section>
            <div className='bg-white'>
                <div className='max-w-[1440px] mx-auto px-2 md:px-8 pb-12'>
                    <ProductReview product={product} />

                    <div className='flex flex-col md:flex-row md:items-center gap-4 my-6'>
                        {
                            items?.map((item, i) => (
                                <button onClick={() => setSelectedData(item)}
                                    className={`flex justify-center items-center w-full md:w-56 h-12 border rounded-md  
                    ${selectedData === item ? 'bg-primary text-white' : 'text-primary border-primary hover:bg-blue-400 hover:text-white duration-300'}`}>
                                    <span className='text-xl font-semibold'>{item}</span>
                                </button>
                            ))
                        }

                        <Link href="/order-refunds"
                            className={`flex justify-center items-center w-full md:w-56 h-12 border rounded-md  
                            text-primary border-primary hover:bg-blue-400 hover:text-white duration-300`}>
                            <span className='text-xl font-semibold'>Order Refunds</span>
                        </Link>

                    </div>


                    {selectedData === "Product Details" && <ProductDetails />}
                    {selectedData === "Company profile" && <CompanyProfile />}
                    {selectedData === "Buyer Reviews" && <BuyerReview />}
                </div>
            </div>
        </section >
    );
};

export async function getServerSideProps({ params }) {
    return {
        props: {
            id: params.id,
        },
    };
}

export default Product;