import {createSlice} from "@reduxjs/toolkit";

import {loginUser} from "./userActions.js";

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    message: null,
}

export const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        loginUserPending: (state) => {
            state.loading = true;
        },
        loginUserSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message;
        },
        loginUserFailure: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        logoutUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
        },
        setSessionId: (state, action) => {
            state.session.id = action.payload;
        },
        checkAuthPending: (state) => {
            state.loading = true;
        },
        checkAuthSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.message = action.payload.message;
            state.user = action.payload.user;
        },
        checkAuthFailure: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.message = action.payload.message;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
            });
    },
});

export const {
    loginUserPending,
    loginUserSuccess,
    loginUserFailure,
    logoutUser,
    checkAuthPending,
    checkAuthSuccess,
    checkAuthFailure,
} = userSlice.actions;

export const selectUser = (state) => state.userInfo.user;
export const selectIsAuthenticated = (state) => state.userInfo.isAuthenticated;

export default userSlice.reducer;