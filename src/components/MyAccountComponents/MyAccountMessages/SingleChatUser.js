import { setChatId, setReceiverData } from '@/Slices/myAccountSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SingleChatUser = ({ chatData }) => {
    const { receiverData, chatId } = useSelector((state) => state.myAccountSlice)
    const [receiverUser, setReceiverUser] = useState(null)
    const [messageData, setMessageData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        fetch(`http://localhost:5055/api/store/${chatData?.members[1]}`)
            .then(res => res.json())
            .then(data => {
                setReceiverUser(data);
            })
    }, [chatData?.members[0], chatData?.members[1]])

    const handleSetData = () => {
        dispatch(setChatId(chatData?._id))
        dispatch(setReceiverData(receiverUser))
    }

    return (
        <button onClick={() => handleSetData()}
            className={`w-full flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer
            ${receiverData?._id === chatData?.members[1] ? "bg-gray-200" : "hover:bg-gray-100"}`}>
            <button className='flex items-center justify-center min-w-[40px] h-10 rounded-full bg-blue-600 object-cover text-white text-[18px]'>
                {
                    receiverUser?.image ? <img className="object-cover w-10 h-10 rounded-full"
                        src={receiverUser?.image} alt="username" />
                        :
                        <span>{receiverUser?.name?.slice(0, 1)} </span>
                }
            </button>

            <div className="w-full flex flex-col">
                <div className="flex justify-between">
                    <span className="block ml-2 font-semibold text-gray-600">{receiverUser?.name}</span>
                    <span className="block ml-2 text-sm text-gray-600">25 minutes</span>
                </div>
                <span className="block ml-2 text-sm text-gray-600 text-left">bye</span>
            </div>
        </button>
    );
};

export default SingleChatUser;