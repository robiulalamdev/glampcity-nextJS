import ViewOrderFilter from '@/components/Open-order-compo/ViewOrderFilter';
import { setOpenOrder } from '@/Slices/allOrderSlice';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import down from '../../assets/icons/down.png'

const AllOrders = () => {
    const { orderItems, openOrder } = useSelector((state) => state.allOrderSlice)
    const dispatch = useDispatch()

    // console.log(openOrder);
    useEffect(() => {

    }, [])
    return (
        <section className='bg-white cursor-pointer'>
            <div className='max-w-[1440px] mx-auto px-4 py-12'>
                <h1 className='text-black font-bold text-left text-xl mb-4'>All Order</h1>

                <div className='flex flex-wrap items-center gap-4 md:gap-12 w-full bg-white'>
                    {
                        orderItems && orderItems?.map(item => (
                            <div onClick={() => dispatch(setOpenOrder(item))}
                                className={`flex items-center h-10
                                ${openOrder?.id === item?.id && '-translate-y-3 scale-y-105 border-b-4 border-blue-600 text-blue-600 duration-150'}`}>
                                <h1 className='font-semibold'>{item?.title}</h1>
                            </div>
                        ))
                    }
                </div>
                <div className='min-h-[160px] w-full mx-auto border border-blue-400 rounded-xl mt-6 p-4'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            openOrder && openOrder?.children?.map(item => <ViewOrderFilter data={item} />)
                        }

                    </div>
                    {
                        openOrder?.children.length === 0 && <div className='w-full h-full justify-center items-center'>
                            <h1 className='text-center font-bold text-xl'>No Data</h1>
                        </div>
                    }
                </div>

                <div className='grid grid-cols-3 gap-x-4 md:gap-x-8 w-full md:w-fit h-14 border border-blue-400 rounded-md px-4 mt-8'>
                    <div className='flex items-center justify-between w-32 gap-2'>
                        <span className='text-gray-500 font-semibold font-sans'>Assign to</span>
                        <Image className='w-3' src={down} />
                    </div>
                    <div className='flex items-center justify-between w-32 gap-2'>
                        <span className='text-gray-500 font-semibold font-sans'>Export order</span>
                        <Image className='w-3' src={down} />
                    </div>
                    <div className='flex items-center justify-center w-32 gap-2'>
                        <span className='text-gray-500 font-semibold font-sans'>Delete</span>
                    </div>
                </div>

                <table className='mainTable w-full text-left my-8'>
                    <thead className='mainThead bg-[#0029FF14] h-12 text-gray-500 font-normal'>
                        <tr className='mainTr'>
                            <th className='md:pl-6 font-normal'>Buyer Info</th>
                            <th className='md:pl-6 font-normal'>Product Info</th>
                            <th className='md:pl-6 font-normal'>Amount</th>
                            <th className='md:pl-6 font-normal'>Export/Shipping</th>
                            <th className='md:pl-6 font-normal'>Status</th>
                            <th className='md:pl-6 font-normal'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='h-12'>
                        <tr className='tr border-x border-b border-t pt-1 md:pt-0 md:border-none border-primary'>
                            <td className='mainTd bg-gray-200 md:bg-white my-1 px-3 md:px-6 py-2' data-label="Buyer Info">84865696</td>
                            <td className='mainTd bg-gray-200 md:bg-white my-1 px-3 md:px-6 py-2' data-label="Product Info">231567456</td>
                            <td className='mainTd bg-gray-200 md:bg-white my-1 px-3 md:px-6 py-2' data-label="Amount">$452</td>
                            <td className='mainTd bg-gray-200 md:bg-white my-1 px-3 md:px-6 py-2' data-label="Export/Shipping">PDF</td>
                            <td className='mainTd bg-gray-200 md:bg-white my-1 px-3 md:px-6 py-2' data-label="Status">Show</td>
                            <td className='mainTd bg-gray-200 md:bg-white my-1 px-3 md:px-6 py-2' data-label="Action">Delete</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </section>
    );
};

export default AllOrders;