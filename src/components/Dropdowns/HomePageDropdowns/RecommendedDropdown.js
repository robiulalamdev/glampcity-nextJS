import { setOpenRecommended } from '@/Slices/bannerSlice';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import img1 from '../../../assets/icons/banner-icons/search.png'

const RecommendedDropdown = () => {
    const dispatch = useDispatch()
    let outsideRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!outsideRef.current.contains(e.target)) {
                dispatch(setOpenRecommended(false));
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <div ref={outsideRef} className='absolute bg-white w-full h-fit p-6 shadow'>
            <h1 className='text-xl font-bold text-gray-900'>Recommended for you</h1>
            <div className='mt-4'>
                <div className='flex items-center gap-4 hover:bg-gray-200 w-full h-12 rounded-md px-2'>
                    <Image className='w-6' src={img1} alt="" />
                    <h1 className='text-gray-600 text-xl'>Printer</h1>
                </div>
                <div className='flex items-center gap-4 hover:bg-gray-200 w-full h-12 rounded-md px-2'>
                    <Image className='w-6' src={img1} alt="" />
                    <h1 className='text-gray-600 text-xl'>Leather Jacket</h1>
                </div>
                <div className='flex items-center gap-4 hover:bg-gray-200 w-full h-12 rounded-md px-2'>
                    <Image className='w-6' src={img1} alt="" />
                    <h1 className='text-gray-600 text-xl'>Men shoes</h1>
                </div>
                <div className='flex items-center gap-4 hover:bg-gray-200 w-full h-12 rounded-md px-2'>
                    <Image className='w-6' src={img1} alt="" />
                    <h1 className='text-gray-600 text-xl'>Shopping Bags</h1>
                </div>
                <div className='flex items-center gap-4 hover:bg-gray-200 w-full h-12 rounded-md px-2'>
                    <Image className='w-6' src={img1} alt="" />
                    <h1 className='text-gray-600 text-xl'>Shirt</h1>
                </div>
            </div>
        </div>
    );
};

export default RecommendedDropdown;