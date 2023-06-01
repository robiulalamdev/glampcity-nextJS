import MyShoppingCarts from '@/components/Shopping-carts-Components/MyShoppingCarts/MyShoppingCarts';
import PlaceOrder from '@/components/Shopping-carts-Components/PlaceOrder/PlaceOrder';
import ProceedCheckout from '@/components/Shopping-carts-Components/ProceedCheckout/ProceedCheckout';
import { useContext, useEffect, useState } from 'react';
import PrivateRoute from '@/PrivateRoutes/PrivateRoute';
import { AuthContext } from '@/ContextAPI/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import { setMyAddress } from '@/Slices/myAccountSlice';
import { setCartItems } from '@/Slices/controllerSlice';

const ShoppingCarts = () => {
    const { user, userRefetch } = useContext(AuthContext)
    const { myAddress } = useSelector((state) => state.myAccountSlice)
    const [next, setNext] = useState(1)

    const dispatch = useDispatch()

    const nextHandle = (data) => {
        setNext(data)
    }


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

    const getAddress = () => {
        fetch(`http://localhost:5055/api/address/my-address/${user?._id}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setMyAddress(data))
            })
    }

    useEffect(() => {
        getAddress()
    }, [user?._id])

    return (
        <PrivateRoute>
            <section className='bg-white'>

                <div className='max-w-[1440px] mx-auto px-3 md:px-8'>
                    {
                        next === 1 && <MyShoppingCarts nextHandle={nextHandle} handleGetCartProducts={handleGetCartProducts} />
                    }
                    {
                        next === 2 && <ProceedCheckout nextHandle={nextHandle} />
                    }
                    {
                        next === 3 && <PlaceOrder nextHandle={nextHandle} refetch={getAddress} />
                    }
                </div>
            </section>
        </PrivateRoute>
    );
};

export default ShoppingCarts;