import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const CreateOfferForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [product, setProduct] = useState(null)

    // 644a46a61d99756b22d24e76

    useEffect(() => {
        fetch(`http://localhost:5055/api/products/644a46a61d99756b22d24e76`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    console.log(product);
    const handleCreateOffer = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(handleCreateOffer)} className='p-2 md:px-6'>
            <h1 className='font-bold text-left text-xl text-black'>Create Offer</h1>
            <div>
                <div className='flex flex-col md:flex-row gap-4 w-full'>
                    <img className='w-full md:w-72 h-52 object-cover' src={product?.images[0]} alt="" />
                    <div className='flex flex-col gap-4 w-full '>
                        <div className='flex flex-col w-full'>
                            <span className='text-sm'>Product Name</span>
                            <input {...register('name', { required: true })}
                                className={`w-full h-10 px-3 rounded focus:outline-primary
                                ${errors.name ? "border border-red-600" : "border"}`}
                                type="text" name="name" readOnly value={product?.title} />
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='flex flex-col w-full'>
                                <span className='text-sm'>Price</span>
                                <input {...register('price', { required: true })}
                                    className={`w-full h-10 px-3 rounded focus:outline-primary
                                ${errors.price ? "border border-red-600" : "border"}`}
                                    type="number" name="price" />
                            </div>
                            <div className='flex flex-col w-full'>
                                <span className='text-sm'>Quantity</span>
                                <input {...register('quantity', { required: true })}
                                    className={`w-full h-10 px-3 rounded focus:outline-primary
                                ${errors.quantity ? "border border-red-600" : "border"}`}
                                    type="number" name="quantity" />
                            </div>
                        </div>

                        <div className='flex flex-col w-full'>
                            <span className='text-sm'>Description</span>
                            <textarea {...register('description', { required: true })}
                                className={`w-full min-h-[200px] px-3 rounded focus:outline-primary
                                ${errors.description ? "border border-red-600" : "border"}`}
                                type="number" name="description" />
                        </div>


                        <Button type='submit' >
                            Send Offer
                        </Button>

                    </div>
                </div>
            </div>
        </form>
    );
};

export default CreateOfferForm;