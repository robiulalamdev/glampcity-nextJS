import React, { useEffect, useState } from 'react';

const ConversationChat = ({ data, currentUser }) => {
    const [receiverUser, setReceiverUser] = useState(null)
    // console.log(currentUser);
    // console.log(receiverUser);
    return (
        <div
            className='flex items-center gap-2 border-b hover:bg-gray-300 p-3 sticky z-50 bg-white top-0 cursor-pointer'>
            <div className='relative flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full text-white font-semibold'>
                <span>{receiverUser?.name?.slice(0, 1)}</span>
                <div className='absolute bottom-0 right-0 rounded-full w-3 h-3 bg-green-500'></div>
            </div>
            <div className='flex flex-col items-start'>
                <span className='text-blue-600 text-sm'>{receiverUser?.name}</span>
                <span className='text-green-600 text-sm'>online</span>
            </div>
        </div>
    );
};

export default ConversationChat;