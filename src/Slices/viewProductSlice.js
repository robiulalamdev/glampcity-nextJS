import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    image: "",
    selectedImage: '',
    product: null,
    latestProducts: [],
    newArrivalProducts: [],
    topRankingProducts: [],
    popularProducts: [],
};

export const viewProductSlice = createSlice({
    name: "viewProductSlice",
    initialState,
    reducers: {
        setSelectedImage: (state, action) => {
            state.selectedImage = action.payload;
        },
        setProduct: (state, action) => {
            state.product = action.payload;
        },
        setLatestProducts: (state, action) => {
            state.latestProducts = action.payload;
        },
        setNewArrivalProducts: (state, action) => {
            state.newArrivalProducts = action.payload;
        },
        setTopRankingProducts: (state, action) => {
            state.topRankingProducts = action.payload;
        },
        setPopularProducts: (state, action) => {
            state.popularProducts = action.payload;
        },
    },
});

export const {
    setSelectedImage,
    setProduct,
    setLatestProducts,
    setNewArrivalProducts,
    setTopRankingProducts,
    setPopularProducts,
} = viewProductSlice.actions;
export default viewProductSlice.reducer;
