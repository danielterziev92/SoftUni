import {createSlice} from "@reduxjs/toolkit";

import {addMessageAction} from "../message/messageActions.js";

// const dispatch = useDispatch();

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
        },
        loginUserFailure: (state, action) => {
            state.loading = false;
        },
        logoutUser: (state) => {
            state.data = {};
            state.isAuthenticated = false;
            state.loading = false;
        },
        checkAuthPending: (state) => {
            state.loading = true;
        },
        checkAuthFinished: (state, action) => {
            state.loading = false;
            state.isAuthenticated = action.payload;
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
        },
        updateUserDataPending: (state, action) => {
            state.loading = true;
        },
        updateUserDataSuccess: (state, action) => {
            return {
                ...state,
                loading: false,
                data: {...state.data, ...action.payload},
            }
        },
        updateUserDataFailure: (state, action) => {
            state.loading = false;
        },
        deleteProfilePicture: (state, action) => {
            return {
                ...state,
                loading: false,
                data: {...state.data, picture_url: '',}
            };
        },
    },
});

export const {
    loginUserPending,
    loginUserSuccess,
    loginUserFailure,
    logoutUser,
    checkAuthPending, checkAuthFinished,
    fetchUserDataPending,
    fetchUserDataSuccess,
    fetchUserDataFailure,
    updateUserDataPending,
    updateUserDataSuccess,
    updateUserDataFailure,
    deleteProfilePicture,
} = userSlice.actions;

export const selectUser = (state) => state.user.data;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;


export default userSlice.reducer;