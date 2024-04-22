import {createSlice} from "@reduxjs/toolkit";

import {addMessage} from "../message/messageSlice.js";

const initialState = {
    data: {
        id: '',
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
        picture_url: '',
        company_id: '',
    },
    isAuthenticated: false,
    loading: false,
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
            addMessage(action.payload.message);
        },
        loginUserFailure: (state, action) => {
            state.loading = false;
            addMessage(action.payload.message);
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
            addMessage(action.payload.message);
        },
        checkAuthFailure: (state, action) => {
            state.loading = false;
            addMessage(action.payload.message);
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
            addMessage(action.payload.message);
        },
        updateUserData: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        deleteProfilePicture: (state, action) => {
            state.loading = false;
            state.data.picture_url = '';
            addMessage(action.payload.message);
        }
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
    updateUserData,
    deleteProfilePicture
} = userSlice.actions;

export const selectUser = (state) => state.user.data;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const isUserDataLoading = (state) => state.user.loading;

export default userSlice.reducer;