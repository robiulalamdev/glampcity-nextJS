import React, { useEffect, useState } from "react";

const SuccessAlert = ({ show, setShow, textResult }) => {
    const [animate, setAnimate] = useState(false)

    console.log(textResult);

    useEffect(() => {
        if (show) {
            setTimeout(() => {
                setShow(false)
            }, 3000);
        }
    }, [])
    useEffect(() => {
        if (show) {
            setTimeout(() => {
                setAnimate(true)
            }, 250);
        }
    }, [])

    return (
        <React.Fragment>

            <div
                show={show}
                className="z-50 fixed top-0 right-0 bottom-0 left-0 w-full h-full flex justify-center items-start bg-transparent"
            >
                <div className={`flex w-full h-16 max-w-sm overflow-hidden rounded-lg shadow-md bg-white 
                ${animate ? "mt-8 duration-75 ease-in shadow-xl shadow-green-300" : "-mt-20 duration-100"}`}>
                    <div className="flex items-center justify-center w-20 h-full bg-green-500">
                        <svg className="w-6 h-6 mx-auto text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                        </svg>
                    </div>

                    <div className="flex items-center px-4 bg-white">
                        <div className="mx-3">
                            <span className="font-semibold text-green-500">Success</span>
                            <p className="text-sm text-gray-600 dark:text-gray-200">{textResult}</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SuccessAlert;