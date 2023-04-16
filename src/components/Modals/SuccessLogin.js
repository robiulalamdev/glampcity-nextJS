import React, { useEffect, useRef, useState } from 'react';

const SuccessLogin = ({ closeModal }) => {

    let modalRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!modalRef.current.contains(e.target)) {
                closeModal(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
        <div className='z-50 fixed top-0 right-0 bottom-0 left-0 w-full h-full flex justify-center items-start bg-primary bg-opacity-50'>
            <div ref={modalRef}
                class="flex flex-row items-center rounded shadow-lg overflow-hidden w-full sm:w-11/12 md:max-w-2xl hover:shadow-xl bg-white hover:bg-green-50 transition-transform hover:scale-95 group mt-14" id='toast'>
                <div class="h-full py-8 px-2 bg-green-400 group-hover:bg-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 text-green-700 group-hover:text-green-800"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div class="mx-4 flex-row w-full">
                    <div class="flex flex-row items-center justify-between">
                        <h1 class="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200">Success</h1>
                        <svg onClick={() => closeModal(false)} xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-xs sm:text-sm font-medium text-gray-500 pr-2 sm:pr-0 dark:text-gray-300">
                        Order Placed Successfull
                    </p>
                </div>
            </div>
        </div >
    );
};

export default SuccessLogin;