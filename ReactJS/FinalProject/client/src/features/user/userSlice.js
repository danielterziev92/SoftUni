import {createSlice} from "@reduxjs/toolkit";

import {loginUser} from "./userActions.js";

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUserPending: (state) => {
            state.loading = true;
        },
        loginUserSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
        },
        loginUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logoutUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;
        },
    },
    // extraReducers: {
    //     [loginUser.pending]: (state) => {
    //         state.loading = true;
    //     },
    //     [loginUser.fulfilled]: (state, action) => {
    //         state.loading = false;
    //         state.isAuthenticated = true;
    //         state.user = action.payload;
    //     },
    //     [loginUser.rejected]: (state, action) => {
    //         state.loading = false;
    //         state.error = action.payload;
    //     },
    // },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const {loginUserPending, loginUserSuccess, loginUserFailure, logoutUser} = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;