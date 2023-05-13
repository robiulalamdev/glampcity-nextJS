import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openMyAccountSidebar: false,
    openMyAccountMessageSidebar: false,
};

export const myAccountSlice = createSlice({
    name: "myAccountSlice",
    initialState,
    reducers: {
        setOpenMyAccountSidebar: (state, action) => {
            state.openMyAccountSidebar = action.payload;
        },
        setOpenMyAccountMessageSidebar: (state, action) => {
            state.openMyAccountMessageSidebar = action.payload;
        },
    },
});

export const {
    setOpenMyAccountSidebar,
    setOpenMyAccountMessageSidebar
} = myAccountSlice.actions;
export default myAccountSlice.reducer;
