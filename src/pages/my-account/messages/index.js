import MessagesChatSidebar from '@/components/MyAccountComponents/MyAccountMessages/MessagesChatSidebar';
import MyAccountMessageArea from '@/components/MyAccountComponents/MyAccountMessages/MyAccountMessageArea';
import React from 'react';

const index = () => {
    return (

        <main className='bg-slate-100 h-screen w-full '>
            <div className='max-w-[1440px] mx-auto'>
                <div className='grid grid-cols-[auto_1fr]'>
                    <MessagesChatSidebar />
                    <div className='h-screen w-full relative z-30'>
                        <MyAccountMessageArea />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default index;