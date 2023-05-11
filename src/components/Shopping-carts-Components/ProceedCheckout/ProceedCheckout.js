import { setCartItems } from '@/Slices/controllerSlice';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyShoppingCard from '../MyShoppingCarts/MyShoppingCard';
import CalculateProducts from '../MyShoppingCarts/CalculateProducts';
import { AuthContext } from '@/ContextAPI/AuthProvider';

const ProceedCheckout = ({ nextHandle }) => {
    const { cartItems } = useSelector((state) => state.controllerSlice)
    const { user, userRefetch } = useContext(AuthContext)
    const dispatch = useDispatch()

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
        <section className='min-h-screen mt-16'>
            <div className='w-full grid lg:grid-cols-3 gap-5'>

                <div className=' md:col-span-2 grid grid-cols-1 gap-4' >
                    {
                        cartItems && cartItems?.map((item, i) => <MyShoppingCard key={i} data={item}
                            handleRemove={handleCartProductRemove} />)
                    }
                </div>


                <div className='w-full h-fit lg:col-span-1 border rounded-md text-left p-4'>
                    <h1 className='text-black font-semibold text-xl'>Order Summary</h1>

                    <CalculateProducts />

                    <div className='w-full mt-4'>
                        <button onClick={() => nextHandle(3)} className='flex justify-center items-center w-full h-10 rounded-[50px] bg-primary'>
                            <span className='text-white uppercase'>Proceed to Checkout</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProceedCheckout;