import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    verifiedStores: []
};

export const storeSlice = createSlice({
    name: "storeSlice",
    initialState,
    reducers: {
        setVerifiedStores: (state, action) => {
            state.verifiedStores = action.payload;
        },
    },
});

export const {
    setVerifiedStores
} = storeSlice.actions;
export default storeSlice.reducer;
