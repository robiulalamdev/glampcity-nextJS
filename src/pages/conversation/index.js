import ChatBox from '@/components/ConversationCompo/ChatBox';
import ConversationChat from '@/components/ConversationCompo/ConversationChat';
import { useAuth } from '@/Hooks/getAuth';
import { setOnlineUsers, setReceiverData } from '@/Slices/conversationSlice';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client'

const Conversation = () => {
    const { receiverData, onlineUsers } = useSelector((state) => state.conversationSlice)
    const user = useAuth()
    const [open, setOpen] = useState(true)
    const [chats, setChats] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const dispatch = useDispatch()
    const socket = useRef()

    // console.log(onlineUsers);

    const handleReceiverData = (data) => {
        setCurrentChat(data)
        const userId = data.members.find(id => id !== user?._id)
        fetch(`https://heylink.ahmadalanazi.com/api/user/${userId}`,)
            .then(res => res.json())
            .then(data => {
                dispatch(setReceiverData(data))
            })
    }

    useEffect(() => {
        socket.current = io("http://localhost:8000")
        socket.current.emit('new-user-add', user?._id)
        socket.current.on('get-users', (users) => {
            dispatch(setOnlineUsers(users))
        })
    }, [user])

    // -----------------------
    useEffect(() => {
        fetch(`https://heylink.ahmadalanazi.com/api/chat/${user?._id}`)
            .then(res => res.json())
            .then(data => setChats(data))
    })
    return (
        <section className='max-w-[1440px] mx-auto relative px-4 overflow-y-hidden'>
            <div className='flex justify-between w-full'>
                <div
                    className={`absolute md:relative z-50 md:z-10 duration-300 min-h-full overflow-y-auto max-h-[450px] pt-2 px-2 hidden md:block flex flex-col items-start gap-3 w-72 ${open ? 'left-0' : '-left-[300px]'}`}>
                    <input className='px-3 w-full h-10 border rounded focus:outline-none' type="search" name="search" id="" placeholder='Search Your Chat' />
                    {
                        chats?.map((chat, i) => <div onClick={() => handleReceiverData(chat)}>
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

// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await fetch(`https://heylink.ahmadalanazi.com/api/chat/${user?._id}`)
//     const data = await res.json()
//     // Pass data to the page via props
//     return { props: { data } }
// }

export default Conversation;