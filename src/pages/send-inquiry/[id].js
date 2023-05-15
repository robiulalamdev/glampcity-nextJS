import { setProduct } from '@/Slices/viewProductSlice';
import SendInquiry from '@/components/Messages-Components/SendInquiry/SendInquiry';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SendInquiryById = ({ id }) => {
    const { product } = useSelector((state) => state.viewProductSlice)
    const dispatch = useDispatch()

    const [storeData, setStoreData] = useState(null)

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5055/api/products/${id}`)
                .then(res => res.json())
                .then(data => {
                    dispatch(setProduct(data))
                })
        }

    }, [id])

    useEffect(() => {
        fetch(`http://localhost:5055/api/store/${product?.storeId}`)
            .then(res => res.json())
            .then(data => {
                setStoreData(data)
            })
    }, [id, product])

    console.log(product);
    console.log(storeData);

    return (
        <section className='bg-white'>
            <div className='max-w-[1440px] mx-auto px-3 md:px-8'>
                <SendInquiry store={storeData} product={product} />
            </div>
        </section>
    );
};

export async function getServerSideProps({ params }) {
    return {
        props: {
            id: params.id,
        },
    };
}


export default SendInquiryById;