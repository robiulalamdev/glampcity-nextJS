import { setCartItems, setWishlistItems } from '@/Slices/controllerSlice';
import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import love from '../../../assets/icons/latest-products-icons/love.png'
import love2 from '../../../assets/icons/love.png'

const LatestSignelProduct = ({ product, wishlistItem }) => {
    const { wishlistItems, cartItems } = useSelector((state) => state.controllerSlice)
    const dispatch = useDispatch()

    console.log(wishlistItems);

    const wishlised = wishlistItems.find(w => w.id === product.id)

    const handleWishlistRemove = (id) => {
        const getWishlistItems = wishlistItems.filter(w => w.id !== id)
        dispatch(setWishlistItems(getWishlistItems))
    }
    return (
        <div className='relative w-full mx-auto flex flex-col justify-center items-start gap-2 rounded-xl p-3 bg-white hover:bg-blue-100 hover:shadow hover:shadow-blue-400 duration-300 cursor-pointer mt-6'>
            <div className='relative w-full h-24 md:h-28 overflow-hidden'>
                <Image className='w-full h-24 md:h-28 rounded-xl hover:scale-150 duration-500' src={product.img} alt="" />
                {wishlised ?
                    < Image onClick={() => handleWishlistRemove(product.id)} className='w-8 absolute top-3 right-3' src={love2} alt="" />
                    :
                    < Image onClick={() => dispatch(setWishlistItems([...wishlistItem, product]))} className='w-8 absolute top-3 right-3' src={love} alt="" />
                }
            </div>
            <div className='flex flex-col items-start gap-2'>
                <span className='text-gray-900 text-sm md:text-md font-bold text-left '>{product.title}</span>
                <span className='text-gray-900 text-sm md:text-md font-bold text-left'>₹ {product.price}</span>
                <span className='text-gray-400 text-sm text-left'>{product.description.slice(0, 40) + '...'}</span>
            </div>
            <button onClick={() => dispatch(setCartItems([...cartItems, product]))} className='w-36 lg:w-48 h-7 md:h-9 mx-auto bg-primary flex justify-center items-center rounded-[50px]'>
                <h1 className='text-white font-semibold md:font-bold'>Buy Now</h1>
            </button>

        </div>
    );
};

export default LatestSignelProduct;