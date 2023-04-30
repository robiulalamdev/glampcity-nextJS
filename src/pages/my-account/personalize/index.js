import React from 'react';
import MyAccountMain from '..';
import Personalize from '@/pages/personalize';

const MyPersonalize = () => {
    return (
        <MyAccountMain>
            <h1 className='text-primary font-bold text-left text-xl uppercase mb-2' >My Personalize</h1>

            <Personalize />
        </MyAccountMain>
    );
};

export default MyPersonalize;