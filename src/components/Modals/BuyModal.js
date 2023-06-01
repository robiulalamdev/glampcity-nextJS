import { AuthContext } from '@/ContextAPI/AuthProvider';
import { Button } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const BuyModal = ({ closeModal, }) => {
    const { user } = useContext(AuthContext)
    const { cartItems, totalPrice, valid, discount, discountAmount, productPrice } = useSelector((state) => state.controllerSlice)
    const { myAddress, selectedAddress } = useSelector((state) => state.myAccountSlice)
    const [products, setProducts] = useState([])
    const router = useRouter()

    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const uniqueCode = `${timestamp}${randomString}`;
    const unique = uuidv4();

    useEffect(() => {
        const getProductDetails = async () => {
            let products = [];
            for (let i = 0; i < cartItems.length; i++) {
                const { product, quantity, price } = cartItems[i];
                products.push({
                    name: product?.title,
                    productId: product?._id,
                    quantity,
                    price
                });
            }
            setProducts(products)
        };

        getProductDetails();
    }, [cartItems]);

    const handlePayment = () => {

        const newOrder = {
            orderNumber: uniqueCode.slice(0, 6) + unique,
            totalPrice: productPrice,
            totalPayment: totalPrice ? totalPrice : productPrice,
            toalDiscount: discountAmount && discountAmount,
            deliveryCharge: 0,
            store: cartItems?.[0].store,
            paymentMethod: "Bkash",
            address: selectedAddress?._id,
            customer: user?._id,
            products: products
        }

        if (newOrder) {
            fetch(`http://localhost:5055/api/order`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newOrder)
            })
                .then(res => res.json())
                .then(data => {
                    router.replace("/my-account/orders")
                    closeModal(false)
                })
        }
    }

    let modalRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!modalRef.current.contains(e.target)) {
                closeModal(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
        <div className='z-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-primary bg-opacity-25 w-full h-full'>
            <div ref={modalRef} className='w-full md:max-w-[1000px] h-fit bg-white shadow-xl p-5 m-5 zoom-in'>
                <div>
                    <h1 className='text-center font-bold text-gray-600 text-xl'>Add New Delivery Address</h1>

                    <img className='w-80 md:w-[600px] mx-auto' src="https://t3.ftcdn.net/jpg/04/86/77/04/360_F_486770467_9nd0TjY0owEdwkoUCvi85VfIJQTvQFKi.jpg" alt="" />
                </div>


                <div className='flex items-center gap-4 justify-end'>
                    <Button onClick={() => closeModal(false)} className='bg-pink-600 shadow-none rounded-sm' >Cancel</Button>
                    <Button onClick={() => handlePayment()} className='bg-green-600 shadow-none rounded-sm' >Payment</Button>
                </div>
            </div >
        </div >
    );
};

export default BuyModal;