import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openMyAccountSidebar: false,
    openMyAccountMessageSidebar: false,
    fullScreen: false,

    receiverData: null,
    chatId: "",
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
        setFullScreen: (state, action) => {
            state.fullScreen = action.payload;
        },

        // message actions
        setReceiverData: (state, action) => {
            state.receiverData = action.payload;
        },
        setChatId: (state, action) => {
            state.chatId = action.payload;
        },
    },
});

export const {
    setOpenMyAccountSidebar,
    setOpenMyAccountMessageSidebar,
    setFullScreen,

    // message action
    setReceiverData,
    setChatId

} = myAccountSlice.actions;
export default myAccountSlice.reducer;
