import {createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

import {checkAuthFailure, checkAuthPending, checkAuthSuccess} from "./userSlice.js"

import CookieManager from "../../utils/cookieManager.js";

import Urls from "../../utils/Urls.js";


export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userData, {rejectWithValue}) => {
        try {
            const csrfToken = CookieManager.getCookie('csrftoken');
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
                withCredentials: true,
            };

            const response = await axios.post(Urls.userLogin, userData, config);
            return response.data;
        } catch (error) {
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