import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    name: 'robiulalam',
    openWishlistSidebar: false,
    openAddCartItemsSidebar: false,
    wishlistItems: [],
    cartItems: [],
    valid: false,
    discount: 0,
    discountAmount: 0,
    totalPrice: 0,
};

export const controllerSlice = createSlice({
    name: "controllerSlice",
    initialState,
    reducers: {
        setIsloading: (state, action) => {
            state.isLoading = action.payload;
        },
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
        setValid: (state, action) => {
            state.valid = action.payload;
        },
        setDiscount: (state, action) => {
            state.discount = action.payload;
        },
        setDiscountAmount: (state, action) => {
            state.discountAmount = action.payload;
        },
        setProductPrice: (state, action) => {
            state.productPrice = action.payload;
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
    },
});

export const {
    setName,
    setIsloading,
    setOpenWishlistSidebar,
    setOpenAddCartItemsSidebar,
    setWishlistItems,
    setCartItems,
    setValid,
    setDiscount,
    setDiscountAmount,
    setProductPrice,
    setTotalPrice,
} = controllerSlice.actions;
export default controllerSlice.reducer;
