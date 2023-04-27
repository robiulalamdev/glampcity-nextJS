import React, { useEffect, useRef, useState } from 'react';

const Drawer = ({ drawer, close, placement, className, children }) => {

    let drawerRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!drawerRef?.current?.contains(e.target)) {
                close && close(false);
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
                drawer && <div className='fixed top-0 left-0 right-0 bottom-0 bg-gray-600 bg-opacity-50 w-full h-full cursor-pointer' style={{ zIndex: "500" }} >
                    <div ref={drawerRef}
                        className={`fixed z-auto ${className} scrollbar
            ${drawer && `${placement}`}`}>

                        {children}

                    </div>
                </div>
            }
        </>
    );
};

export default Drawer;