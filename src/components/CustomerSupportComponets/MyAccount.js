import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dot from '../../assets/images/customer-support/dot.png'
import upArrow from '../../assets/images/customer-support/up-arrow.png'
import circle from '../../assets/images/customer-support/circle.png'
import downArrow from '../../assets/images/customer-support/down-arrow.png'
import { setViewAnsware } from '@/Slices/customerSupportSlice';

const MyAccount = () => {
    const { populerTopics, viewAnsware } = useSelector((state) => state.customerSupportSlice)
    const dispatch = useDispatch()
    return (
        <section className='mt-16'>
            <h1 className='text-center font-bold text-black text-2xl'>Popular Topics</h1>

            <div>
                <div className='w-full h-16 bg-primary flex justify-between items-center rounded-tl-3xl rounded-tr-3xl mt-8 px-4'>
                    <div className='w-full flex justify-start gap-4'>
                        <Image className='w-5' src={dot} alt="" />
                        <h1 className='text-white text-xl'>What can I do if I forgot my password?</h1>
                    </div>
                    <Image className='w-8' src={upArrow} alt="" />
                </div>
                <p className='text-xl text-gray-500 my-6'>Lorem ipsum dolor sit amet consectetur. Diam id risus mi faucibus. Id commodo egestas orci neque eget hendrerit maecenas. Quis pretium habitant risus risus neque mauris ornare. Malesuada.</p>
            </div>

            <div className='grid grid-cols-1 gap-2 cursor-pointer'>
                {
                    populerTopics.map(topic => (
                        <div className='h-fit w-full'>
                            <div onClick={() => dispatch(setViewAnsware(viewAnsware ? '' : topic.id))}
                                key={topic.id} className={`w-full h-fit py-4 flex justify-between items-center px-4
                                ${viewAnsware === topic.id ? 'bg-gray-100' : 'hover:bg-gray-100'}`}>
                                <div className='flex justify-start gap-4 items-center'>
                                    <Image className='w-4' src={circle} alt="" />
                                    <h1 className='text-xl text-black font-semibold'>{topic.question}</h1>
                                </div>
                                <Image className='w-8' src={downArrow} alt="" />
                            </div>
                            {
                                viewAnsware === topic.id && <div className='bg-gray-100'>
                                    <p className='text-gray-900 text-xl px-4 py-3'>{topic.answare}</p>
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default MyAccount;