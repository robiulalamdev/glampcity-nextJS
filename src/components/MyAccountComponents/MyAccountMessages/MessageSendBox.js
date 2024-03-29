import React, { useContext, useState } from 'react';
import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
    Button,
    Accordion,
    AccordionBody,
    Badge
} from "@material-tailwind/react";
import {
    PlusIcon,
} from "@heroicons/react/24/outline";
import CreateOfferForm from './CreateOfferForm';
import SelectProductForOffer from './SelectProductForOffer';
import MyOffers from './OffersPanels/MyOffers';
import MyRequestOffers from './OffersPanels/MyRequestOffers';
import { useSelector } from 'react-redux';
import { AuthContext } from '@/ContextAPI/AuthProvider';

const data = [
    {
        label: "Offers",
        value: "offers"
    },
    {
        label: "Request",
        value: "request"
    },
];

const MessageSendBox = ({ sendMessage }) => {
    const { user } = useContext(AuthContext)
    const { receiverData, chatId } = useSelector((state) => state.myAccountSlice)
    const [totalOffers, setTotalOffers] = useState("0")
    const [messageText, setMessageText] = useState("")
    const [productId, setProductId] = useState("");
    const [tab, setTab] = useState("offers")

    const [openOffers, setOpenOffers] = useState(false);
    const [openCreateOffer, setOpenCreateOffer] = useState(false);
    const handleOffer = (data) => {
        if (data === "openoffer") {
            setOpenCreateOffer(false)
            setOpenOffers(!openOffers)
        }
        else {
            setOpenOffers(false)
            setOpenCreateOffer(!openCreateOffer)
        }
    }

    const handleclose = () => {
        setProductId("")
        setOpenCreateOffer(false)
    }


    return (
        <div class="p-4">

            <Accordion open={openOffers} className='w-full' >
                <AccordionBody className="py-0 min-h-[500px] max-h-[700px] bg-blue-50 mt-0 pt-0 border-t" >
                    <div className='grid grid-cols-2' >
                        {data.map(({ label, value }) => (
                            <Button key={value} value={value} onClick={() => setTab(value)}
                                className={`w-full rounded-none
                                ${tab === value ? "" : "bg-white text-black"}`} >
                                {label}
                            </Button>
                        ))}
                    </div>

                    {tab === "offers" && <MyOffers storeId={receiverData?._id} buyerId={user?._id} setTotalOffers={setTotalOffers} />}
                    {tab === "request" && <MyRequestOffers storeId={receiverData?._id} buyerId={user?._id} />}

                </AccordionBody>
            </Accordion>
            <Accordion open={openCreateOffer} className='w-full' >
                <AccordionBody className="py-0 min-h-[500px] max-h-[700px]  bg-secondary" >
                    {productId && <CreateOfferForm productId={productId} setClose={handleclose} />}
                    {!productId && <SelectProductForOffer storeId={receiverData?._id} handleSelectProduct={setProductId} />}
                </AccordionBody>
            </Accordion>

            <div className='flex items-center gap-2 w-fit h-10'>
                <Badge content={totalOffers}>
                    <Button onClick={() => handleOffer("openoffer")} size='sm' color='green' >Offer</Button>
                </Badge>

                <Button onClick={() => handleOffer("createoffer")} size='sm' >Create</Button>
            </div>

            <div class="flex items-center gap-1 w-full bg-gray-200 rounded-md">

                <div class="flex items-center relative">


                    <div className="w-12 h-8 ml-2 mb-2">
                        <SpeedDial>
                            <SpeedDialHandler>
                                <IconButton size="md" className="rounded-full">
                                    <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
                                </IconButton>
                            </SpeedDialHandler>

                            <SpeedDialContent>
                                <SpeedDialAction>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                                    </svg>
                                </SpeedDialAction>
                                <SpeedDialAction>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-800">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </SpeedDialAction>
                            </SpeedDialContent>
                        </SpeedDial>
                    </div>


                    {/* <button type="button" class="inline-flex items-center justify-center rounded-full h-8 w-8 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                        </svg>
                    </button> */}

                    {/* <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                        </svg>
                    </button> */}
                    {/* <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </button> */}



                </div>

                <input onChange={(e) => setMessageText(e.target.value)}
                    type="text" placeholder="Write your message!"
                    class="flex-grow w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 bg-gray-200 rounded-md py-3" />



                <button onClick={() => sendMessage(messageText)}
                    disabled={messageText ? false : true} type="button" class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-primary hover:bg-darkPrimary focus:outline-none">
                    <span class="font-bold">Send</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6 ml-2 transform rotate-90">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default MessageSendBox;