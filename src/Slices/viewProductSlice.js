import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    images: [
        'https://i.postimg.cc/x1DwgCZd/img2.png',
        'https://i.postimg.cc/cHbj34Y0/img1.png',
        'https://i.postimg.cc/6TsmHjYP/img3.png',
        'https://i.postimg.cc/6QzF9hp7/img4.png'
    ],
    selectedImage: 'https://i.postimg.cc/x1DwgCZd/img1.png',
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
