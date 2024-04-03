import {createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

import {
    loginUserPending, loginUserSuccess, loginUserFailure,
    checkAuthPending, checkAuthSuccess, checkAuthFailure,
    fetchUserDataPending, fetchUserDataSuccess, fetchUserDataFailure,
} from "./userSlice.js"

import {fetchCSRFToken} from "../../services/authServices.js";

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

            const response = await axios.post(Urls.user.login, userData, config);
            dispatch(loginUserSuccess(response.data));

            return response.data;
        } catch (error) {
            dispatch(loginUserFailure(error.response.data));

            return rejectWithValue(error.response.data);
        }
    }
);


export const checkAuthentication = createAsyncThunk(
    'userInfo/checkAuthentication',
    async (_, {dispatch}) => {
        const csrfToken = CookieManager.getCookie('csrftoken');

        if (!csrfToken) {
            fetchCSRFToken();
        }

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
            },
            withCredentials: true,
        };

        try {
            dispatch(checkAuthPending());
            const response = await axios.get(Urls.user.authentication, axiosConfig);

            if (response.data.isAuthenticated) {
                dispatch(checkAuthSuccess(response.data));
            } else {
                dispatch(checkAuthFailure('User is not authenticated'));
            }
        } catch (error) {
            dispatch(checkAuthFailure(error.message));
        }
    }
);

export const fetchUserData = createAsyncThunk(
    'userInfo/fetchUserData',
    async (_, {dispatch}) => {
        const csrfToken = CookieManager.getCookie('csrftoken');

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
            },
            withCredentials: true,
        };

        try {
            dispatch(fetchUserDataPending());
            const response = await axios.get(Urls.user.profile, axiosConfig);

            if (response.data) {
                dispatch(fetchUserDataSuccess(response.data));
                CookieManager.setCookie('userData', response.data, 1)
            } else {
                dispatch(fetchUserDataFailure('Can not get data from server'));
            }
        } catch (error) {
            dispatch(checkAuthFailure(error.message));
        }
    }
)

export const updateUserData = (userData) => ({
    type: 'userInfo/updateUserData',
    payload: userData,
});