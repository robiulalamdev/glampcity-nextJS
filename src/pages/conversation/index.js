import ChatBox from '@/components/ConversationCompo/ChatBox';
import ConversationChat from '@/components/ConversationCompo/ConversationChat';
import { setOnlineUsers, setReceiverData } from '@/Slices/conversationSlice';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const user = { "_id": { "$oid": "643a66f8493d745a28949ad2" }, "role": "seller", "verified": "true", "describeYourBusiness": ["manufacturer", "Online shop", "", "", "Distributor", "", "", ""], "supplier": ["manufacturer", "Online shop", "Trade company", "", "Distributor", "Buying office", "", ""], "name": "sakil khan", "email": "robiul@gmail.com", "company": "programming", "country": "Bangladesh", "phone": "", "password": "$2a$10$n00AVgxOa9ouMhhtkeJIo.Mg89X8RkQ6YfVsQrSJcRgvEH.ww4bfe", "createdAt": { "$date": { "$numberLong": "1678530666906" } }, "updatedAt": { "$date": { "$numberLong": "1678537044455" } }, "__v": { "$numberInt": "0" }, "reverentSubCategories": { "electronics": "smartphone", "tents": "ropes", "autoAndTransportation": "car" } }

const Conversation = () => {
    const { receiverData, onlineUsers } = useSelector((state) => state.conversationSlice)
    const [open, setOpen] = useState(true)
    const [chats, setChats] = useState(["643a66f8493d745a28949ad2", "643a66f8493d745a28949ad2dfd"])
    const [currentChat, setCurrentChat] = useState(null)


    return (
        <section className='max-w-[1440px] mx-auto relative px-4 overflow-y-hidden'>
            <div className='flex justify-between w-full'>
                <div
                    className={`absolute md:relative z-50 md:z-10 duration-300 min-h-full overflow-y-auto max-h-[450px] pt-2 px-2 hidden md:block flex flex-col items-start gap-3 w-72 ${open ? 'left-0' : '-left-[300px]'}`}>
                    <input className='px-3 w-full h-10 border rounded focus:outline-none' type="search" name="search" id="" placeholder='Search Your Chat' />
                    {
                        chats?.map((chat, i) => <div>
                            <ConversationChat key={i} data={chat} currentUser={user} />
                        </div>)
                    }
                </div>

                <div className='w-full h-full bg-blue-50'>
                    {
                        receiverData ? <ChatBox chat={currentChat} currentUser={user} />
                            :
                            <div className='min-h-[520px] w-full flex justify-center items-center'>
                                <h1 className='text-center font-bold text-2xl'>Please Select Your Chat</h1>
                            </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Conversation;