import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showForm: '1',
    showTabsData: '1',
    busynessTypeTabs: [
        { id: '1', title: 'Basic Company details' },
        { id: '2', title: 'Manufacturing Capability' },
        { id: '3', title: 'Company Introduction ' },
    ],
    businessType: []
};

export const createCompanySlice = createSlice({
    name: "createCompanySlice",
    initialState,
    reducers: {
        setShowForm: (state, action) => {
            state.showForm = action.payload;
        },
        setShowTabsData: (state, action) => {
            state.showTabsData = action.payload;
        },
        setShowTabsData: (state, action) => {
            state.showTabsData = action.payload;
        },
        setBusinessType: (state, action) => {
            state.businessType = action.payload;
        },
    },
});

export const {
    setShowForm,
    setShowTabsData,
    setBusinessType
} = createCompanySlice.actions;
export default createCompanySlice.reducer;
