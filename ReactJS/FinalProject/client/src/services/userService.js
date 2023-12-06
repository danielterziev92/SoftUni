import * as request from '../lib/request.js'

import tokenManager from "../utils/tokenManager.js";
import cookieManager from "../utils/cookieManager.js";

import {tokenExpDays, tokenName} from "../contexts/AuthenticationContext.jsx";
import pathToUrl from "../utils/pathToUrl.js";
import Urls from "../utils/Urls.js";

export const loginUser = async (data) => {
    return request.post(Urls.token, data);
}

export const getRefreshToken = async (oldToken) => {
    const data = {'refresh': oldToken};
    return await request.post(Urls.refreshToken, data);
}

export const getAllUsers = async () => {
    return await request.get(Urls.index);
}

export const getUserById = async (id, token) => {
    const url = pathToUrl(Urls.userDetail, {id});
    return await request.get(url, null, token);
}

export const updateUserById = async (id, data) => {
    const refreshToken = cookieManager.getCookie(tokenName);
    const token = await tokenManager.getNewTokens(refreshToken);
    cookieManager.setCookie(tokenName, token.refresh, tokenExpDays);
    const {is_staff, is_superuser, is_active, ...dataToSend} = data
    const url = pathToUrl(Urls.userDetail, {id});
    return await request.patch(url, dataToSend, token.access);
}

export const registerUser = async (data) => {
    return await request.post(Urls.userRegister, data);
}