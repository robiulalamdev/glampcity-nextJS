import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuItems: [
        { id: '1', title: 'Waiting for the Seller to respond(0)' },
        { id: '2', title: 'Waiting for the Buyer to respond(0)' },
        { id: '3', title: 'Waiting for the Buyer to upload evidence(0)' },
        { id: '4', title: 'Waiting for the Seller to upload evidence(0)' },
        { id: '5', title: 'Refund in progress (1)' },
        { id: '6', title: 'Resolutions in Executions (0)' },
        { id: '7', title: 'Case Completed (0)' },
        { id: '8', title: 'Case Cancelled (0)' },
    ],
    selectedMenu: '5',
};

export const orderRefoundsSlice = createSlice({
    name: "orderRefoundsSlice",
    initialState,
    reducers: {
        setSelectedMenu: (state, action) => {
            state.selectedMenu = action.payload;
        },
    },
});

export const {
    setSelectedMenu,
} = orderRefoundsSlice.actions;
export default orderRefoundsSlice.reducer;
