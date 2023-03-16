import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
    openUserProfileSidebar: false,
};

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
        },
        setOpenUserProfileSidebar: (state, action) => {
            state.openUserProfileSidebar = action.payload
        },
    },
});

export const {
    setUserInfo,
    setOpenUserProfileSidebar,
} = authSlice.actions;
export default authSlice.reducer;
