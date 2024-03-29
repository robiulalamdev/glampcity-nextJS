import { setCartItems, setWishlistItems } from '@/Slices/controllerSlice';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import love from '../../../assets/icons/latest-products-icons/love.png'
import love2 from '../../../assets/icons/love.png'
import { useRouter } from 'next/router';
import { AuthContext } from '@/ContextAPI/AuthProvider';

const CommonProductCard = ({ product, action }) => {
    const { user } = useContext(AuthContext)
    const { wishlistItems } = useSelector((state) => state.controllerSlice)
    const router = useRouter()
    const dispatch = useDispatch()

    const handleGetWishlist = () => {
        fetch(`http://localhost:5055/api/wishlist/${user?._id}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setWishlistItems(data));
            })
    }

    useEffect(() => {
        if (user?._id) {
            // console.log('user data asce', user?._id);
            handleGetWishlist()
        }
    }, [user?._id])

    // get cart products
    const handleGetCartProducts = () => {
        fetch(`http://localhost:5055/api/cartProduct/${user?._id}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setCartItems(data));
            })
    }


    const handleWishlistRemove = (id) => {
        if (user?._id) {
            fetch(`http://localhost:5055/api/wishlist/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    handleGetWishlist()
                })
        }
        else {
            router.push("/login")
        }
    }

    const handleAddWishlist = (product) => {
        if (user?._id) {
            fetch(`http://localhost:5055/api/wishlist`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    productId: product?._id,
                    userId: user?._id,
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
                })
        }
        else {
            router.push("/login")
        }
    }

    // add to cart product
    const handleAddToCart = (product) => {
        if (user?._id) {
            fetch(`http://localhost:5055/api/cartProduct`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    productId: product?._id,
                    userId: user?._id,
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
                    handleGetCartProducts()
                })
        }
        else {
            router.push("/login")
        }
    }


    const wishlised = wishlistItems.find(p => p?.productId === product?._id)

    return (
        <div className='relative w-full mx-auto flex flex-col justify-center items-start gap-2 rounded-xl p-3 border hover:bg-blue-100 hover:shadow-xl hover:shadow-purple-100 duration-300 cursor-pointer mt-6'>
            <div className='relative w-full h-28 overflow-hidden'>

                {
                    product?.image ? <img className='w-full h-28 rounded-xl hover:scale-150 duration-500' src="https://media.glampinghub.com/CACHE/images/accommodations/elegant-tent-for-jungle-getaway-in-bali-indonesia-1532512274167/e58cc460603e3de2336c06d7f6aee50b.JPG" alt="" />
                        :
                        <Image className='w-full h-28 rounded-xl hover:scale-150 duration-500' src={product.img} alt="" />
                }
                {wishlised ?
                    < Image onClick={() => handleWishlistRemove(wishlised?._id)}
                        className='w-8 shadow-xl shadow-blue-400 hover:shadow-green-600 rounded-full absolute top-3 right-3 hover:scale-125 duration-200' src={love2} alt="" />
                    :
                    < Image onClick={() => handleAddWishlist(product)}
                        className='w-8 shadow-xl shadow-blue-400 hover:shadow-green-600 rounded-full absolute top-3 right-3 hover:scale-125 duration-200' src={love} alt="" />
                }
            </div>
            <Link href={`/products/${action === 'popular-product' ? product?.productId : product?._id}`} className='flex flex-col items-start gap-2'>
                <span className='text-black font-bold text-left hover:text-primary duration-150'>{product.title}</span>
                <span className='text-gray-900 text-xl font-bold text-left'>₹ {product.price}</span>
                <span className='text-gray-400 text-sm text-left'>{product.description?.slice(0, 40) + '...'}</span>
            </Link>
            <button onClick={() => handleAddToCart(product)} className='w-36 lg:w-48 h-7 md:h-9 mx-auto bg-primary hover:bg-darkPrimary duration-150 flex justify-center items-center rounded-[50px]'>
                <h1 className='text-white font-semibold md:font-bold'>Buy Now</h1>
            </button>

        </div>
    );
};

export default CommonProductCard;