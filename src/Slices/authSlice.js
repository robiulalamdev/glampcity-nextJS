import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openUserProfileSidebar: false,
};

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setOpenUserProfileSidebar: (state, action) => {
            state.openUserProfileSidebar = action.payload
        },
    },
});

export const {
    setOpenUserProfileSidebar,
} = authSlice.actions;
export default authSlice.reducer;
