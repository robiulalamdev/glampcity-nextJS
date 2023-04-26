"use client"
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import arrowDown from '../../../assets/icons/login-register-icons/arrow-down.png'
import img1 from '../../../assets/icons/contact-form-icons/flag1.png'
import Image from 'next/image';
import { setShowPhoneCode } from '@/Slices/loginRegisterSlice';
import { useDispatch, useSelector } from 'react-redux';
import PhoneCodeDropdown from '@/components/LoginRegisterCompo/PhoneCodeDropdown';

const rols = [
    { role: 'Seller' },
    { role: 'Buyer' },
    { role: 'Both' }
]
const ContactForm = () => {
    const { selectedPhoneCode, showPhoneCode, } = useSelector((state) => state.loginRegisterSlice)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [openPhoneCode, setOpenPhoneCode] = useState(false)
    const [phoneCode, setPhoneCode] = useState('')
    const [openRole, setOpenRole] = useState(false)
    const [role, setRole] = useState('seller')
    const [flag, setFlag] = useState(img1)

    const dispatch = useDispatch()

    const handleContact = (data) => {
        console.log(data);
    }

    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setOpenPhoneCode(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <section className='pb-16'>
            <h1 className='text-gray-900 text-3xl text-center font-semibold mb-5 pt-16'>Tell Us What You Need</h1>
            <form onSubmit={handleSubmit(handleContact)} className='px-2 md:px-12 md:w-[950px] mx-auto'>
                <div className='flex flex-col items-start gap-2 mb-6'>
                    <input {...register('serviceName', { required: 'Service Name is required' })}
                        className='w-full h-12 px-3 border rounded focus:outline-none focus:border-primary' type="text" name="serviceName" placeholder='Requirements (Enter product or service name)' />
                    {errors.serviceName && <p className='text-red-600 text-sm'>{errors.serviceName.message}</p>}
                </div>

                <div className='flex flex-col gap-2 mb-6'>
                    <div className='grid md:grid-cols-2 gap-2'>
                        <input {...register('firstName', { required: 'First Name is required' })}
                            className='w-full h-12 px-3 border rounded focus:outline-none focus:border-primary mb-4 md:mb-0' type="text" name="firstName" placeholder='First Name' />

                        <input {...register('lastName')}
                            className='w-full h-12 px-3 border rounded focus:outline-none focus:border-primary' type="text" name="lastName" placeholder='Last Name' />
                    </div>
                    {errors.firstName && <p className='text-red-600 text-sm text-left'>{errors.firstName.message}</p>}
                </div>

                <div className='flex flex-col items-start gap-2 mb-6'>
                    <input {...register('email', { required: 'Email address is required' })}
                        className='w-full h-12 px-3 border rounded focus:outline-none focus:border-primary' type="email" name="email" placeholder='Email address' />
                    {errors.email && <p className='text-red-600 text-sm'>{errors.email.message}</p>}
                </div>

                <div className='mb-6'>
                    <div className='grid md:grid-cols-2 gap-2'>

                        <div className='flex flex-col gap-2'>
                            <input {...register('Compnay', { required: 'Compnay Name is required' })}
                                className='w-full h-12 px-3 border rounded focus:outline-none focus:border-primary' type="text" name="Compnay" placeholder='Compnay' />
                            {errors.Compnay && <p className='text-red-600 text-sm'>{errors.Compnay.message}</p>}
                        </div>

                        <div className='flex flex-col items-start gap-1'>
                            <div className='flex justify-between items-start w-full'>
                                <div className='relative bg-white cursor-pointer'>
                                    <div onClick={() => dispatch(setShowPhoneCode(!showPhoneCode))}
                                        className=' cursor-pointer w-20 h-12 border rounded flex items-center px-2'>
                                        <input {...register('phoneCode')}
                                            className='cursor-pointer w-full text-gray-900 h-full focus:outline-none'
                                            value={selectedPhoneCode} readOnly type="text" name="phoneCode" />
                                        <Image className='w-3' src={arrowDown} alt="" />
                                    </div>
                                    {
                                        showPhoneCode && <PhoneCodeDropdown />
                                    }
                                </div>

                                <input {...register('phone', { required: 'Phone Number is required' })}
                                    className='flex-grow w-full h-12 px-3 border rounded focus:outline-none focus:border-primary' type="number" name="phone" placeholder='Enter Your Phone' />
                            </div>
                            {errors.phone && <p className='text-red-600 text-sm'>{errors.phone.message}</p>}
                        </div>

                    </div>
                </div>

                <div ref={dropdownRef} className='relative'>
                    <div onClick={() => setOpenRole(!openRole)}
                        className='cursor-pointer w-full h-12 border rounded flex justify-between items-center bg-white'>
                        <input {...register('role')}
                            className='cursor-pointer w-full text-gray-900 h-full px-3 focus:outline-none'
                            defaultValue={role} value={role} readOnly type="text" name="role" />
                        <Image className='w-3 mr-3' height='100%' width='100%' src={arrowDown} alt="" />
                    </div>
                    {
                        openRole && <div className="absolute right-0 z-10 w-full rounded bg-gray-50 shadow shadow-gray-400">
                            <div className=''>
                                {
                                    rols && rols.map(r => <div
                                        onClick={() => setRole(r.role)}>
                                        <div onClick={() => setOpenRole(false)}
                                            className='cursor-pointer w-full hover:bg-gray-200 px-2 py-1'>
                                            <h1 className='text-left text-black font-semibold text-sm'>{r.role}</h1>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    }
                </div>

                <button type="submit" className='w-full md:w-96 h-14 mx-auto mt-8 flex justify-center items-center rounded-md bg-primary hover:bg-darkPrimary duration-150 text-white font-bold'>
                    <h1>Submit</h1>
                </button>
            </form>
        </section>
    );
};

export default ContactForm;