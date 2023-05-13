import React, { useEffect, useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import Html5Qrcode from "html5-qrcode";

const index = () => {
    const [products, setProducts] = useState([])
    const [productData, setProductData] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5055/api/products/getProducts/latest`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])


    const handleQrCode = (p) => {
        const productData = {
            name: p?.title,
            price: p.price,
            id: p?._id
        }
        setProductData(productData)
    }


    const handleDownload = () => {
        const canvas = document.querySelector('canvas');
        const link = document.createElement('a');
        link.download = 'my-product-qr.png';
        link.href = canvas.toDataURL('image/png').replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        link.click();
    };


    const [decodedText, setDecodedText] = useState("");
    const videoRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleCameraButtonClick = async () => {
        try {
            const html5QrCode = new Html5Qrcode("reader");

            const qrCodeSuccessCallback = (decodedText) => {
                setDecodedText(decodedText);
                html5QrCode.stop();
            };

            const qrCodeFailureCallback = (errorMessage) => {
                console.log(`QR code scanning failed: ${errorMessage}`);
            };

            await Html5Qrcode.getCameras()
                .then((devices) => {
                    if (devices && devices.length) {
                        return html5QrCode.start({ facingMode: "environment" }, qrCodeSuccessCallback, qrCodeFailureCallback);
                    } else {
                        console.log("No cameras found on device.");
                    }
                })
                .catch((error) => {
                    console.log(`Error getting cameras: ${error}`);
                });
        } catch (error) {
            console.log(`Error scanning QR code: ${error}`);
        }
    };

    const handleFileInputChange = async (e) => {
        try {
            const html5QrCode = new Html5Qrcode("reader");
            const imageFile = e.target.files[0];
            const qrCodeSuccessCallback = (decodedText) => {
                setDecodedText(decodedText);
            };
            const qrCodeFailureCallback = (errorMessage) => {
                console.log(`QR code scanning failed: ${errorMessage}`);
            };
            await html5QrCode.scanFile(imageFile, true, qrCodeSuccessCallback, qrCodeFailureCallback);
        } catch (error) {
            console.log(`Error scanning QR code: ${error}`);
        }
    };



    return (
        <main>

            <button onClick={handleCameraButtonClick}>Scan QR Code</button> <br />
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileInputChange} style={{ display: "none" }} />
            <br />
            <button onClick={() => fileInputRef.current.click()}>Upload Image</button> <br />
            <div id="reader" style={{ display: "none" }} ref={videoRef}>video</div>
            {decodedText && <p>Decoded Text: {decodedText}</p>}

            <div className='grid grid-cols-8 gap-4 p-6'>
                {
                    products.map((p) => (
                        <div onClick={() => handleQrCode(p)}
                            className={`flex flex-col items-center justify-center cursor-pointer
                             ${productData?.id === p?._id ? "border border-primary" : "border"}`}>
                            <img className='w-32' src={p?.images[0]} alt="" />
                            <h1>{p?.title}</h1>
                        </div>
                    ))
                }

            </div>





            {
                productData && (

                    <div className='mx-auto w-80'>
                        <QRCode value={JSON.stringify(productData)} />

                        <button className='w-fit px-6 h-12 hover:bg-darkPrimary bg-primary text-white mt-6 mx-auto' onClick={handleDownload}>Download QR Code</button>
                    </div>

                )
            }

        </main>
    );
};

export default index;