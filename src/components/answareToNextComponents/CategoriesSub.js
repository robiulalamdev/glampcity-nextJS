import { useAuth } from '@/Hooks/getAuth';
import { setNextIncrease } from '@/Slices/loginRegisterSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const CategoriesSub = () => {
    const dispatch = useDispatch()
    const userInfo = useAuth()
    const [data1, setData1] = useState('')
    const [data2, setData2] = useState('')
    const [data3, setData3] = useState('')

    const sendData = () => {
        const reverentSubCategories = {
            electronics: data1,
            tents: data2,
            autoAndTransportation: data3,
        }
        fetch(`http://localhost:5055/api/user/${userInfo?._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ reverentSubCategories })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch(setNextIncrease('3'))
            })
    }
    return (
        <div className='py-16'>
            <h1 className='text-center font-semibold text-black text-2xl px-4'>What sub-categories are reverent to you?</h1>
            <div className='w-full mx-auto md:px-12 mt-8'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer'>
                    <div className='bg-white border shadow p-3 grid grid-cols-1 gap-2 rounded-md'>
                        <h1 className='text-center text-black font-bold uppercase text-md'>Electronics</h1>
                        <div onClick={() => setData1('smartphone')}
                            className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data1 === 'smartphone' ? 'bg-primary text-white' : 'bg-white'}`}>
                            <h1 className='font-bold px-3'>smartphone</h1>
                        </div>
                        <div onClick={() => setData1('television')}
                            className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data1 === 'television' ? 'bg-primary text-white' : 'bg-white'}`}>
                            <h1 className='font-bold px-3'>television</h1>
                        </div>
                        <div onClick={() => setData1('refrigerator')}
                            className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data1 === 'refrigerator' ? 'bg-primary text-white' : 'bg-white'}`}>
                            <h1 className='font-bold px-3'>refrigerator</h1>
                        </div>
                        <div onClick={() => setData1('computer')}
                            className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data1 === 'computer' ? 'bg-primary text-white' : 'bg-white'}`}>
                            <h1 className='font-bold px-3'>computer</h1>
                        </div>
                    </div>


                    <div className='bg-white border shadow p-3 grid grid-cols-1 gap-2 rounded-md'>
                        <h1 className='text-center text-black font-bold uppercase text-md'>Tents</h1>
                        <div onClick={() => setData2('poles')}
                            className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data2 === 'poles' ? 'bg-primary text-white' : 'bg-white'}`}>
                            <h1 className='font-bold px-3'>poles</h1>
                        </div>
                        <div onClick={() => setData2('ropes')}
                            className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data2 === 'ropes' ? 'bg-primary text-white' : 'bg-white'}`}>
                            <h1 className='font-bold px-3'>ropes</h1>
                        </div>
                        <div onClick={() => setData2('fabric')}
                            className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data2 === 'fabric' ? 'bg-primary text-white' : 'bg-white'}`}>
                            <h1 className='font-bold px-3'>fabric</h1>
                        </div>
                        <div onClick={() => setData2('Individual')}
                            className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data2 === 'Individual' ? 'bg-primary text-white' : 'bg-white'}`}>
                            <h1 className='font-bold px-3'>Individual</h1>
                        </div>
                    </div>


                    <div className='bg-white border shadow p-3 grid grid-cols-1 gap-2 rounded-md'>
                        <h1 className='text-center text-black font-bold uppercase text-md'>Auto & Transportation</h1>
                        <div onClick={() => setData3('car')}
                            className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data3 === 'car' ? 'bg-primary text-white' : 'bg-white'}`}>
                            <h1 className='font-bold px-3'>car</h1>
                        </div>
                        <div onClick={() => setData3('truck')}
                            className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data3 === 'truck' ? 'bg-primary text-white' : 'bg-white'}`}>
                            <h1 className='font-bold px-3'>truck</h1>
                        </div>
                        <div onClick={() => setData3('motorcycle')}
                            className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data3 === 'motorcycle' ? 'bg-primary text-white' : 'bg-white'}`}>
                            <h1 className='font-bold px-3'>motorcycle</h1>
                        </div>
                        <div onClick={() => setData3('bicycle')}
                            className={`flex justify-start items-center w-full h-14 border border-primary rounded-md text-black ${data3 === 'bicycle' ? 'bg-primary text-white' : 'bg-white'}`}>
                            <h1 className='font-bold px-3'>bicycle</h1>
                        </div>
                    </div>


                </div>

                {
                    data1 && data2 && data3 ? <button onClick={() => sendData()} type="submit" className='w-36 h-10 mx-auto mt-8 flex justify-center items-center rounded-md bg-primary text-white font-bold'>
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

export default CategoriesSub;