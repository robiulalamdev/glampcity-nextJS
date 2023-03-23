import { useAuth } from '@/Hooks/getAuth';
import { setCartItems, setWishlistItems } from '@/Slices/controllerSlice';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import love from '../../../assets/icons/latest-products-icons/love.png'
import love2 from '../../../assets/icons/love.png'

const CommonProductCard = ({ product }) => {
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


    const handleWishlistRemove = (id) => {
        alert('wishlist delete redy')
        fetch(`http://localhost:5055/api/wishlist/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                handleGetWishlist()
            })
    }

    const handleAddWishlist = (product) => {
        alert('wishlist added redy')
        fetch(`http://localhost:5055/api/wishlist`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                productId: product?._id,
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
                console.log(data);
                handleGetWishlist()
            })
    }

    useEffect(() => {
        if (userInfo?._id) {
            handleGetWishlist()
        }
    }, [])

    const wishlised = wishlistItems.find(p => p?.productId === product?._id)
    return (
        <Link href={`/products/${product?._id}`} className='relative w-full mx-auto flex flex-col justify-center items-start gap-2 rounded-xl p-3 border hover:bg-blue-100 hover:shadow-xl hover:shadow-purple-100 duration-300 cursor-pointer mt-6'>
            <div className='relative w-full h-28 overflow-hidden'>

                {
                    product?.image ? <img className='w-full h-28 rounded-xl hover:scale-150 duration-500' src={product?.image} alt="" />
                        :
                        <Image className='w-full h-28 rounded-xl hover:scale-150 duration-500' src={product.img} alt="" />
                }
                {wishlised ?
                    < Image onClick={() => handleWishlistRemove(wishlised?.productId)}
                        className='w-8 shadow-xl shadow-blue-400 hover:shadow-green-600 rounded-full absolute top-3 right-3 hover:scale-125 duration-200' src={love2} alt="" />
                    :
                    < Image onClick={() => handleAddWishlist(product)}
                        className='w-8 shadow-xl shadow-blue-400 hover:shadow-green-600 rounded-full absolute top-3 right-3 hover:scale-125 duration-200' src={love} alt="" />
                }
            </div>
            <div className='flex flex-col items-start gap-2'>
                <span className='text-gray-900 text-sm md:text-md font-bold text-left '>{product.title}</span>
                <span className='text-gray-900 text-sm md:text-md font-bold text-left'>₹ {product.price}</span>
                <span className='text-gray-400 text-sm text-left'>{product.description?.slice(0, 40) + '...'}</span>
            </div>
            <button onClick={() => dispatch(setCartItems([...cartItems, product]))} className='w-36 lg:w-48 h-7 md:h-9 mx-auto bg-primary hover:bg-darkPrimary duration-150 flex justify-center items-center rounded-[50px]'>
                <h1 className='text-white font-semibold md:font-bold'>Buy Now</h1>
            </button>

        </Link>
    );
};

export default CommonProductCard;