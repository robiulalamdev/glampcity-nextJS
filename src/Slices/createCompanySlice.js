import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showForm: '1',
    showTabsData: '1',
    busynessTypes: [
        { id: '1', title: 'Basic Company details' },
        { id: '2', title: 'Manufacturing Capability' },
        { id: '3', title: 'Company Introduction ' },
    ]
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
    },
});

export const {
    setShowForm,
    setShowTabsData
} = createCompanySlice.actions;
export default createCompanySlice.reducer;
