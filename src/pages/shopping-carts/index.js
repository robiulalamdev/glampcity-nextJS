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

                <div className="relative w-40 dropdown">
                    <button id="dropdown-btn" className="px-4 py-2 font-semibold text-gray-700 bg-gray-100 rounded-md
                    cursor-pointer focus:bg-primary focus:text-white">
                        Dropdown
                    </button>
                    <ul className="hidden dropdown_menu dropdown_menu--animated dropdown_menu-6
                    grid grid-cols-1 bg-white font-bold shadow">
                        <li className="flex items-center px-2 h-10 w-full hover:bg-primary hover:text-white">
                            <span>Item 1</span>
                        </li>
                        <li className="flex items-center px-2 h-10 w-full hover:bg-primary hover:text-white">
                            <span>Item 2</span>
                        </li>
                        <li className="flex items-center px-2 h-10 w-full hover:bg-primary hover:text-white">
                            <span>Item 3</span>
                        </li>
                    </ul>
                </div>



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