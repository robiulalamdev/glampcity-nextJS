import React, { useState } from 'react';
import avatar from '../../../assets/images/messages-images/avatar.png'
import bulb from '../../../assets/images/messages-images/bulb.png'
import attach from '../../../assets/images/messages-images/attach.png'
import message from '../../../assets/images/messages-images/message.png'
import downArrow from '../../../assets/images/messages-images/down-arrow.png'
import search from '../../../assets/images/messages-images/search.png'
import close from '../../../assets/images/messages-images/close.png'
import Image from 'next/image';

const SendInquiry = () => {
    const [showMessage, setShowMessage] = useState(false)
    return (
        <section className='my-16 min-h-full relative'>
            <h1 className='text-black font-semibold text-xl text-left my-4'>Send Inquiry </h1>
            <div className='flex items-center gap-3 mt-4'>
                <p className='text-xl font-semibold text-black text-left'>To  :</p>
                <Image className='w-8' src={avatar} alt="" />
                <p className='md:text-xl font-semibold text-black text-left'>Lisa Yang | <br className='md:hidden' /> Company name or Seller account name</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <h1 className='text-xl font-semibold text-black text-left'>Detailed Requirements:</h1>
                <div className='w-5 h-5 rounded-full border p-1 flex justify-center items-center'><span className='text-black font-bold'>!</span></div>
            </div>

            <p className='text-gray-500 text-left my-4'>Enter product details such as color, size, materials etc. and other specification requirements to receive an accurate quote:</p>

            <form action="">
                <textarea className='border resize-none border-[#0029FF4D] focus:outline-primary rounded-md h-72 w-full p-6' name="message" placeholder='Please type in.......'></textarea>

            </form>
            <div className='flex items-center gap-4 mt-4'>
                <Image className='w-4' src={bulb} alt="" />
                <p className='text-gray-500 text-left'>Check out this question from other buyers. Click to insert the questions in the box above. </p>
            </div>
            <div className='flex flex-col justify-center md:justify-start md:flex-row md:items-center gap-5 mt-6'>
                <button className='w-full md:w-96 h-12 flex justify-center items-center bg-gray-200 rounded-[50px]'><span className='text-black'>What is the best price you can offer?</span></button>
                <button className='w-full md:w-96 h-12 flex justify-center items-center bg-gray-200 rounded-[50px]'><span className='text-black'>What is the shipping cost?</span></button>
                <button className='w-full md:w-96 h-12 flex justify-center items-center bg-gray-200 rounded-[50px]'><span className='text-black'>What is the shipping cost?</span></button>
            </div>
            <div className='relative w-56 h-12 flex justify-center cursor-pointer items-center gap-3 border border-primary rounded-md mt-4'>
                <Image className='w-5' src={attach} alt="" />
                <h1 className='text-primary'>Add Attachments</h1>
                <input className='opacity-0 absolute w-full h-full cursor-pointer' type="file" name="file" id="" />
            </div>

            <div className='flex items-center gap-3 mt-6'>
                <input type="checkbox" name="" id="" />
                <span className='text-sm text-left text-gray-500'>Recommend matching suppliers if this supplier  doesn’t contact me on message center within 24 hours.</span>
            </div>
            <div className='flex items-center gap-3 mt-6'>
                <input type="checkbox" name="" id="" />
                <span className='text-sm text-left text-gray-500'>I agree to share my <strong className='text-gray-900'>Business Card</strong> to the supplier</span>
            </div>

            <button className='w-56 h-12 bg-primary flex justify-center items-center rounded-md mx-auto my-14' type="submit">
                <span className='text-white text-md font-semibold'>Send inquiry now</span>
            </button>


            <div className='fixed bottom-0 right-0 w-full md:w-fit h-fit bg-white'>
                <div className={`flex justify-between items-center w-full md:w-96 h-16 bg-white shadow border border-gray-100 px-4 ${showMessage && 'shadow-xl shadow-b'}`}>
                    <div className='flex items-center gap-5'>
                        <Image className='w-6' src={message} alt="" />
                        <h1 className='text-primary font-semibold text-xl'>Messenger</h1>
                    </div>
                    <div className='flex items-center gap-5'>
                        {
                            showMessage && <div>
                                <Image className='w-6 cursor-pointer' src={search} alt="" />
                            </div>
                        }
                        <div>
                            {
                                showMessage ? <Image onClick={() => setShowMessage(false)} className='w-4 cursor-pointer' src={close} alt="" />
                                    :
                                    <Image onClick={() => setShowMessage(true)} className='w-4 cursor-pointer' src={downArrow} alt="" />
                            }
                        </div>
                    </div>
                </div>
                {
                    showMessage && <div className='h-[400px] w-full'>

                    </div>
                }
            </div>
        </section>
    );
};

export default SendInquiry;