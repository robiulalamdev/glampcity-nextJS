import MyShoppingCarts from '@/components/Shopping-carts-Components/MyShoppingCarts/MyShoppingCarts';
import PlaceOrder from '@/components/Shopping-carts-Components/PlaceOrder/PlaceOrder';
import ProceedCheckout from '@/components/Shopping-carts-Components/ProceedCheckout/ProceedCheckout';
import { useContext, useEffect, useState } from 'react';
import RippleButton from '../buttons';
import PrivateRoute from '@/PriveteRoutes/PriveteRoute';
import { AuthContext } from '@/ContextAPI/AuthProvider';

const ShoppingCarts = () => {
    const { user, userRefetch } = useContext(AuthContext)
    const [next, setNext] = useState(1)
    const [allAddress, setAllAddress] = useState([])

    const nextHandle = (data) => {
        setNext(data)
    }

    const getAddress = () => {
        if (user?._id) {
            fetch(`http://localhost:5055/api/address/${user?._id}`)
                .then(res => res.json())
                .then(data => {
                    if (data?.status === "success") {
                        console.log(data.data);
                        setAllAddress(data.data)
                    }
                })
        }
    }

    useEffect(() => {
        getAddress()
    }, [user?._id])

    return (
        <PrivateRoute>
            <section className='bg-white'>

                {/* <RippleButton className="text-white bg-primary active:bg-darkPrimary hover:bg-darkPrimary w-96" >
                click button
            </RippleButton> */}


                <div className='max-w-[1440px] mx-auto px-3 md:px-8'>
                    {
                        next === 1 && <MyShoppingCarts nextHandle={nextHandle} />
                    }
                    {
                        next === 2 && <ProceedCheckout nextHandle={nextHandle} />
                    }
                    {
                        next === 3 && <PlaceOrder nextHandle={nextHandle} address={allAddress} refetch={getAddress} />
                    }
                </div>
            </section>
        </PrivateRoute>
    );
};

export default ShoppingCarts;