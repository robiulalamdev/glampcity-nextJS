import { AuthContext } from '@/ContextAPI/AuthProvider';
import { setNextIncrease } from '@/Slices/loginRegisterSlice';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';

const Supplier = () => {
    const { user, userRefetch } = useContext(AuthContext)
    const dispatch = useDispatch()
    const router = useRouter()

    const [data1, setData1] = useState(user && user?.supplier && user?.supplier.includes("Manufacturer") ? "Manufacturer" : "")
    const [data2, setData2] = useState(user && user?.supplier && user?.supplier.includes("Online shop") ? "Online shop" : "")
    const [data3, setData3] = useState(user && user?.supplier && user?.supplier.includes("Trade company") ? "Trade company" : "")
    const [data4, setData4] = useState(user && user?.supplier && user?.supplier.includes("Retailer") ? "Retailer" : "")
    const [data5, setData5] = useState(user && user?.supplier && user?.supplier.includes("Distributor") ? "Distributor" : "")
    const [data6, setData6] = useState(user && user?.supplier && user?.supplier.includes("Buying office") ? "Buying office" : "")
    const [data7, setData7] = useState(user && user?.supplier && user?.supplier.includes("Individual") ? "Individual" : "")
    const [data8, setData8] = useState(user && user?.supplier && user?.supplier.includes("Other") ? "Other" : "")
    // console.log(data1);

    const sendData = () => {
        const supplier = [data1, data2, data3, data4, data5, data6, data7, data8].filter(Boolean)

        fetch(`https://server.theglampcity.com/api/user/${user?._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ supplier })
        })
            .then(res => res.json())
            .then(data => {
                dispatch(setNextIncrease('1'))
                userRefetch()
                router.push('/my-account/personalize')
            })
    }
    return (
        <div className='py-16'>
            <h1 className='text-center font-semibold text-black text-2xl px-4'>What do you look into supplier?</h1>
            <div className='w-full mx-auto md:px-12 mt-8'>
                <div className='grid md:grid-cols-3 gap-5 cursor-pointer'>
                    <div onClick={() => setData1(data1 === '' ? 'manufacturer' : '')}
                        className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data1 ? 'bg-primary text-white' : 'bg-white'}`}>
                        <h1 className='font-bold px-3'>Manufacturer</h1>
                    </div>
                    <div onClick={() => setData2(data2 === '' ? 'Online shop' : '')}
                        className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data2 ? 'bg-primary text-white' : 'bg-white'}`}>
                        <h1 className='font-bold px-3'>Online shop</h1>
                    </div>
                    <div onClick={() => setData3(data3 === '' ? 'Trade company' : '')}
                        className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data3 ? 'bg-primary text-white' : 'bg-white'}`}>
                        <h1 className='font-bold px-3'>Trade company</h1>
                    </div>
                    <div onClick={() => setData4(data4 === '' ? 'Retailer' : '')}
                        className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data4 ? 'bg-primary text-white' : 'bg-white'}`}>
                        <h1 className='font-bold px-3'>Retailer</h1>
                    </div>
                    <div onClick={() => setData5(data5 === '' ? 'Distributor' : '')}
                        className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data5 ? 'bg-primary text-white' : 'bg-white'}`}>
                        <h1 className='font-bold px-3'>Distributor</h1>
                    </div>
                    <div onClick={() => setData6(data6 === '' ? 'Buying office' : '')}
                        className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data6 ? 'bg-primary text-white' : 'bg-white'}`}>
                        <h1 className='font-bold px-3'>Buying office</h1>
                    </div>
                    <div onClick={() => setData7(data7 === '' ? 'Individual' : '')}
                        className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data7 ? 'bg-primary text-white' : 'bg-white'}`}>
                        <h1 className='font-bold px-3'>Individual</h1>
                    </div>
                    <div onClick={() => setData8(data8 === '' ? 'Other' : '')}
                        className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data8 ? 'bg-primary text-white' : 'bg-white'}`}>
                        <h1 className='font-bold px-3'>Other</h1>
                    </div>
                </div>

                {
                    data1 || data2 || data3 || data4 || data5 || data6 || data7 || data8 ? <button onClick={() => sendData()} type="submit" className='w-36 h-10 mx-auto mt-8 flex justify-center items-center rounded-md bg-primary text-white font-bold'>
                        <h1>Next</h1>
                    </button>
                        :
                        <button disabled className='cursor-not-allowed w-36 h-10 mx-auto mt-8 flex justify-center items-center rounded-md bg-[#0029FF59] text-white font-bold'>
                            <h1>Next</h1>
                        </button>
                }
            </div>
        </div>
    );
};

export default Supplier;