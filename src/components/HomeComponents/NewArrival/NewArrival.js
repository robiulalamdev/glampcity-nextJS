import { setNewArrivalProducts } from '@/Slices/viewProductSlice';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import img1 from '../../../assets/images/new-arrival-images/img1.png'
// import img2 from '../../../assets/images/new-arrival-images/img2.png'
// import img3 from '../../../assets/images/new-arrival-images/img3.png'
// import img4 from '../../../assets/images/new-arrival-images/img4.png'
// import img5 from '../../../assets/images/new-arrival-images/img5.png'
// import img6 from '../../../assets/images/new-arrival-images/img6.png'

// const newArrivalProducts = [
//     { id: '1', img: img1, title: 'Nike Shoes - Men', price: 29, },
//     { id: '2', img: img2, title: 'Nike Shoes - Men', price: 29, },
//     { id: '3', img: img3, title: 'Nike Shoes - Men', price: 29, },
//     { id: '4', img: img4, title: 'Nike Shoes - Men', price: 29, },
//     { id: '5', img: img5, title: 'Nike Shoes - Men', price: 29, },
//     { id: '6', img: img6, title: 'Nike Shoes - Men', price: 29, },
// ]

const NewArrival = () => {
    const { newArrivalProducts } = useSelector((state) => state.viewProductSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`http://localhost:5055/api/products/cat/New Arrival`)
            .then(res => res.json())
            .then(data => {
                dispatch(setNewArrivalProducts(data));
            })
    }, [])

    return (
        <div className='bg-secondary rounded-3xl p-4 md:p-7 cursor-pointer'>
            <div className='mb-5 flex justify-between items-center'>
                <h1 className='text-gray-900 text-xl md:text-2xl text-left font-bold'>New Arrival</h1>
                <Link href={`/product-list/New-Arrival`}
                    className='text-primary font-bold hover:text-darkPrimary duration-300'>See All</Link>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    newArrivalProducts?.slice(0, 6)?.map((product, i) => <Link key={i} href={`/products/${product?._id}`}
                        className='flex flex-col justify-center items-center gap-2 rounded-xl pb-2 bg-white
                        hover:bg-blue-100 hover:shadow-xl hover:shadow-purple-100 duration-300'>
                        <div className='w-full h-28 rounded-xl overflow-hidden'>
                            <img className='w-full h-28 object-cover rounded-xl hover:scale-150 duration-500' src={product?.image} alt="" />
                        </div>
                        <div className='flex flex-col justify-start items-start md:justify-center md:items-center gap-2 w-full px-2 duration-300'>
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

export default NewArrival;