import {createAsyncThunk} from "@reduxjs/toolkit";
import {toast} from "react-hot-toast";

import axios from "axios";

import {
    loginUserPending,
    loginUserSuccess,
    loginUserFailure,
    checkAuthPending,
    checkAuthFinished,
    fetchUserDataPending,
    fetchUserDataSuccess,
    fetchUserDataFailure,
    deleteProfilePicture,
} from "./userSlice.js"

import {fetchCSRFToken} from "../../services/authServices.js";

import CookieManager from "../../utils/cookieManager.js";

import Urls from "../../utils/Urls.js";


export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userData, {rejectWithValue, dispatch}) => {
        try {
            const csrfToken = CookieManager.getCookie('csrftoken');
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
                withCredentials: true,
            };

            dispatch(loginUserPending);
            console.log('pending')

            const response = await axios.post(Urls.user.login, userData, config);
            console.log(response)
            dispatch(loginUserSuccess(response.data));

            localStorage.setItem('userData', JSON.stringify(response.data.user));

            return response.data;
        } catch (error) {

            dispatch(loginUserFailure(error.response.data));

            return rejectWithValue(error.response.data);
        }
    }
);


export const checkAuthentication = createAsyncThunk(
    'user/checkAuthentication',
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

        dispatch(checkAuthPending());
        const response = await axios.get(Urls.user.authentication, axiosConfig);

        dispatch(checkAuthFinished(response.data.isAuthenticated));
    }
);

export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
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

            dispatch(fetchUserDataSuccess(response.data));

            localStorage.setItem('userData', JSON.stringify(response.data));
        } catch (error) {
            dispatch(fetchUserDataFailure());
            toast.error(error.response.data.message, {duration: 5000,});
        }
    }
)

export const updateProfileData = createAsyncThunk(
    'user/checkAuthentication',
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

        dispatch(checkAuthPending());
        const response = await axios.get(Urls.user.authentication, axiosConfig);

        dispatch(checkAuthFinished(response.data.isAuthenticated));
    }
);

export const deleteProfilePictureAction = createAsyncThunk(
    'user/deleteProfilePicture',
    async (_, {dispatch}) => {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': CookieManager.getCookie('csrftoken'),
            },
            withCredentials: true,
        };

        try {
            const response = await axios.delete(Urls.user.deleteProfilePicture, axiosConfig);
            dispatch(deleteProfilePicture());
            return response;
        } catch (error) {
            return error.response;
        }
    }
);

export const updateUserDataAction = (userData) => ({
    type: 'user/updateUserDataSuccess',
    payload: userData,
});