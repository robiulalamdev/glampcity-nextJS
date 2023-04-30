import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openMyAccountSidebar: false,
};

export const myAccountSlice = createSlice({
    name: "myAccountSlice",
    initialState,
    reducers: {
        setOpenMyAccountSidebar: (state, action) => {
            state.openMyAccountSidebar = action.payload;
        },
    },
});

export const {
    setOpenMyAccountSidebar
} = myAccountSlice.actions;
export default myAccountSlice.reducer;
