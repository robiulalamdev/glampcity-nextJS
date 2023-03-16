import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: [
        { country: 'bangladesh' },
        { country: 'bangladesh' },
        { country: 'pakistan' },
        { country: 'bangladesh' },
        { country: 'bangladesh' }
    ],
    phoneCodes: [
        { country: 'bangladesh', phoneCode: '+880' },
        { country: 'bangladesh', phoneCode: '+658' },
        { country: 'bangladesh', phoneCode: '+452' },
        { country: 'bangladesh', phoneCode: '+56' },
        { country: 'bangladesh', phoneCode: '+792' }
    ],
    selectedCountry: 'Bangladesh',
    selectedPhoneCode: '+880',
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
