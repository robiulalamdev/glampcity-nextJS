import React, { useContext, useState } from 'react';
// import hrLine from '../../assets/icons/login-register-icons/hrLine.png'
import facebook from '../../assets/icons/login-register-icons/facebook.png'
import google from '../../assets/icons/login-register-icons/google.png'
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/router';
import SuccessAlert from '@/components/AlertComponents/SuccessAlert';
import ButtonSpinner from '@/components/Loaders/ButtonSpinner';
import { AuthContext } from '@/ContextAPI/AuthProvider';


const index = () => {
    const { user, userRefetch } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [show, setShow] = useState(false)
    const [isloading, setIsloading] = useState(false)

    const [emailResult, setEmailResult] = useState("")
    const [passwordResult, setPasswordResult] = useState("")

    const router = useRouter()

    const handleLogin = (data) => {
        setIsloading(true)
        fetch(`https://server.theglampcity.com/api/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                if (data?.message?.emailMessage) {
                    setEmailResult(data?.message?.emailMessage)
                    setIsloading(false)
                }
                if (data?.message?.passwordMessage) {
                    setPasswordResult(data?.message?.passwordMessage)
                    setIsloading(false)
                }


                if (data?.success === true) {
                    localStorage.setItem('glampcity-token', data.token)
                    setIsloading(false)
                }
                if (data?.token) {
                    const token = localStorage.getItem('glampcity-token')
                    if (token) {
                        userRefetch()
                        setIsloading(false)
                        router.push('/home')
                        setShow(true)
                    }
                }
            })
    }


    return (
        <div className='bg-[#F5F5F5] min-w-full md:min-h-screen'>
            <div className='max-w-[1440px] mx-auto md:pt-16'>
                <div className='w-full md:w-[550px] bg-white py-8 rouonded-xl md:shadow-md md:border mx-auto'>
                    <h1 className='text-3xl font-bold text-center text-primary py-4'>Log In</h1>

                    <form onSubmit={handleSubmit(handleLogin)} className='px-6 md:px-12'>
                        <div className='flex flex-col items-start gap-1 mb-4'>
                            <label className='text-left font-bold text-gray-900' htmlFor="email" id='email'>Email address <span className='text-primary'>*</span></label>
                            <input {...register('email', { required: 'Email is required' })}
                                onChange={(e) => setEmailResult("")}
                                className={`w-full h-10 px-3 rounded focus:outline-primary
                                ${emailResult || errors.email ? "border border-red-600" : "border"}`}
                                type="email" name="email" id="email" />
                            {errors.email && <p className='text-red-600 text-sm'>{errors.email.message}</p>}
                            {emailResult && <p className='text-red-600 text-sm'>{emailResult}</p>}
                        </div>

                        <div className='flex flex-col items-start gap-1 mb-1'>
                            <label className='text-left font-bold text-gray-900' htmlFor="password" id='password'>Password <span className='text-primary'>*</span></label>
                            <input {...register('password', { required: 'Password is required' })}
                                onChange={(e) => setPasswordResult("")}
                                className={`w-full h-10 px-3 rounded focus:outline-primary
                                ${passwordResult || errors.password ? "border border-red-600" : "border"}`} type="password" name="password" id="password" />
                            {errors.password && <p className='text-red-600 text-sm'>{errors.password.message}</p>}
                            {passwordResult && <p className='text-red-600 text-sm'>{passwordResult}</p>}
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

                        <button type="submit" className='w-36 h-10 mx-auto mt-8 flex justify-center items-center rounded-md bg-primary hover:bg-darkPrimary duration-200 text-white font-bold'>
                            {
                                isloading ? <div className='flex items-center gap-2'><h1>Log in</h1><ButtonSpinner className="w-5" /></div> : <h1>Log in</h1>
                            }
                        </button>

                    </form>
                    <div className='flex justify-center items-center gap-2 mt-4'>
                        {/* <Image className='w-32' src={hrLine} alt="" /> */}
                        <span className='text-gray-600'>or</span>
                        {/* <Image className='w-32' src={hrLine} alt="" /> */}
                    </div>
                    <div className='flex justify-center items-center gap-6 mt-4'>
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

            {
                show && <SuccessAlert show={show} setShow={setShow} textResult={"User Login Successfull"} />
            }
        </div>
    );
};

export default index;