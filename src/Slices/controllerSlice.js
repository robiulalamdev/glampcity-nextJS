import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'robiulalam',
    openWishlistSidebar: false,
    openAddCartItemsSidebar: false,
    wishlistItems: [],
    cartItems: []
};

export const controllerSlice = createSlice({
    name: "controllerSlice",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setOpenWishlistSidebar: (state, action) => {
            state.openWishlistSidebar = action.payload;
        },
        setOpenAddCartItemsSidebar: (state, action) => {
            state.openAddCartItemsSidebar = action.payload;
        },
        setWishlistItems: (state, action) => {
            state.wishlistItems = action.payload;
        },
        setCartItems: (state, action) => {
            state.cartItems = action.payload;
        },
    },
});

export const {
    setName,
    setOpenWishlistSidebar,
    setOpenAddCartItemsSidebar,
    setWishlistItems,
    setCartItems
} = controllerSlice.actions;
export default controllerSlice.reducer;
