import { useAuth } from '@/Hooks/getAuth';
import { setWishlistItems } from '@/Slices/controllerSlice';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import love from '../../assets/icons/latest-products-icons/love.png'
import love2 from '../../assets/icons/love.png'

const ProductCard = ({ product }) => {
    const userInfo = useAuth()
    const { wishlistItems } = useSelector((state) => state.controllerSlice)
    const dispatch = useDispatch()

    const handleGetWishlist = () => {
        fetch(`http://localhost:5055/api/wishlist/${userInfo?._id}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setWishlistItems(data));
            })
    }

    useEffect(() => {
        if (userInfo?._id) {
            handleGetWishlist()
        }
    }, [userInfo?._id])


    const handleWishlistRemove = (id) => {
        fetch(`http://localhost:5055/api/wishlist/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                handleGetWishlist()
                // alert('wishlist Product deleted')
            })
    }

    const handleAddWishlist = (product) => {
        fetch(`http://localhost:5055/api/wishlist`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                productId: product?.productId,
                userId: userInfo?._id,
                sku: product?.sku,
                title: product?.title,
                unit: product?.unit,
                description: product?.description,
                price: product?.price,
                image: product?.image,
            })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                handleGetWishlist()
                // alert('wishlist Product Added')
            })
    }


    const wishlised = wishlistItems.find(p => p?.productId === product?.productId)
    // console.log(wishlised);

    return (
        <div className='relative w-full mx-auto flex flex-col justify-center items-center gap-2 rounded-xl p-2 hover:bg-blue-100 cursor-pointer border hover:shadow-xl hover:shadow-purple-100 duration-300 bg-white mt-6'>
            <div className='relative w-full h-28 overflow-hidden'>
                <img className='w-full h-28 object-cover rounded-xl hover:scale-150 duration-500' src={product?.image} alt="" />
                {wishlised ?
                    <Image onClick={() => handleWishlistRemove(wishlised?._id)}
                        className='w-8 absolute z-10 top-3 right-3 shadow-xl shadow-blue-400 hover:shadow-green-600 rounded-full hover:scale-125 duration-200' src={love2} alt="" />
                    :
                    <Image onClick={() => handleAddWishlist(product)}
                        className='w-8 absolute z-10 top-3 right-3 shadow-xl shadow-blue-400 hover:shadow-green-600 rounded-full hover:scale-125 duration-200' src={love} alt="" />
                }
            </div>
            <Link href={`/products/${product?.productId ? product?.productId : product?._id}`} className='flex flex-col items-start gap-2 px-3'>
                <span className='text-black font-bold text-left hover:text-primary duration-150'>{product?.title}</span>
                <span className='text-gray-900 text-xl font-bold text-left'>₹ {product?.price}</span>
                <span className='text-gray-400 text-sm text-left'>{product?.description?.slice(0, 40) + '...'}</span>
            </Link>
        </div>
    );
};

export default ProductCard;