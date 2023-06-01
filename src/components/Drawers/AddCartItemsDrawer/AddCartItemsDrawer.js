import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems, setOpenAddCartItemsSidebar } from '@/Slices/controllerSlice';
import Link from 'next/link';
import { AuthContext } from '@/ContextAPI/AuthProvider';
import Drawer from '../MainDrawer/Drawer';

const AddCartItemsDrawer = () => {
    const { user } = useContext(AuthContext)
    const { openAddCartItemsSidebar, cartItems } = useSelector((state) => state.controllerSlice)
    const dispatch = useDispatch()

    // console.log(cartItems);

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
        <Drawer
            placement='right'
            drawer={openAddCartItemsSidebar}
            close={() => dispatch(setOpenAddCartItemsSidebar(false))}
            className="w-full md:w-[420px] h-full bg-white p-4"
        >

            <div className="pointer-events-auto w-full h-full">
                <div className="flex h-full flex-col overflow-y-auto">
                    <div className="flex-1 h-full overflow-y-auto">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cartItems && cartItems?.map((product) => (
                                <li key={product?.id} className="flex py-6">
                                    <Link href={`/products/${product?.product?._id}`} className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            src={product?.product?.images[0]}
                                            alt=''
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </Link>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <Link href={`/products/${product?.product?._id}`}>{product?.product?.title}</Link>
                                                <p className="ml-4">{product?.price}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500">blue</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-gray-500">Qty 1</p>

                                            <button onClick={() => handleCartProductRemove(product?._id)} className="flex" type="button" >
                                                <span
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Remove
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {
                        cartItems.length === 0 && <div className='flex justify-center items-center w-full h-full'>
                            <h1 className='text-center font-bold text-2xl text-primary'>No Cart Products</h1>
                        </div>
                    }

                    {
                        cartItems.length > 0 && <div className="border-t border-gray-200 py-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Subtotal</p>
                                <p>${calculateTotalPrice()}</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                            <div className="mt-6">
                                <Link href='/shopping-carts'
                                    onClick={() => dispatch(setOpenAddCartItemsSidebar(false))}
                                    className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-darkPrimary"
                                >
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>



        </Drawer>
    );
};

export default AddCartItemsDrawer;