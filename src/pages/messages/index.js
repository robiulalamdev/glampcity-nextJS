import SendInquiry from '@/components/Messages-Components/SendInquiry/SendInquiry';
import React from 'react';

const Messages = () => {
    return (
        <section className='bg-white'>
            <div className='max-w-[1440px] mx-auto px-3 md:px-8'>
                <SendInquiry />
            </div>
        </section>
    );
};

export default Messages;