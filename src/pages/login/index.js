import React from 'react';
// import hrLine from '../../assets/icons/login-register-icons/hrLine.png'
import facebook from '../../assets/icons/login-register-icons/facebook.png'
import google from '../../assets/icons/login-register-icons/google.png'
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '@/Slices/controllerSlice';
import { useRouter } from 'next/router';
const index = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()

    const handleLogin = (data) => {
        fetch(`http://localhost:5055/api/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.login === false) {
                    alert(data?.message)
                }
                if (data?.success === true) {
                    localStorage.setItem('glampcity-token', data.token)
                }
                if (data?.token) {
                    const token = localStorage.getItem('glampcity-token')
                    if (token) {
                        router.push('/home')
                        alert('User Login Successfull')
                    }
                }
            })
    }

    return (
        <div className='bg-[#F5F5F5] min-w-full md:min-h-screen'>
            <div className='max-w-[1440px] mx-auto md:pt-16'>
                <div className='w-full md:w-[550px] bg-white py-8 rouonded-xl md:shadow-md md:border mx-auto'>
                    <h1 className='text-3xl font-bold text-center text-primary py-6'>Log In</h1>

                    <form onSubmit={handleSubmit(handleLogin)} className='px-6 md:px-12'>
                        <div className='flex flex-col items-start gap-2 mb-6'>
                            <label className='text-left font-bold text-gray-900' htmlFor="email" id='email'>Email address <span className='text-primary'>*</span></label>
                            <input {...register('email', { required: 'Email is required' })}
                                className='w-full h-10 px-3 border rounded focus:outline-primary' type="email" name="email" id="email" />
                            {errors.email && <p className='text-red-600 text-sm'>{errors.email.message}</p>}
                        </div>
                        <div className='flex flex-col items-start gap-2 mb-1'>
                            <label className='text-left font-bold text-gray-900' htmlFor="password" id='password'>Password <span className='text-primary'>*</span></label>
                            <input {...register('password', { required: 'Password is required' })}
                                className='w-full h-10 px-3 border rounded focus:outline-primary' type="password" name="password" id="password" />
                            {errors.password && <p className='text-red-600 text-sm'>{errors.password.message}</p>}
                        </div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <input type="checkbox" name="signed" id="signed" />
                                <label className='text-gray-600 text-sm ml-2' htmlFor="signed" id='signed'>Remain Signed In</label>
                            </div>
                            <div>
                                <Link className='text-primary text-sm' href='/'>Forget Password?</Link>
                            </div>
                        </div>
                        <button type="submit" className='w-36 h-10 mx-auto mt-8 flex justify-center items-center rounded-md bg-primary text-white font-bold'>
                            <h1>Log In</h1>
                        </button>
                    </form>
                    <div className='flex justify-center items-center gap-2 mt-8'>
                        {/* <Image className='w-32' src={hrLine} alt="" /> */}
                        <span className='text-gray-600'>or</span>
                        {/* <Image className='w-32' src={hrLine} alt="" /> */}
                    </div>
                    <div className='flex justify-center items-center gap-6 md:gap-8 mt-8'>
                        <div className='w-36 md:w-52 h-12 border rounded-md flex justify-center items-center gap-4'>
                            <Image className='w-8' src={facebook} alt="" />
                            <h1 className='text-gray-900 font-bold'>Facebook</h1>
                        </div>
                        <div className='w-36 md:w-52 h-12 border rounded-md flex justify-center items-center gap-4'>
                            <Image className='w-8' src={google} alt="" />
                            <h1 className='text-gray-900 font-bold'>Google</h1>
                        </div>
                    </div>
                    <h1 className='mt-6 text-sm text-gray-600 text-center'>Don’t have any account? Click here to <Link href='/register' className='text-primary font-bold'>Register</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default index;