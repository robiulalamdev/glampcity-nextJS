import { AuthContext } from '@/ContextAPI/AuthProvider';
import React, { useContext, useEffect, useRef } from 'react';

const Modal = ({ openModal, closeModal, className, children }) => {
    const { user } = useContext(AuthContext)


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
        <div className='z-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-primary bg-opacity-25 w-full h-full'>
            <div ref={modalRef} className='w-full md:max-w-[1000px] h-fit bg-white shadow-xl p-5 m-5 zoom-in'>
                {children}
            </div >
        </div >
    );
};

export default Modal;