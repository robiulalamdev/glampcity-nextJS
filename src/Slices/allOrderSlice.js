import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderItems: [
        {
            id: '1',
            title: 'All',
            children: [
                { id: '1', title: 'Order Status', values: ['Show', 'Hide'] },
                { id: '2', title: 'Account', values: ['value 1', 'value 2', 'value 3'] },
                { id: '3', title: 'Country/Region', values: ['value 1', 'value 2', 'value 3', 'value 4'] },
                { id: '4', title: 'Create Time', values: ['value 1', 'value 2', 'value 3', 'value 4'] },
                { id: '5', title: 'Order Amount', values: ['value 1', 'value 2', 'value 3', 'value 4'] },
                { id: '6', title: 'Currency', values: ['value 1', 'value 2', 'value 3', 'value 4'] },
                { id: '7', title: 'Shipping Method', values: ['value 1', 'value 2', 'value 3', 'value 4'] },
            ]
        },
        {
            id: '2',
            title: 'To Be Confirmed',
            children: [
                { id: '1', title: 'Order Status', values: ['Show', 'Hide'] },
                { id: '2', title: 'Account', values: ['value 1', 'value 2', 'value 3'] },
                { id: '3', title: 'Country/Region', values: ['value 1', 'value 2', 'value 3', 'value 4'] },
                { id: '4', title: 'Order Amount', values: ['value 1', 'value 2', 'value 3', 'value 4'] }
            ]
        },
        {
            id: '3',
            title: 'Unpaid',
            children: [
                { id: '1', title: 'Order Status', values: ['Show', 'Hide'] },
                { id: '2', title: 'Account', values: ['value 1', 'value 2', 'value 3'] },
                { id: '3', title: 'Country/Region', values: ['value 1', 'value 2', 'value 3', 'value 4'] },
                { id: '4', title: 'Create Time', values: ['value 1', 'value 2', 'value 3', 'value 4'] },
                { id: '5', title: 'Order Amount', values: ['value 1', 'value 2', 'value 3', 'value 4'] }
            ]
        },
        {
            id: '4',
            title: 'To Be Shipped',
            children: [
                { id: '1', title: 'Country/Region', values: ['value 1', 'value 2', 'value 3', 'value 4'] },
                { id: '2', title: 'Create Time', values: ['value 1', 'value 2', 'value 3', 'value 4'] },
                { id: '3', title: 'Shipping Method', values: ['value 1', 'value 2', 'value 3', 'value 4'] },
                { id: '4', title: 'Account', values: ['value 1', 'value 2', 'value 3'] },
                { id: '5', title: 'Order Status', values: ['Show', 'Hide'] },
            ]
        },
        {
            id: '5',
            title: 'To Be Received',
            children: [
            ]
        },
        {
            id: '6',
            title: 'In Dispute',
            children: [
            ]
        },
        {
            id: '7',
            title: 'Completed',
            children: [
            ]
        },
    ],
    openOrder: {
        id: '1',
        title: 'All',
        children: [
            { id: '1', title: 'Order Status', values: ['Show', 'Hide'] },
            { id: '2', title: 'Account', values: ['value 1', 'value 2', 'value 3'] },
            { id: '3', title: 'Country/Region', values: ['value 1', 'value 2', 'value 3', 'value 4'] },
            { id: '4', title: 'Create Time', values: ['value 1', 'value 2', 'value 3', 'value 4'] },
            { id: '5', title: 'Order Amount', values: ['value 1', 'value 2', 'value 3', 'value 4'] },
            { id: '6', title: 'Currency', values: ['value 1', 'value 2', 'value 3', 'value 4'] },
            { id: '7', title: 'Shipping Method', values: ['value 1', 'value 2', 'value 3', 'value 4'] },
        ]
    },
};
export const allOrderSlice = createSlice({
    name: "allOrderSlice",
    initialState,
    reducers: {
        setOrderItems: (state, action) => {
            state.orderItems = action.payload
        },
        setOpenOrder: (state, action) => {
            state.openOrder = action.payload
        },
    },
});

export const {
    setOrderItems,
    setOpenOrder
} = allOrderSlice.actions;
export default allOrderSlice.reducer;
