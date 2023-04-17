import React, { useEffect, useRef } from 'react';

const Dropdown = ({ items, getData, close }) => {


    let dropdwonRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdwonRef.current.contains(e.target)) {
                close(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <div ref={dropdwonRef}
            className='absolute z-auto top-8 border-x border-b border-gray-400 hover:border-sky-600 focus:outline-none shadow w-full max-h-40 overflow-y-auto'>
            {
                items?.map(item => (
                    <button onClick={() => getData(item?.title)}
                        className='w-full h-10 flex justify-start items-center bg-white hover:bg-primary hover:text-white text-sm px-4 duration-200 ease-in'>
                        <h1>{item?.title}</h1>
                    </button>
                ))
            }
        </div>
    );
};

export default Dropdown;