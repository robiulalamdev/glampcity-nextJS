import CategoriesSub from '@/components/answareToNextComponents/CategoriesSub';
import DescribeYourBusiness from '@/components/answareToNextComponents/DescribeYourBusiness';
import Supplier from '@/components/answareToNextComponents/Supplier';
import { setNextIncrease } from '@/Slices/loginRegisterSlice';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Personalize = () => {
    const { nextIncrease } = useSelector((state) => state.loginRegisterSlice)
    const dispatch = useDispatch()

    return (
        <section className='bg-white min-h-screen'>
            <div className='max-w-[1440px] mx-auto px-3 md:px-8'>
                {
                    nextIncrease === '1' && < DescribeYourBusiness />
                }
                {
                    nextIncrease === '2' && < CategoriesSub />
                }
                {
                    nextIncrease === '3' && <div className='max-w-[800px] mx-auto py-16'>
                        <h1 className='text-center font-semibold text-black text-2xl px-4'>We can finish here or i have some bonus questions which
                            will help you to give more specific information.</h1>
                        <div className='flex items-center gap-4 w-fit mx-auto px-6 md:px-12 mt-8'>
                            <Link href='/home' type="submit" className='w-36 h-10 mx-auto mt-8 flex justify-center items-center rounded-md bg-white border border-primary text-primary font-bold'>
                                <h1>Skip</h1>
                            </Link>
                            <button onClick={() => dispatch(setNextIncrease('4'))} type="submit" className='w-36 h-10 mx-auto mt-8 flex justify-center items-center rounded-md bg-primary text-white font-bold'>
                                <h1>Next</h1>
                            </button>
                        </div>
                    </div>
                }
                {
                    nextIncrease === '4' && <Supplier />
                }
            </div>
        </section>
    );
};

export default Personalize;