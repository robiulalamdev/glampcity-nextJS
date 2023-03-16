import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openRecommended: false,
    categories: [],
};

export const bannerSlice = createSlice({
    name: "bannerSlice",
    initialState,
    reducers: {
        setOpenRecommended: (state, action) => {
            state.openRecommended = action.payload;
        },
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
    },
});

export const {
    setOpenRecommended,
    setCategories,
} = bannerSlice.actions;
export default bannerSlice.reducer;
