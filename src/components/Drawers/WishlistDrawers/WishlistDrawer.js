import React, { useEffect } from 'react';
import { Drawer } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenWishlistSidebar, setWishlistItems } from '@/Slices/controllerSlice';
import { useAuth } from '@/Hooks/getAuth';

const WishlistDrawer = () => {
    const userInfo = useAuth()
    const { openWishlistSidebar, wishlistItems } = useSelector((state) => state.controllerSlice)
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

    useEffect(() => {
        if (userInfo?._id) {
            handleGetWishlist()
        }
    }, [])

    return (
        <Drawer
            placement='right'
            visible={openWishlistSidebar}
            title='Wishlist Products'
            closable={true}
            width='380px'
            onClose={() => dispatch(setOpenWishlistSidebar(false))}
        >

            <div className="pointer-events-auto w-full">
                <div className="flex h-full flex-col overflow-y-auto">
                    <div className="flex-1 overflow-y-auto py-6">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {wishlistItems && wishlistItems.map((product) => (
                                <li key={product?.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            src={product?.image}
                                            alt=''
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                    <a href=''>{product?.title}</a>
                                                </h3>
                                                <p className="ml-4">{product?.price}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500">blue</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-gray-500">Qty 1</p>

                                            <button onClick={() => handleWishlistRemove(product?._id)} className="flex" type="button" >
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
                        wishlistItems.length === 0 && <div className='flex justify-center items-center w-full h-full'>
                            <h1 className='text-center font-bold text-2xl text-primary'>No Wishlist Products</h1>
                        </div>
                    }

                    {
                        wishlistItems.length > 0 && <div className="border-t border-gray-200 py-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Subtotal</p>
                                <p>$262.00</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                            <div className="mt-6">
                                <a
                                    href="#"
                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                >
                                    Checkout
                                </a>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </Drawer>
    );
};

export default WishlistDrawer;