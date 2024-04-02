import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user_info: {

    },
    loading: false,
    message: '',
}


export const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        userProfilePending: (state) => {
            state.loading = true;
        },
        userProfileSuccess: (state, action) => {
            state.loading = false;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.phone = action.payload.phone;
            state.company_name = action.payload.company_name;
            state.message = '';
        },
        userProfileFailure: (state, action) => {
            state.loading = false;
            state.user_info = {};
            state.message = action.payload.message;
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(userProfile.pending, (state) => {
    //
    //         })
    // }
})


export default userProfileSlice.reducer;