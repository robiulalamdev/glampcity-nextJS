import { AuthContext } from '@/ContextAPI/AuthProvider';
import MyAccountDrawer from '@/components/Drawers/MyAccountDrawer/MyAccountDrawer';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

const tabs = [
    {
        _id: "1",
        title: "My Details",
        url: "my-details",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    },
    {
        _id: "2",
        title: "Shopping Address",
        url: "shopping-address",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
    },
    {
        _id: "3",
        title: "Personalize",
        url: "personalize",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
        </svg>
    },
]

const MyAccountSidebar = () => {
    const { user } = useContext(AuthContext)
    const router = useRouter()
    const pathSplit = router?.pathname.split("/")

    const handleRoute = (data) => {
        if (pathSplit.length > 2) {
            router.replace(data?.url)
        }
        else {
            router.push(`my-account/${data?.url}`)
        }
    }
    return (
        <>
            <div className='w-[250px] bg-white h-screen hidden lg:block'>
                <div className='grid grid-cols-1'>
                    <div className="flex flex-col items-center my-6">
                        <img className="object-cover w-20 h-20 mx-2 rounded-full"
                            src={user?.image ? user?.image : "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"} alt="avatar" />
                        <h4 className="mx-2 mt-2 font-medium text-gray-900 uppercase">{user?.name}</h4>
                        <p className="mx-2 mt-1 text-sm font-medium text-gray-600">{user?.email}</p>
                    </div>
                    {
                        tabs.map((tab, i) => (
                            <button onClick={() => handleRoute(tab)}
                                className={`w-full h-10 hover:bg-slate-400 flex items-center gap-2 px-4
                            ${router?.pathname.includes(tab?.url) ? "bg-primary text-white" : "bg-white hover:bg-slate-300 duration-100"}`}>
                                {tab.icon}
                                <span>{tab?.title}</span>
                            </button>
                        ))
                    }
                </div>
            </div>

            <div className='lg:hidden'>
                <MyAccountDrawer />
            </div>
        </>
    );
};

export default MyAccountSidebar;