import { setSelectedMenu } from '@/Slices/orderRefoundsSlice';
import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import edit from '../../assets/icons/order-refounds/edit.png'
import remove from '../../assets/icons/order-refounds/remove.png'
import SmallTabs from '@/components/TabsComponents/SmallTabs';
import ProductReview from '@/components/Product-View-Components/ProductReview';

const product = {
    "price": 0,
    "flashSale": false,
    "status": "Show",
    "_id": "641b36c144fa7ab0e89f7ea7",
    "title": "Savlon Soap",
    "slug": "new-arrival",
    "parent": "New Arrival",
    "children": "Bath",
    "image": "https://i.ibb.co/XL8Dmw5/Savlon-Fresh-Antiseptic-Soap-100-Gm.jpg",
    "discount": 0,
    "unit": "100gm",
    "quantity": 100,
    "type": "Health Care",
    "tag": [
        "bath",
        "soap"
    ],
    "description": "bathroom accessories are items specifically designed for use in a bathroom, such as soap dishes, towel racks, etc. bathroom accessories accessories typically have durable, decorative finishes."
}

const index = () => {
    const { menuItems, selectedMenu } = useSelector((state) => state.orderRefoundsSlice)
    const dispatch = useDispatch()
    return (
        <section className='bg-white'>
            <div className='max-w-[1440px] mx-auto pt-8 px-4 md:px-0'>

                <ProductReview product={product} />
                <SmallTabs />
                <h1 className='text-xl font-bold text-black my-6'>Order Refunds</h1>
                <div className='flex-grow flex items-center'>
                    <input className='flex-grow h-12 w-full focus:outline-none border px-2' type="search" name="search" placeholder='Please enter order no.' />
                    <button className='w-36 h-12 text-white bg-primary flex justify-center items-center' type="submit"><span>Search</span></button>
                </div>

                <div className='grid md:grid-cols-3 gap-4 mt-8'>
                    {
                        menuItems.map((item, i) => (
                            <button onClick={() => dispatch(setSelectedMenu(item.id))}
                                key={i} className={`w-full h-12 rounded-md flex justify-center items-center
                            ${selectedMenu === item.id ? 'bg-primary text-white' : 'bg-gray-200 text-black'}`}>
                                <h1 className=''>{item.title}</h1>
                            </button>
                        ))
                    }
                </div>

                <div className='border-b border-[#0029FF4D] mt-6'>
                    <table className='mainTable w-full text-left'>
                        <thead className='mainThead bg-[#0029FF14] h-12 text-gray-500 font-normal'>
                            <tr className='mainTr'>
                                <th className='md:pl-6 font-normal'>Product ID</th>
                                <th className='md:pl-6 font-normal'>Refund Amount</th>
                                <th className='md:pl-6 font-normal'>Status</th>
                                <th className='md:pl-6 font-normal'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='mainTbody h-12 cursor-pointer'>
                            <tr className='mainTr border-t pt-1 md:pt-0 md:border-none border-primary'>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-3 md:px-6 py-2'
                                    data-label="Product ID">
                                    #01287whu77
                                </td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-3 md:px-6 py-2'
                                    data-label="Refund Amount">
                                    $450
                                </td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-3 md:px-6 py-1'
                                    data-label="Status">
                                    <button className='w-fit mx-auto mr-0 md:mx-0 px-4 h-10 bg-primary rounded-md text-white flex justify-center items-center'><span>Refund in progress (0)</span></button>
                                </td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-3 md:px-6 py-2 ' data-label="Action">
                                    <div className='flex justify-start items-center gap-2 w-fit mx-auto mr-0 md:mx-0'>
                                        <Image className='w-9' src={edit} alt="" />
                                        <Image className='w-9' src={remove} alt="" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default index;