import React from 'react';

const SendMessageBox = () => {
    return (
        <div>
            {/* <input className='w-full h-14 bg-white border focus:outline-none' type="text" /> */}
            <InputEmoji
                setValue={newMessage}
                onChange={handleChange}
            ></InputEmoji>
            <button onClick={() => handleSendMessage()} type='submit' className='w-12 h-8 bg-blue-600 text-white'>SEND</button>
        </div>
    );
};

export default SendMessageBox;