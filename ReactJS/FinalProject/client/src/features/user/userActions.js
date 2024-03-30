import {createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

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
