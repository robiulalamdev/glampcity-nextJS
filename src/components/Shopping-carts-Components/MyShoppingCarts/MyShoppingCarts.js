import React, { useContext, useEffect } from 'react';
import blueRight from '../../.././assets/icons/shopping-cart-icons/blue-right.png'
import img4 from '../../../assets/images/product-details/product-images/img4.png'
import img1 from '../../../assets/images/product-details/product-images/img1.png'
import img2 from '../../../assets/images/product-details/product-images/img2.png'
import img3 from '../../../assets/images/product-details/product-images/img3.png'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '@/Slices/controllerSlice';
import MyShoppingCard from './MyShoppingCard';
import CalculateProducts from './CalculateProducts';
import { AuthContext } from '@/ContextAPI/AuthProvider';

const MyShoppingCarts = ({ nextHandle }) => {
    const { cartItems } = useSelector((state) => state.controllerSlice)
    const { user, userRefetch } = useContext(AuthContext)
    const dispatch = useDispatch()

    const nexPermit = (data) => {
        nextHandle(data)
    }


    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach((product) => {
            totalPrice += product.price;
        });
        return totalPrice;
    };


    const handleGetCartProducts = () => {
        fetch(`http://localhost:5055/api/cartProduct/${user?._id}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setCartItems(data));
            })
    }


    useEffect(() => {
        if (user?._id) {
            handleGetCartProducts()
        }
    }, [user?._id])


    const handleCartProductRemove = (id) => {
        console.log(id);
        fetch(`http://localhost:5055/api/cartProduct/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                handleGetCartProducts()
            })
    }


    return (
        <section className='min-h-screen mt-16'>
            <div className='flex items-center gap-4 mb-4'>
                <Image className='w-6' src={blueRight} alt="" />
                <p className='text-[#4CAF50] text-sm md:text-xl font-semibold'>{cartItems?.length} new item(s) have been added to your cart</p>
            </div>

            <div>
                <div className='w-full grid lg:grid-cols-3 gap-5'>
                    <div className=' md:col-span-2 grid grid-cols-1 gap-4' >
                        {
                            cartItems && cartItems?.map((item, i) => <MyShoppingCard key={i} data={item}
                                handleRemove={handleCartProductRemove} />)
                        }
                    </div>
                    <div className='w-full lg:col-span-1 border rounded-md text-left p-4'>
                        <h1 className='text-black font-semibold text-xl'>My Shopping Cart <span className='text-gray-500 text-sm'>({cartItems?.length} items)</span></h1>

                        <CalculateProducts />

                        <div className='flex justify-center items-center gap-8 mt-4'>
                            <button className='flex justify-center items-center w-full md:w-56 h-12 rounded-[50px] border border-primary'>
                                <span className='text-primary uppercase text-xl'>GO TO CART</span>
                            </button>
                            <button onClick={() => nexPermit(2)} className='flex justify-center items-center w-full md:w-56 h-12 rounded-[50px] bg-primary'>
                                <span className='text-white uppercase text-xl'>Checkout</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='mt-8 py-4'>
                    <h1 className='text-2xl text-black font-semibold text-left mb-4'>Just for you</h1>

                    <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        <div className=''>
                            <Image className='w-full h-56' src={img1} alt="" />
                            <div className='p-2 border-b border-x rounded-b-md border-[#0029FF4D]'>
                                <h1 className='text-xl text-black text-left mb-2'>Trending product 2023 new arrival</h1>
                                <p className='font-semibold text-xl text-black text-left'><strong>$</strong>10.50</p>
                            </div>
                        </div>
                        <div className=''>
                            <Image className='w-full h-56' src={img2} alt="" />
                            <div className='p-2 border-b border-x rounded-b-md border-[#0029FF4D]'>
                                <h1 className='text-xl text-black text-left mb-2'>Trending product 2023 new arrival</h1>
                                <p className='font-semibold text-xl text-black text-left'><strong>$</strong>10.50</p>
                            </div>
                        </div>
                        <div className=''>
                            <Image className='w-full h-56' src={img3} alt="" />
                            <div className='p-2 border-b border-x rounded-b-md border-[#0029FF4D]'>
                                <h1 className='text-xl text-black text-left mb-2'>Trending product 2023 new arrival</h1>
                                <p className='font-semibold text-xl text-black text-left'><strong>$</strong>10.50</p>
                            </div>
                        </div>
                        <div className=''>
                            <Image className='w-full h-56' src={img4} alt="" />
                            <div className='p-2 border-b border-x rounded-b-md border-[#0029FF4D]'>
                                <h1 className='text-xl text-black text-left mb-2'>Trending product 2023 new arrival</h1>
                                <p className='font-semibold text-xl text-black text-left'><strong>$</strong>10.50</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyShoppingCarts;