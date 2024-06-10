import {createAsyncThunk} from "@reduxjs/toolkit";
import {toast} from "react-hot-toast";

import axios from "axios";

import _ from 'lodash';

import {
    loginUser,
    logoutUser,
    checkAuth,
    fetchUserData,
    createUser,
    updateUserData,
    deleteProfilePicture,
} from "./userSlice.js"

import CookieManager from "../../utils/cookieManager.js";

import Urls from "../../utils/Urls.js";
import {keyToSend} from "../../pages/profile/Profile.jsx";
import cookieManager from "../../utils/cookieManager.js";

async function getCRSFToken() {
    const cookieName = 'csrftoken'
    let csrfToken = CookieManager.getCookie(cookieName);

    if (!csrfToken) {
        const response = await axios.get(Urls.CRSFToken);
        csrfToken = response.data.csrfToken;
        cookieManager.setCookie(cookieName, csrfToken, 1);
    }

    return csrfToken;
}

async function getAxiosConfig(contentType) {
    const csrfToken = await getCRSFToken()

    return {
        headers: {
            'Content-Type': contentType,
            'X-CSRFToken': csrfToken,
        },
        withCredentials: true,
    }
}


export const singInUserAction = createAsyncThunk(
    'user/loginUser',
    async (userData, {rejectWithValue, dispatch}) => {
        const contentType = 'application/json';
        const axiosConfig = await getAxiosConfig(contentType);

        try {
            const response = await axios.post(Urls.user.login, userData, axiosConfig);
            dispatch(loginUser(response.data));

            localStorage.setItem('userData', JSON.stringify(response.data.user));
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const signUpUserAction = createAsyncThunk(
    'user/createUser',
    async (userData, {rejectWithValue, dispatch}) => {
        const contentType = 'application/json';
        const axiosConfig = await getAxiosConfig(contentType);

        try {
            const response = await axios.post(Urls.user.register, userData, axiosConfig);
            dispatch(createUser(response.data.data));
            localStorage.setItem('userData', JSON.stringify(response.data.data));
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const logoutUserAction = createAsyncThunk(
    'user/logoutUser',
    async (_, {dispatch}) => {
        const contentType = 'application/json';
        const axiosConfig = await getAxiosConfig(contentType);

        try {
            const response = await axios.get(Urls.user.logout, axiosConfig);
            dispatch(logoutUser());
            localStorage.removeItem('userData');
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    }
);

export const checkAuthenticationAction = createAsyncThunk(
    'user/checkAuthentication',
    async (_, {dispatch}) => {
        const contentType = 'application/json';
        const axiosConfig = await getAxiosConfig(contentType);

        try {
            const response = await axios.get(Urls.user.authentication, axiosConfig);
            dispatch(checkAuth(response.data.isAuthenticated));
            return response.data.isAuthenticated;
        } catch (error) {
            return error.response.data.isAuthenticated;
        }
    }
);

export const fetchUserDataAction = createAsyncThunk(
    'user/fetchUserData',
    async (_, {dispatch}) => {
        const contentType = 'application/json';
        const axiosConfig = await getAxiosConfig(contentType);

        try {
            const response = await axios.get(Urls.user.profile, axiosConfig);

            dispatch(fetchUserData(response.data));

            localStorage.setItem('userData', JSON.stringify(response.data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
)

export const updateProfileDataAction = createAsyncThunk(
    'user/checkAuthentication',
    async (dataset, {dispatch}) => {
        const contentType = 'multipart/form-data';
        const axiosConfig = await getAxiosConfig(contentType);

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
        const contentType = 'application/json';
        const axiosConfig = await getAxiosConfig(contentType);

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
    type: 'user/updateUserData',
    payload: userData,
});