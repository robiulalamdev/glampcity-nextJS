import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    receiverData: null,
    onlineUsers: [],
};

export const conversationSlice = createSlice({
    name: "conversationSlice",
    initialState,
    reducers: {
        setReceiverData: (state, action) => {
            state.receiverData = action.payload;
        },
        setOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload;
        },
    },
});

export const {
    setReceiverData,
    setOnlineUsers
} = conversationSlice.actions;
export default conversationSlice.reducer;
