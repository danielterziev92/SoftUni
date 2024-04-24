import {createSlice} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

import {addMessage} from "../message/messageSlice.js";
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
        deleteProfilePicturePending: (state, action) => {
            state.loading = true;
        },
        deleteProfilePictureSuccess: (state, action) => {
            addMessage(action.payload.message);
            return {
                ...state,
                loading: false,
                data: {...state.data, picture_url: '',}
            };
        },
        deleteProfilePictureFailure: (state, action) => {
            state.loading = false;
        },
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
    updateUserDataPending,
    updateUserDataSuccess,
    updateUserDataFailure,
    deleteProfilePicturePending,
    deleteProfilePictureSuccess,
    deleteProfilePictureFailure,
} = userSlice.actions;

export const selectUser = (state) => state.user.data;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;

export const dispatchAddMessage = (message) => (dispatch) => {
    dispatch(addMessage(message));
};

export default userSlice.reducer;