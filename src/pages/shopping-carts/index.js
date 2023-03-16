import MyShoppingCarts from '@/components/Shopping-carts-Components/MyShoppingCarts/MyShoppingCarts';
import PlaceOrder from '@/components/Shopping-carts-Components/PlaceOrder/PlaceOrder';
import ProceedCheckout from '@/components/Shopping-carts-Components/ProceedCheckout/ProceedCheckout';
import { useState } from 'react';

const ShoppingCarts = () => {
    const [next, setNext] = useState(1)

    const nextHandle = (data) => {
        setNext(data)
    }
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
                    next === 3 && <PlaceOrder nextHandle={nextHandle} />
                }
            </div>
        </section>
    );
};

export default ShoppingCarts;