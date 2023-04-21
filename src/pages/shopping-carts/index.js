import { useAuth } from '@/Hooks/getAuth';
import MyShoppingCarts from '@/components/Shopping-carts-Components/MyShoppingCarts/MyShoppingCarts';
import PlaceOrder from '@/components/Shopping-carts-Components/PlaceOrder/PlaceOrder';
import ProceedCheckout from '@/components/Shopping-carts-Components/ProceedCheckout/ProceedCheckout';
import { useEffect, useState } from 'react';

const ShoppingCarts = () => {
    const userInfo = useAuth()
    const [next, setNext] = useState(1)
    const [allAddress, setAllAddress] = useState([])

    const nextHandle = (data) => {
        setNext(data)
    }

    const getAddress = () => {
        if (userInfo?._id) {
            fetch(`http://localhost:5055/api/address/${userInfo?._id}`)
                .then(res => res.json())
                .then(data => {
                    if (data?.status === "success") {
                        console.log(data.data);
                        setAllAddress(data.data)
                    }
                })
        }
        // else {
        //     getAddress()
        // }
    }

    useEffect(() => {
        getAddress()
    }, [userInfo])

    return (
        <section className='bg-white'>
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
    );
};

export default ShoppingCarts;