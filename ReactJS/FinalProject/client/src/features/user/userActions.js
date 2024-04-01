import {createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

import {
    loginUserFailure,
    loginUserPending,
    loginUserSuccess,
    checkAuthFailure,
    checkAuthPending,
    checkAuthSuccess,
} from "./userSlice.js"

import CookieManager from "../../utils/cookieManager.js";

import Urls from "../../utils/Urls.js";


export const loginUser = createAsyncThunk(
    'userInfo/loginUser',
    async (userData, {rejectWithValue, dispatch}) => {
        try {
            dispatch(loginUserPending);

            const csrfToken = CookieManager.getCookie('csrftoken');
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
                withCredentials: true,
            };

            const response = await axios.post(Urls.userLogin, userData, config);
            dispatch(loginUserSuccess(response.data));

            return response.data;
        } catch (error) {
            dispatch(loginUserFailure(error.response.data));

            return rejectWithValue(error.response.data);
        }
    }
);


export const checkAuthentication = () => async (dispatch) => {
    try {
        dispatch(checkAuthPending());
        const response = await axios.get(Urls.userAuthentication);

        if (response.data.isAuthenticated) {
            dispatch(checkAuthSuccess(response.data));
        } else {
            dispatch(checkAuthFailure('User is not authenticated'));
        }
    } catch (error) {
        dispatch(checkAuthFailure(error.message));
    }
};