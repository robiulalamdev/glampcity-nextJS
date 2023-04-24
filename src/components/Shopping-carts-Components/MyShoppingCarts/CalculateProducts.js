import ButtonSpinner from '@/components/Loaders/ButtonSpinner';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const CalculateProducts = () => {
    const { cartItems } = useSelector((state) => state.controllerSlice)
    const [valid, setValid] = useState(false)
    const [voucherCode, setVoucherCode] = useState("")
    const [voucherResult, setVoucherResult] = useState("")
    const [price, setPrice] = useState("")
    const [isLoading, setIsloading] = useState(false)

    console.log(valid);

    const handleDiscountChange = (discount) => {
        const price = calculateTotalPrice()
        setPrice(price * (100 - parseInt(discount)) / 100);
    };

    const handleVoucherValidate = (e) => {
        e.preventDefault()
        const code = e.target.code.value
        setIsloading(true)
        if (!code) {
            setIsloading(false)
            setVoucherCode("")
            return setVoucherResult("Enter Your Voucher")
        }
        else {
            fetch(`http://localhost:5055/api/voucher/validate/${voucherCode}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data?.valid) {
                        setValid(data?.valid)
                        handleDiscountChange(data?.discount)
                        setVoucherCode("")
                    }
                    if (data?.valid === false) {
                        setVoucherResult("Voucher Not Valid")
                        setVoucherCode("")
                    }
                    e.target.reset()
                    setIsloading(false)
                })
        }
    }


    const handleErrorRemove = (e) => {
        setVoucherCode(e)
        setVoucherResult("")
    }



    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach((product) => {
            totalPrice += product.price;
        });
        return totalPrice;
    };

    // console.log(voucherCode);




    return (
        <div>
            <div>
                <div className='flex justify-between items-center mt-3'>
                    <p className='text-gray-500 text-xl'>Subtotal</p>
                    <p className='text-xl font-bold text-black'>${calculateTotalPrice()}</p>
                </div>


                <form onSubmit={handleVoucherValidate} className='flex items-center mt-4 w-full'>
                    <input onChange={(e) => handleErrorRemove(e.target.value)}
                        className={`w-full h-10 focus:outline-none px-2
                    ${voucherResult ? "border border-l border-y border-red-500" : "border border-l border-y border-gray-500"}`} type="text" name='code' placeholder='Enter Voucher Code' disabled={valid} />


                    {
                        voucherCode && !valid ? <button type='submit' disabled={valid}
                            className='w-44 h-10 flex justify-center items-center text-white bg-primary hover:bg-darkPrimary duration-150 active:bg-rose-600'>
                            <span className='uppercase font-bold'>
                                {
                                    isLoading ? <div className='flex items-center gap-2'><h1>Apply</h1><ButtonSpinner className="w-4" /></div> : <h1>Apply</h1>
                                }
                            </span>
                        </button>
                            :
                            <button disabled className='w-44 h-10 flex justify-center items-center text-white bg-gray-500 cursor-not-allowed'>
                                <span className='uppercase font-bold'>Apply</span>
                            </button>
                    }
                </form>
                {voucherResult && <p className='text-red-500 text-sm text-left'>{voucherResult}</p>}

                <div className='flex justify-between items-center mt-3'>
                    <p className='text-gray-500 text-xl'>Total</p>
                    <p className='text-xl font-bold text-black'>${price}</p>
                </div>
            </div>
        </div>
    );
};

export default CalculateProducts;