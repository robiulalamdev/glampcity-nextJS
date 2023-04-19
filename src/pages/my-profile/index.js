import ProfileSidebar from '@/components/MyProfileComponents/ProfileSidebar';
import React, { useState } from 'react';
import Personalize from '../personalize';
import ProfileAccount from '@/components/MyProfileComponents/ProfileAccount';

const index = () => {
    const [view, setView] = useState(1)
    return (
        <div className='max-w-[1440px] mx-auto px-4'>
            <div className='flex justify-between'>
                <ProfileSidebar view={view} setView={setView} />
                <div className='flex-grow w-full h-full py-6 md:px-4'>
                    {view === 1 && <ProfileAccount />}
                    {view === 2 && <Personalize />}
                </div>
            </div>
        </div>
    );
};

export default index;