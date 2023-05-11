import { useState } from 'react';
// import hrLine from '../../assets/icons/login-register-icons/hrLine.png'
import facebook from '../../assets/icons/login-register-icons/facebook.png'
import google from '../../assets/icons/login-register-icons/google.png'
import arrowDown from '../../assets/icons/login-register-icons/arrow-down.png'
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setRole, setSelectedCountry, setShowPhoneCode } from '@/Slices/loginRegisterSlice';
import PhoneCodeDropdown from '@/components/LoginRegisterCompo/PhoneCodeDropdown';
import { useRouter } from 'next/router';
import { Checkbox } from 'antd';
import SuccessAlert from '@/components/AlertComponents/SuccessAlert';
import ButtonSpinner from '@/components/Loaders/ButtonSpinner';

const index = () => {
    const { role, selectedCountry, countries, selectedPhoneCode, showPhoneCode } = useSelector((state) => state.loginRegisterSlice)
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [agree, setAgree] = useState(false)
    const [show, setShow] = useState(false)
    const [isloading, setIsloading] = useState(false)

    // console.log(countries);

    const [countryResult, setCountryResult] = useState("")
    const [companyResult, setCompanyResult] = useState("")
    const [emailResult, setEmailResult] = useState("")
    const [passwordResult, setPasswordResult] = useState("")

    const router = useRouter()

    const handleRegister = (data) => {
        console.log(data);
        setIsloading(true)

        if (selectedCountry) {
            setIsloading(false)
            setCountryResult("Please Select Country")
            return;
        }
        if (data?.password !== data?.confirmPassword) {
            setIsloading(false)
            setPasswordResult("Password Not Matched")
            return;
        }

        const newUser = {
            name: data?.firstName + ' ' + data?.lastName,
            country: data?.country,
            email: data?.email,
            phone: data?.phone && data?.phoneCode + data?.phone,
            password: data?.password,
            company: data?.company,
            role: role,
        }
        // console.log(newUser);
        fetch(`http://localhost:5055/api/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {

                if (data?.message?.companyMessage) {
                    setCompanyResult(data?.message?.companyMessage)
                    setIsloading(false)
                }
                if (data?.message?.emailMessage) {
                    setEmailResult(data?.message?.emailMessage)
                    setIsloading(false)
                }
                if (data?.success === true) {
                    setIsloading(false)
                    router.push('/personalize')
                    setShow(true)
                }
                else {
                    setIsloading(false)
                }
            })
    }

    // console.log(agree);

    return (
        <div className='bg-[#F5F5F5] min-w-full md:min-h-screen'>
            <div className='max-w-[1440px] mx-auto md:pt-16'>
                <div className='w-full md:w-[550px] bg-white py-8 rouonded-xl md:shadow-md md:border mx-auto'>
                    <h1 className='text-3xl font-bold text-center text-primary py-3'>Registration</h1>

                    <form onSubmit={handleSubmit(handleRegister)} className='px-6 md:px-12'>

                        <div className="dropdown">

                            <div className='flex flex-col items-start gap-1 mb-3'>
                                <p className='text-left font-bold text-gray-900'>Your Region<span className='text-primary'>*</span></p>
                                <input {...register('country', { required: 'Region is required' })}
                                    onChange={() => setCountryResult("")}
                                    className='w-full h-10 px-3 border rounded focus:outline-primary cursor-pointer'
                                    type="country" name="country" value={selectedCountry} id="dropdown-btn" readOnly placeholder="Select Your Region" />

                                {errors.country && !countryResult && <p className='text-red-600 text-sm'>{errors.country.message}</p>}
                                {countryResult && <p className='text-red-600 text-sm'>{countryResult}</p>}
                            </div>

                            <ul className="absolute top-full left-0 hidden dropdown_menu dropdown_menu--animated dropdown_menu-6
                    grid grid-cols-1 bg-slate-50 shadow-xl shadow-gray-900/30 rounded-md w-full">
                                {
                                    countries?.map((country, i) => (
                                        <span key={i} onClick={() => dispatch(setSelectedCountry(country.fullName))}
                                            className="flex items-center px-2 h-8 w-full hover:bg-primary hover:text-white">
                                            <span>{country.fullName}</span>
                                        </span>
                                    ))
                                }

                            </ul>
                        </div>

                        <div className='mb-6 flex flex-col items-start gap-1'>
                            <label className='text-left font-bold text-gray-900' htmlFor="region" id='region'>Please Select Trade Role</label>
                            <div className='flex items-center gap-6'>
                                <div onClick={() => dispatch(setRole('buyer'))} >
                                    <input className='cursor-pointer' checked={role === 'buyer' && true} type="radio" name="role" id="role1" />
                                    <label className='cursor-pointer text-gray-600 text-sm ml-2' htmlFor="role1" id='role1'>Buyer</label>
                                </div>
                                <div onClick={() => dispatch(setRole('seller'))}>
                                    <input className='cursor-pointer' checked={role === 'seller' && true} type="radio" name="role" id="role2" />
                                    <label className='cursor-pointer text-gray-600 text-sm ml-2' htmlFor="role2" id='role2'>Seller</label>
                                </div>
                                <div onClick={() => dispatch(setRole('both'))}>
                                    <input className='cursor-pointer' checked={role === 'both' && true} type="radio" name="role" id="role3" />
                                    <label className='cursor-pointer text-gray-600 text-sm ml-2' htmlFor="role3" id='role3'>Both</label>
                                </div>
                            </div>
                            {role === '' && <p className='text-red-600 text-sm'>Please select Role</p>}
                        </div>

                        <div className='flex flex-col items-start gap-1 mb-3'>
                            <label className='text-left font-bold text-gray-900' htmlFor="email" id='email'>Email address <span className='text-primary'>*</span></label>
                            <input {...register('email', { required: 'Email is required' })}
                                onChange={(e) => setEmailResult("")}
                                className='w-full h-10 px-3 border rounded focus:outline-primary'
                                type="email" name="email" placeholder='Enter Your Email' />
                            {errors.email && !emailResult && <p className='text-red-600 text-sm'>{errors.email.message}</p>}
                            {emailResult && <p className='text-red-600 text-sm'>{emailResult}</p>}
                        </div>

                        <div className='flex flex-col items-start gap-1 mb-3'>
                            <label className='text-left font-bold text-gray-900' htmlFor="password" id='password'>Password <span className='text-primary'>*</span></label>
                            <input {...register('password', { required: 'Password is required' })}
                                onChange={(e) => setPasswordResult("")}
                                className='w-full h-10 px-3 border rounded focus:outline-primary'
                                type="password" name="password" placeholder='Enter Your Password' />
                            {errors.password && !passwordResult && <p className='text-red-600 text-sm'>{errors.password.message}</p>}
                            {passwordResult && <p className='text-red-600 text-sm'>{passwordResult}</p>}
                        </div>

                        <div className='flex flex-col items-start gap-1 mb-3'>
                            <label className='text-left font-bold text-gray-900' htmlFor="confirmPassword" id='confirmPassword'>Confirm Password <span className='text-primary'>*</span></label>
                            <input {...register('confirmPassword', { required: 'Confirm Password is required' })}
                                onChange={(e) => setPasswordResult("")}
                                className='w-full h-10 px-3 border rounded focus:outline-primary'
                                type="password" name="confirmPassword" placeholder='Enter Confirm Password' />
                            {errors.confirmPassword && !passwordResult && <p className='text-red-600 text-sm'>{errors.confirmPassword.message}</p>}
                            {passwordResult && <p className='text-red-600 text-sm'>{passwordResult}</p>}
                        </div>

                        <div className='flex flex-col items-start gap-1 mb-3'>
                            <label className='text-left font-bold text-gray-900' htmlFor="company" id='company'>Company Name <span className='text-primary'>*</span></label>
                            <input {...register('company', { required: 'Company Name is required' })}
                                onChange={(e) => setCompanyResult("")}
                                className='w-full h-10 px-3 border rounded focus:outline-primary'
                                type="text" name="company" placeholder='Enter Your Company' />
                            {errors.company && !companyResult && <p className='text-red-600 text-sm'>{errors.company.message}</p>}
                            {companyResult && <p className='text-red-600 text-sm'>{companyResult}</p>}
                        </div>

                        <div className='grid grid-cols-2 gap-2 mb-6'>
                            <div className='flex flex-col items-start gap-1'>
                                <label className='text-left font-bold text-gray-900' htmlFor="firstName" id='firstName'>First Name Name <span className='text-primary'>*</span></label>
                                <input {...register('firstName', { required: 'First Name Name is required' })}
                                    className='w-full h-10 px-3 border rounded focus:outline-primary'
                                    type="text" name="firstName" placeholder='Enter First Name' />
                                {errors.firstName && <p className='text-red-600 text-sm'>{errors.firstName.message}</p>}
                            </div>

                            <div className='flex flex-col items-start gap-1 mb-3'>
                                <label className='text-left font-bold text-gray-900' htmlFor="lastName" id='lastName'>Last Name Name</label>
                                <input {...register('lastName')}
                                    className='w-full h-10 px-3 border rounded focus:outline-primary'
                                    type="text" name="lastName" placeholder='Enter Last Name' />
                                {errors.lastName && <p className='text-red-600 text-sm'>{errors.lastName.message}</p>}
                            </div>
                        </div>

                        <div className='flex flex-col items-start gap-1 mb-3'>
                            <label className='text-left font-bold text-gray-900' htmlFor="phoneCode" id='phoneCode'>Phone Number <span className='text-primary'>*</span></label>
                            <div className='flex justify-between items-start w-full gap-2'>
                                <div className='relative'>
                                    <div onClick={() => dispatch(setShowPhoneCode(!showPhoneCode))}
                                        className=' cursor-pointer w-20 h-10 border rounded flex items-center px-2'>
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
                                    className='flex-grow w-full h-10 px-3 border rounded focus:outline-primary' type="number" name="phone" placeholder='Enter Your Phone' />
                            </div>
                            {errors.phone && <p className='text-red-600 text-sm'>{errors.phone.message}</p>}
                        </div>

                        <div className='flex items-center cursor-pointer'>
                            <Checkbox onChange={(e) => setAgree(e.target.checked)}>I have read the <Link className='text-primary' href=''>Privacy Policy</Link> and agree to it. *</Checkbox>

                        </div>

                        {
                            agree ? <button type="submit" className='w-36 h-10 mx-auto mt-8 flex justify-center items-center rounded-md bg-primary hover:bg-darkPrimary duration-200 text-white font-bold'>
                                {
                                    isloading ? <div className='flex items-center gap-2'><h1>Register</h1><ButtonSpinner className="w-5" /></div> : <h1>Register</h1>
                                }
                            </button>
                                :
                                <button disabled className='w-36 h-10 mx-auto mt-8 flex justify-center items-center rounded-md bg-gray-500 cursor-not-allowed text-white font-bold'>
                                    <h1>Register</h1>
                                </button>
                        }
                    </form>

                    <div className='flex justify-center items-center gap-2 mt-4'>
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
                    <h1 className='mt-6 text-sm text-gray-600 text-center'>Already have an account? Click here to <Link href='/login' className='text-primary font-bold'>Log in</Link></h1>
                </div>
            </div>

            {
                show && <SuccessAlert show={show} setShow={setShow} textResult={"User Register Successfull"} />
            }
        </div>
    );
};

export default index;