import React, { useEffect, useRef } from 'react';

const Modal = ({ open, close, className, children }) => {

    console.log(open);
    let modalRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!modalRef.current.contains(e.target)) {
                close(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
        <>
            {
                open && <div className='z-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-primary bg-opacity-25 w-full h-full'>
                    <div ref={modalRef} className={`${className} h-fit shadow-xl p-5 m-5 zoom-in`}>
                        {children}
                    </div >
                </div >
            }
        </>
    );
};

export default Modal;