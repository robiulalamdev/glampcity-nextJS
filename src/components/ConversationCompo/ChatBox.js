import React, { useEffect, useRef, useState } from 'react';
import { format } from 'timeago.js'
import InputEmoji from 'react-input-emoji'
import { io } from 'socket.io-client'
import { useSelector } from 'react-redux';

const ChatBox = ({ chat, currentUser }) => {
    const { receiverData } = useSelector((state) => state.conversationSlice)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [onlineUsers, setOnlineUsers] = useState([])
    const socket = useRef()
    const scroll = useRef()

    useEffect(() => {
        const fetchMessage = () => {
            fetch(`https://heylink.ahmadalanazi.com/api/message/${chat?._id}`,)
                .then(res => res.json())
                .then(data => {
                    setMessages(data);
                    // console.log(messages);
                })
        }
        if (chat !== null) {
            fetchMessage()
        }
    }, [chat])

    const handleChange = (newMessage) => {
        setNewMessage(newMessage)
    }


    const refetchMessage = () => {
        fetch(`https://heylink.ahmadalanazi.com/api/message/${chat?._id}`,)
            .then(res => res.json())
            .then(data => {
                setMessages(data);
                // console.log(messages);
            })
    }

    useEffect(() => {
        // console.log(currentUser?._id);
        socket.current = io("http://localhost:8000")
        socket.current.emit('new-user-add', currentUser?._id)
        socket.current.on('get-users', (users) => {
            setOnlineUsers(users)
        })
    }, [chat])

    const handleSendMessage = () => {
        const message = {
            chatId: chat._id,
            senderId: currentUser._id,
            text: newMessage
        }

        fetch(`https://heylink.ahmadalanazi.com/api/message`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(message)
        })
            .then(res => res.json())
            .then(data => {
                setMessages([...messages, data])
                setNewMessage('')

                // send message to socket server
                const receiverId = chat?.members?.find(id => id !== currentUser._id)
                const sendMessage = { ...message, receiverId }
                socket.current.emit("send-message", sendMessage)

                // receive message
                socket.current.on('receive-message', (receiveMessage) => {
                    refetchMessage()
                    // setMessages([...messages, receiveMessage])
                })

            })

    }



    // scrooll to last message
    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    return (
        <div class="relative border flex flex-col w-full">

            {/* <!-- Header --> */}
            <div class="sticky z-50 bg-white top-0 py-2 px-3 border-b w-full cursor-pointer bg-grey-lighter flex flex-row justify-between items-center">

                <div className='flex items-center gap-2 '>
                    <div className='relative flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full text-white font-semibold'>
                        <span>{receiverData?.name?.slice(0, 1)}</span>
                        <div className='absolute bottom-0 right-0 rounded-full w-3 h-3 bg-green-500'></div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <span className='text-blue-600 text-sm'>{receiverData?.name}</span>
                        <span className='text-green-600 text-sm'>online</span>
                    </div>
                </div>

                <div class="ml-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".6" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                </div>
            </div>


            <div class="flex-1 h-full overflow-y-auto" >
                <div className='relative p-6 max-h-[400px] overflow-y-auto'>
                    {
                        messages?.map(message => (
                            <div ref={scroll} className={`max-w-[320px] md:max-w-[450px] relative overflow-hidden flex flex-col text-white text-sm w-fit px-4 py-2 mb-4 rounded-t-xl 
                            ${message?.senderId === currentUser?._id ? 'bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mr-0 rounded-bl-xl' : 'bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto ml-0 rounded-br-xl'}`}>
                                <span className='text-left mb-1'>{message?.text}</span>
                                <span className='text-[10px] text-right text-white'>{format(message?.updatedAt)}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* <!-- Input --> */}
            <div class="bg-grey-lighter px-4 py-4 flex items-center">
                <div className='w-full flex items-center gap-2 px-3' >
                    <InputEmoji
                        setValue={newMessage}
                        onChange={handleChange}
                    ></InputEmoji>
                    <button onClick={() => handleSendMessage()} type='submit' className='w-16 rounded h-8 bg-blue-600 text-white'>SEND</button>
                </div>
            </div>
        </div >
    );
};

export default ChatBox;