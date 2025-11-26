import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
    otpSent: false,
    generatedOtp: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        sendOtp: (state, action) => {
            // Mock OTP generation
            const otp = Math.floor(1000 + Math.random() * 9000).toString();
            state.generatedOtp = otp;
            state.otpSent = true;
            console.log(`[MOCK OTP] Your OTP is: ${otp}`);
            // In a real app, this would trigger an API call to send email
        },
        verifyOtp: (state, action) => {
            const { otp, userData } = action.payload;
            if (otp === state.generatedOtp) {
                state.isAuthenticated = true;
                state.user = userData;
                state.otpSent = false;
                state.generatedOtp = null;
            } else {
                throw new Error('Invalid OTP');
            }
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.otpSent = false;
            state.generatedOtp = null;
        },
    },
});

export const { sendOtp, verifyOtp, logout } = authSlice.actions;
export default authSlice.reducer;
