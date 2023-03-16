import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [
        { id: '1', title: 'My Account' },
        { id: '2', title: 'Sourcing' },
        { id: '3', title: 'Negotiation' },
        { id: '4', title: 'Ordering' },
        { id: '5', title: 'After-Sales' },
        { id: '6', title: 'Self-Service' },
    ],
    populerTopics: [
        {
            id: '1',
            question: 'How can I register an account on Alibaba.com?',
            answare: 'How can I register an account on Alibaba.com? How can I register an account on Alibaba.com? How can I register an account on Alibaba.com?'
        },
        {
            id: '2',
            question: 'How can I register an account on Alibaba.com?',
            answare: 'How can I register an account on Alibaba.com?'
        },
        {
            id: '3',
            question: 'How can I register an account on Alibaba.com?',
            answare: 'How can I register an account on Alibaba.com?'
        },
        {
            id: '4',
            question: 'How can I register an account on Alibaba.com?',
            answare: 'How can I register an account on Alibaba.com?'
        },
        {
            id: '5',
            question: 'How can I register an account on Alibaba.com?',
            answare: 'How can I register an account on Alibaba.com?'
        },
        {
            id: '6',
            question: 'How can I register an account on Alibaba.com?',
            answare: 'How can I register an account on Alibaba.com?'
        },
    ],
    selectedCategory: '1',
    viewAnsware: '1',
};

export const customerSupportSlice = createSlice({
    name: "customerSupportSlice",
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setViewAnsware: (state, action) => {
            state.viewAnsware = action.payload;
        },
    },
});

export const {
    setSelectedCategory,
    setViewAnsware,
} = customerSupportSlice.actions;
export default customerSupportSlice.reducer;
