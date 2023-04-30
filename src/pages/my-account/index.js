import MyAccountSidebar from '@/components/MyAccountComponents/MyAccountMain/MyAccountSidebar';
import { useRouter } from 'next/router';
import React from 'react';

const MyAccountMain = ({ children }) => {
    const router = useRouter()
    console.log(router);
    return (
        <main className='bg-slate-100 h-screen w-full overflow-hidden'>
            <div className='max-w-[1440px] mx-auto'>
                <div className='grid grid-cols-[auto_1fr]'>
                    {

                    }
                    <MyAccountSidebar />
                    <div className='p-4'>
                        {
                            children ? children : <>
                                <div className='flex items-center justify-center'>
                                    <img src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-red-welcome-in-banner-style-png-image_5687333.png" alt="" />
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MyAccountMain;