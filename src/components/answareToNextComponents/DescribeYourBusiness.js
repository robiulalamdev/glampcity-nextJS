import { AuthContext } from '@/ContextAPI/AuthProvider';
import { setNextIncrease } from '@/Slices/loginRegisterSlice';
import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';


const DescribeYourBusiness = () => {
    const { user, userRefetch } = useContext(AuthContext)
    const dispatch = useDispatch()


    const [data1, setData1] = useState(user && user?.describeYourBusiness && user?.describeYourBusiness.includes("Manufacturer") ? "Manufacturer" : "")
    const [data2, setData2] = useState(user && user?.describeYourBusiness && user?.describeYourBusiness.includes("Online shop") ? "Online shop" : "")
    const [data3, setData3] = useState(user && user?.describeYourBusiness && user?.describeYourBusiness.includes("Trade company") ? "Trade company" : "")
    const [data4, setData4] = useState(user && user?.describeYourBusiness && user?.describeYourBusiness.includes("Retailer") ? "Retailer" : "")
    const [data5, setData5] = useState(user && user?.describeYourBusiness && user?.describeYourBusiness.includes("Distributor") ? "Distributor" : "")
    const [data6, setData6] = useState(user && user?.describeYourBusiness && user?.describeYourBusiness.includes("Buying office") ? "Buying office" : "")
    const [data7, setData7] = useState(user && user?.describeYourBusiness && user?.describeYourBusiness.includes("Individual") ? "Individual" : "")
    const [data8, setData8] = useState(user && user?.describeYourBusiness && user?.describeYourBusiness.includes("Other") ? "Other" : "")
    // console.log(data1);



    const sendData = () => {
        const describeYourBusiness = [data1, data2, data3, data4, data5, data6, data7, data8].filter(Boolean)
        fetch(`http://localhost:5055/api/user/${user?._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ describeYourBusiness })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                userRefetch()
                dispatch(setNextIncrease('2'))
            })
    }

    return (
        <div className='py-8'>
            <h1 className='text-center font-semibold text-black text-2xl px-4'>How would you describe your business?</h1>
            <div className='w-full mx-auto md:px-12 mt-8'>
                <div className='grid md:grid-cols-3 gap-5 cursor-pointer'>
                    <div onClick={() => setData1(data1 === '' ? 'Manufacturer' : '')}
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

export default DescribeYourBusiness;