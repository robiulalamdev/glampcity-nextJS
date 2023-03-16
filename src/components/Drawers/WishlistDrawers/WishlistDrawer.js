import React from 'react';
import { Drawer } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenWishlistSidebar } from '@/Slices/controllerSlice';

const WishlistDrawer = () => {
    const { openWishlistSidebar } = useSelector((state) => state.controllerSlice)
    const dispatch = useDispatch()

    return (
        <Drawer
            placement='right'
            visible={openWishlistSidebar}
            title='Wishlist Products'
            closable={true}
            width='380px'
            onClose={() => dispatch(setOpenWishlistSidebar(false))}
        >
        </Drawer>
    );
};

export default WishlistDrawer;