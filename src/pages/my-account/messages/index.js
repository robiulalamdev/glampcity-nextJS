import { AuthContext } from '@/ContextAPI/AuthProvider';
import MessagesChatSidebar from '@/components/MyAccountComponents/MyAccountMessages/MessagesChatSidebar';
import MyAccountMessageArea from '@/components/MyAccountComponents/MyAccountMessages/MyAccountMessageArea';
import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const index = () => {
    const { user } = useContext(AuthContext)
    const { receiverData, chatId, fullScreen } = useSelector((state) => state.myAccountSlice)

    const [chatData, setChatData] = useState([]);
    // console.log(user?._id);
    useEffect(() => {
        fetch(`http://localhost:5055/api/storechat/640c586a9d959d1d04ea94b5`)
            .then(res => res.json())
            .then(data => {
                setChatData(data);
            })

    }, [])


    return (
        <main className={`bg-slate-100 h-screen w-full
        ${fullScreen && "fixed top-0 right-0 bottom-0 left-0 z-[1000] w-full"}`}>
            <div className='max-w-[1440px] mx-auto'>
                <div className='lg:grid lg:grid-cols-[auto_1fr]'>
                    { }
                    <MessagesChatSidebar chatData={chatData} />
                    <div className='h-screen w-full relative z-30'>

                        {
                            receiverData ? <MyAccountMessageArea chatId={chatId} />
                                : (
                                    <div className='flex justify-center items-center'>
                                        <h1>Please Select</h1>
                                    </div>
                                )
                        }

                    </div>
                </div>
            </div>
        </main>
    );
};


// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await 
//     const data = await res.json()

//     // Pass data to the page via props
//     return { props: { data } }
// };

export default index;