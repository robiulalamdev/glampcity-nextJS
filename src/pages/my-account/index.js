import PrivateRoute from '@/PrivateRoutes/PrivateRoute';
import MyAccountSidebar from '@/components/MyAccountComponents/MyAccountMain/MyAccountSidebar';
import React from 'react';

const MyAccountMain = ({ children }) => {

    return (
        <PrivateRoute>
            <main className='bg-slate-100 h-screen w-full '>
                <div className='max-w-[1440px] mx-auto'>
                    <div className='grid grid-cols-[auto_1fr]'>
                        {

                        }
                        <MyAccountSidebar />
                        <div className='p-4 h-screen w-full relative z-30'>
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
        </PrivateRoute>
    );
};

export default MyAccountMain;