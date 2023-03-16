import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const AddDeliveryAddressModal = ({ closeModal }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [deleveryAddress, setDeleveryAddress] = useState('')
    const handleAddAddress = (data) => {
        if (deleveryAddress) {
            console.log(data);
            closeModal(false);
        }
    }

    let modalRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!modalRef.current.contains(e.target)) {
                closeModal(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
        <div ref={modalRef} className='z-50 -top-32 w-full md:max-w-[1000px] h-fit bg-white shadow-xl absolute p-5 m-5'>
            <div>
                <h1 className='text-center font-bold text-gray-600 text-xl'>Add New Delivery Address</h1>

                <form onSubmit={handleSubmit(handleAddAddress)}
                    className='px-6 md:px-12 mt-4'>
                    <div className='grid md:grid-cols-2 gap-6 '>
                        <div className=''>

                            <div className='flex flex-col items-start gap-2 mb-6'>
                                <label className='text-left font-bold text-gray-900' htmlFor="name" id='name'>Full Name <span className='text-primary'>*</span></label>
                                <input {...register('name', { required: 'Full Name is required' })}
                                    className='w-full h-10 px-3 border rounded focus:outline-primary' type="text" name="name" id="name" />
                                {errors.name && <p className='text-red-600 text-sm'>{errors.name.message}</p>}
                            </div>

                            <div className='flex flex-col items-start gap-2 mb-6'>
                                <label className='text-left font-bold text-gray-900' htmlFor="phone" id='phone'>Mobile Number <span className='text-primary'>*</span></label>
                                <input {...register('phone', { required: 'Mobile Number is required' })}
                                    className='w-full h-10 px-3 border rounded focus:outline-primary' type="number" name="phone" id='phone' />
                                {errors.phone && <p className='text-red-600 text-sm'>{errors.phone.message}</p>}
                            </div>

                            <div className='flex flex-col items-start gap-2 mb-6'>
                                <label className='text-left font-bold text-gray-900' htmlFor="providence" id='providence'>Providence <span className='text-primary'>*</span></label>
                                <input {...register('providence', { required: 'Providence is required' })}
                                    className='w-full h-10 px-3 border rounded focus:outline-primary' type="text" name="providence" id='providence' />
                                {errors.providence && <p className='text-red-600 text-sm'>{errors.providence.message}</p>}
                            </div>

                            <div className='flex flex-col items-start gap-2 mb-6'>
                                <label className='text-left font-bold text-gray-900' htmlFor="providence" id='providence'>Area <span className='text-primary'>*</span></label>
                                <input {...register('area', { required: 'Area is required' })}
                                    className='w-full h-10 px-3 border rounded focus:outline-primary' type="text" name="area" id='area' />
                                {errors.area && <p className='text-red-600 text-sm'>{errors.area.message}</p>}
                            </div>
                        </div>

                        <div>
                            <div className='flex flex-col items-start gap-2 mb-6'>
                                <label className='text-left font-bold text-gray-900' htmlFor="address" id='providence'>Address <span className='text-primary'>*</span></label>
                                <input {...register('address', { required: 'Address is required' })}
                                    className='w-full h-10 px-3 border rounded focus:outline-primary' type="text" name="address" id='address' />
                                {errors.address && <p className='text-red-600 text-sm'>{errors.address.message}</p>}
                            </div>

                            <div className='flex flex-col items-start gap-2 mb-6'>
                                <label className='text-left font-bold text-gray-900' htmlFor="landmark" id='providence'>Landmark</label>
                                <input {...register('landmark')}
                                    className='w-full h-10 px-3 border rounded focus:outline-primary' type="text" name="landmark" id='landmark' />
                                {errors.landmark && <p className='text-red-600 text-sm'>{errors.landmark.message}</p>}
                            </div>

                            <div className='flex flex-col items-start gap-2 mb-6'>
                                <label className='text-left font-bold text-gray-900' htmlFor="city" id='city'>City <span className='text-primary'>*</span></label>
                                <input {...register('city', { required: 'City is required' })}
                                    className='w-full h-10 px-3 border rounded focus:outline-primary' type="text" name="city" id='city' />
                                {errors.city && <p className='text-red-600 text-sm'>{errors.city.message}</p>}
                            </div>


                            <div className='flex flex-col items-start gap-2 mb-6'>
                                <h1 className='text-left font-bold text-gray-900' >Select a label for effective delivery <span className='text-primary'>*</span></h1>
                                <div className='grid grid-cols-2 gap-4 w-full'>
                                    <input onClick={() => setDeleveryAddress('home')}
                                        {...register('deleveryAddress', { required: 'Delevery is required' })}
                                        className={`w-full text-center h-10 cursor-pointer border rounded focus:outline-none ${deleveryAddress === 'home' ? 'bg-primary text-white' : 'bg-white text-black'}`} type='text' defaultValue='Home' name='deleveryAddress' readOnly />
                                    <input onClick={() => setDeleveryAddress('office')}
                                        {...register('deleveryAddress', { required: 'Delevery is required' })}
                                        className={`w-full text-center h-10 cursor-pointer border rounded focus:outline-none ${deleveryAddress === 'office' ? 'bg-primary text-white' : 'bg-white text-black'}`} type='text' defaultValue='Office' name='deleveryAddress' readOnly />
                                </div>
                                {errors.deleveryAddress && <p className='text-red-600 text-sm'>{errors.deleveryAddress.message}</p>}
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        {
                            deleveryAddress ? <button className='w-56 h-10 rounded-3xl flex justify-center items-center bg-primary' type="submit">
                                <span className='text-white'>SAVE</span>
                            </button>
                                :
                                <button disabled className='w-56 cursor-not-allowed h-10 rounded-3xl flex justify-center items-center bg-gray-600' type="submit">
                                    <span className='text-white'>SAVE</span>
                                </button>
                        }
                        <button onClick={() => closeModal(false)} className='md:hidden w-56 h-10 rounded-3xl flex justify-center items-center bg-rose-600' type="submit">
                            <span className='text-white'>Cancel</span>
                        </button>
                    </div>
                </form>

            </div>
        </div >
    );
};

export default AddDeliveryAddressModal;