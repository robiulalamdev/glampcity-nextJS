import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    images: [
        'https://i.postimg.cc/x1DwgCZd/img2.png',
        'https://i.postimg.cc/cHbj34Y0/img1.png',
        'https://i.postimg.cc/6TsmHjYP/img3.png',
        'https://i.postimg.cc/6QzF9hp7/img4.png'
    ],
    selectedImage: 'https://i.postimg.cc/x1DwgCZd/img1.png',
};

export const viewProductSlice = createSlice({
    name: "viewProductSlice",
    initialState,
    reducers: {
        setSelectedImage: (state, action) => {
            state.selectedImage = action.payload;
        },
    },
});

export const {
    setSelectedImage
} = viewProductSlice.actions;
export default viewProductSlice.reducer;
