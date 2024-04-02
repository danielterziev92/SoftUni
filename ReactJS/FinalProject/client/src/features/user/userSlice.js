import {createSlice} from "@reduxjs/toolkit";

import {loginUser} from "./userActions.js";

const initialState = {
    data: {
        id: '',
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
        company_name: '',
    },
    isAuthenticated: false,
    loading: false,
    message: '',
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
            state.data = action.payload.user;
            state.message = action.payload.message;
        },
        loginUserFailure: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        logoutUser: (state) => {
            state.data = {};
            state.isAuthenticated = false;
            state.loading = false;
        },
        checkAuthPending: (state) => {
            state.loading = true;
        },
        checkAuthSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.message = action.payload.message;
        },
        checkAuthFailure: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.isAuthenticated = false;
        },
        fetchUserDataPending: (state, action) => {
            state.loading = true;
        },
        fetchUserDataSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchUserDataFailure: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.data = action.payload.user;
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
    fetchUserDataPending,
    fetchUserDataSuccess,
    fetchUserDataFailure,
} = userSlice.actions;

export const selectUser = (state) => state.user.data;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;

export default userSlice.reducer;