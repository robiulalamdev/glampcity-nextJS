import { useAuth } from '@/Hooks/getAuth';
import { setWishlistItems } from '@/Slices/controllerSlice';
import Image from 'next/image';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import love from '../../assets/icons/latest-products-icons/love.png'
import love2 from '../../assets/icons/love.png'
import { useRouter } from 'next/router';
import { AuthContext } from '@/ContextAPI/AuthProvider';
import Link from 'next/link';
import ProductImageCorousel from './ProductImageCorousel';

const ProductCard = ({ product }) => {
    const { user } = useContext(AuthContext)
    const { wishlistItems } = useSelector((state) => state.controllerSlice)
    const router = useRouter()
    const dispatch = useDispatch()

    const handleGetWishlist = () => {
        fetch(`https://server.theglampcity.com/api/wishlist/${user?._id}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setWishlistItems(data));
            })
    }

    useEffect(() => {
        if (user?._id) {
            handleGetWishlist()
        }
    }, [user?._id])


    const handleWishlistRemove = (id) => {
        if (user?._id) {
            fetch(`https://server.theglampcity.com/api/wishlist/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    handleGetWishlist()
                    // alert('wishlist Product deleted')
                })
        }
        else {
            router.push("/login")
        }
    }

    const handleAddWishlist = (productData) => {
        const wishlistProduct = {
            productId: productData?.productId ? productData?.productId : product?._id,
            userId: user?._id,
            title: productData?.title,
            description: productData?.description,
            price: productData?.price,
            images: productData?.images,
        }
        console.log(wishlistProduct);

        if (user?._id) {
            fetch(`https://server.theglampcity.com/api/wishlist`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(wishlistProduct)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    handleGetWishlist()
                    // alert('wishlist Product Added')
                })
        }
        else {
            router.push("/login")
        }
    }


    const wishlised = product?.productId ? wishlistItems.find(p => p?.productId === product?.productId) : wishlistItems.find(p => p?.productId === product?._id)
    // console.log(wishlised);

    return (
        // <div className='relative w-full mx-auto flex flex-col justify-center items-center gap-2 rounded-xl p-2 hover:bg-blue-100 cursor-pointer border hover:shadow-xl hover:shadow-purple-100 duration-300 bg-white mt-6'>
        //     <div className='relative w-full h-28 overflow-hidden'>
        //         <img className='w-full h-28 object-cover rounded-xl hover:scale-150 duration-500' src={product?.image} alt="" />
        //         {wishlised ?
        //             <Image onClick={() => handleWishlistRemove(wishlised?._id)}
        //                 className='w-8 absolute z-10 top-3 right-3 shadow-xl shadow-blue-400 hover:shadow-green-600 rounded-full hover:scale-125 duration-200' src={love2} alt="" />
        //             :
        //             <Image onClick={() => handleAddWishlist(product)}
        //                 className='w-8 absolute z-10 top-3 right-3 shadow-xl shadow-blue-400 hover:shadow-green-600 rounded-full hover:scale-125 duration-200' src={love} alt="" />
        //         }
        //     </div>
        //     <Link href={`/products/${product?.productId ? product?.productId : product?._id}`} className='flex flex-col items-start gap-2 px-3'>
        //         <span className='text-black font-bold text-left hover:text-primary duration-150'>{product?.title}</span>
        //         <span className='text-gray-900 text-xl font-bold text-left'>₹ {product?.price}</span>
        //         <span className='text-gray-400 text-sm text-left'>{product?.description?.slice(0, 40) + '...'}</span>
        //     </Link>
        // </div>


        <div className="border border-gray-600/20 bg-white" id='box-shadow' >
            <div className='relative w-full h-40 overflow-hidden bg-slate-200 group'>
                <ProductImageCorousel images={product?.images} />
                {wishlised ?
                    <Image onClick={() => handleWishlistRemove(wishlised?._id)}
                        className='w-8 absolute z-10 top-3 right-3 shadow-xl shadow-blue-400 hover:shadow-green-600 rounded-full hover:scale-125 duration-200 cursor-pointer' src={love2} alt="" />
                    :
                    <Image onClick={() => handleAddWishlist(product)}
                        className='w-8 absolute z-10 top-3 right-3 shadow-xl shadow-blue-400 hover:shadow-green-600 rounded-full hover:scale-125 duration-200 cursor-pointer' src={love} alt="" />
                }
            </div>

            <Link href={`/products/${product?.productId ? product?.productId : product?._id}`}
                className="grid grid-cols-1 gap-2 p-3">
                <div className="flex flex-col-reverse justify-start md:flex-row md:items-center md:justify-between">
                    <h1 className="flex-grow font-bold text-gray-800 md:text-[18px]">{product?.title.slice(0, 30)}</h1>
                    <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-yellow-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>
                        <span className="text-sm text-gray-900">5.0</span>
                    </div>
                </div>
                <p className="text-sm text-gray-500 hidden md:block">{product?.description.slice(0, 100) + "..."}</p>
                <p className="text-sm text-gray-500 md:hidden">{product?.description.slice(0, 60) + "..."}</p>

                <div className='flex items-center justify-between'>
                    <h1 className='text-gray-800 text-2xl font-bold text-left'>₹ {product?.price}</h1>

                    <button
                        className="flex flex-row items-center gap-2 hover:text-primary">
                        <span>See More</span>
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;