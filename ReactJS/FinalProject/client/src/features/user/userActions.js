import {createAsyncThunk} from "@reduxjs/toolkit";
import {toast} from "react-hot-toast";

import axios from "axios";

import _ from 'lodash';

import {loginUser, checkAuth, fetchUserData, deleteProfilePicture, updateUserData,} from "./userSlice.js"

import {fetchCSRFToken} from "../../services/authServices.js";

import CookieManager from "../../utils/cookieManager.js";

import Urls from "../../utils/Urls.js";
import {keyToSend} from "../../pages/profile/Profile.jsx";


export const loginUserAction = createAsyncThunk(
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

            const response = await axios.post(Urls.user.login, userData, config);
            dispatch(loginUser(response.data));

            localStorage.setItem('userData', JSON.stringify(response.data.user));

            return response;
        } catch (error) {
            return error.response;
        }
    }
);


export const checkAuthenticationAction = createAsyncThunk(
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

        const response = await axios.get(Urls.user.authentication, axiosConfig);

        dispatch(checkAuth(response.data.isAuthenticated));
    }
);

export const fetchUserDataAction = createAsyncThunk(
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
            const response = await axios.get(Urls.user.profile, axiosConfig);

            dispatch(fetchUserData(response.data));

            localStorage.setItem('userData', JSON.stringify(response.data));
        } catch (error) {
            toast.error(error.response.data.message, {duration: 5000,});
        }
    }
)

export const updateProfileDataAction = createAsyncThunk(
    'user/checkAuthentication',
    async (dataset, {dispatch}) => {
        const axiosConfig = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': CookieManager.getCookie('csrftoken'),
            },
            withCredentials: true,
        };

        try {
            const {data, droppedImage} = dataset;
            const userData = _.pick(data, keyToSend);

            const requestBody = new FormData();
            requestBody.append('userData', JSON.stringify(userData));

            if (droppedImage) {
                requestBody.append('image', droppedImage);
            }

            const response = await axios.put(Urls.user.update, requestBody, axiosConfig)

            dispatch(updateUserData(response.data.data));
            return response;
        } catch (error) {
            return error.response;
        }
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