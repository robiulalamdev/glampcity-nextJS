import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showForm: '1',
    showTabsData: '1',
    busynessTypeTabs: [
        { id: '1', title: 'Basic Company details' },
        { id: '2', title: 'Manufacturing Capability' },
        { id: '3', title: 'Company Introduction' },
    ],
    businessType: [],

    basicCompanyDetailsData: {},
    manufacturingCapabilityData: {},
    companyIntroductionData: {},
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

        setBasicCompanyDetailsData: (state, action) => {
            state.basicCompanyDetailsData = action.payload;
        },
        setManufacturingCapabilityData: (state, action) => {
            state.manufacturingCapabilityData = action.payload;
        },
        setCompanyIntroductionData: (state, action) => {
            state.companyIntroductionData = action.payload;
        },
    },
});

export const {
    setShowForm,
    setShowTabsData,
    setBusinessType,

    setBasicCompanyDetailsData,
    setManufacturingCapabilityData,
    setCompanyIntroductionData,

} = createCompanySlice.actions;
export default createCompanySlice.reducer;
