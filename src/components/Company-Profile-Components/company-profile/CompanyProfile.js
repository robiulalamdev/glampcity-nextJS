import React from 'react';
import CompanyOverview from '../CompanyOverview';
import ProductCapacity from '../ProductCapacity';
import RDCapacity from '../RDCapacity/RDCapacity';
import TradeCapabilities from '../TradeCapablities/TradeCapabilities';
import SendMessageSupplier from '../SendMessageSupplier';

const CompanyProfile = () => {
    return (
        <section className=''>
            <CompanyOverview />
            <ProductCapacity />
            <RDCapacity />
            <TradeCapabilities />
            <SendMessageSupplier />
        </section>
    );
};

export default CompanyProfile;