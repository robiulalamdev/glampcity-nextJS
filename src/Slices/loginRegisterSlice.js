import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: [
        { shortName: 'UK', fullName: 'United kingdom' },
        { shortName: 'NI', fullName: 'Nigeria' }
    ],
    phoneCodes: [
        { country: 'United Kingdom', phoneCode: '+44' },
        { country: 'Nigeria', phoneCode: '+234' },
    ],
    selectedCountry: '',
    selectedPhoneCode: '+44',
    showCountries: false,
    showPhoneCode: false,
    role: 'seller',
    passwordError: { error: false, message: 'Password Not Matched' },

    // persolnalize
    nextIncrease: '1',
};

export const loginRegisterSlice = createSlice({
    name: "loginRegisterSlice",
    initialState,
    reducers: {
        setSelectedCountry: (state, action) => {
            state.selectedCountry = action.payload;
            state.showCountries = false;
        },
        setSelectedPhoneCode: (state, action) => {
            state.selectedPhoneCode = action.payload;
            state.showPhoneCode = false;
        },
        setShowCountries: (state, action) => {
            state.showCountries = action.payload;
        },
        setShowPhoneCode: (state, action) => {
            state.showPhoneCode = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
        setPasswordError: (state, action) => {
            state.passwordError = action.payload;
        },

        // personalize
        setNextIncrease: (state, action) => {
            state.nextIncrease = action.payload;
        },
    },
});

export const {
    setSelectedCountry,
    setSelectedPhoneCode,
    setShowCountries,
    setShowPhoneCode,
    setRole,
    setPasswordError,
    setNextIncrease,
} = loginRegisterSlice.actions;
export default loginRegisterSlice.reducer;
