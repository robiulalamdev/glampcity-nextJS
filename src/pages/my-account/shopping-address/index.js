import React, { useContext, useEffect, useState } from 'react';
import MyAccountMain from '..';
import { AuthContext } from '@/ContextAPI/AuthProvider';
import SuccessAlert from '@/components/AlertComponents/SuccessAlert';
import AddDeliveryAddressModal from '@/components/Modals/ShoppingCartsModals/AddDeliveryAddressModal';
import ShoppingAddress from '@/components/Shopping-carts-Components/PlaceOrder/ShoppingAddress';

const MyShoppingAddress = () => {
    const { user, userRefetch } = useContext(AuthContext)
    const [allAddress, setAllAddress] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [show, setShow] = useState(false)
    const closeModal = () => {
        setOpenModal(false)
    }

    const getAddress = () => {
        fetch(`http://localhost:5055/api/address/${user?._id}`)
            .then(res => res.json())
            .then(data => {
                if (data?.status === "success") {
                    // console.log(data.data);
                    setAllAddress(data.data)
                }
            })
    }

    useEffect(() => {
        getAddress()
    }, [])


    return (
        <MyAccountMain>

            <h1 className='text-primary font-bold text-left text-xl uppercase' >Shopping Address</h1>

            <div className="">
                <button onClick={() => setOpenModal(true)}
                    className='w-full h-14 flex justify-center items-center rounded-md text-black cursor-pointer my-4 bg-[#0029FF14] hover:bg-primary hover:text-white duration-300 '>
                    <h1 className=' font-semibold text-xl'>+ Add New Address</h1>
                </button>

                <div className='grid grid-cols-1 gap-4 w-full' >
                    {
                        allAddress && allAddress.map((address, i) => <ShoppingAddress key={i} address={address} refetch={getAddress} />)
                    }
                </div>

            </div>

            <div className='flex justify-center items-center'>
                {
                    openModal && <AddDeliveryAddressModal closeModal={closeModal} sucsess={setShow} />
                }
                {
                    show && <SuccessAlert show={show} setShow={setShow} textResult="New Address Successfully Added" />
                }
            </div>

        </MyAccountMain>
    );
};

export default MyShoppingAddress;