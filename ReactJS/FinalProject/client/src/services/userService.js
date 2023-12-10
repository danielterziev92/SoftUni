import * as request from '../lib/request.js'

import pathToUrl from "../utils/pathToUrl.js";
import Urls from "../utils/Urls.js";
import returnNewAuthToken from "../lib/authToken.js";

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

export const getProductsForUserByJWTToken = async (token) => {
    return await request.get(Urls.index, null, token);
}

export const getUserById = async (id, token) => {
    const url = pathToUrl(Urls.userDetail, {id});
    return await request.get(url, null, token);
}

export const updateUserById = async (id, data) => {
    const newTokens = await returnNewAuthToken();
    const {is_staff, is_superuser, is_active, ...dataToSend} = data
    const url = pathToUrl(Urls.userDetail, {id});
    return await request.patch(url, dataToSend, newTokens.access);
}

export const registerUser = async (data) => {
    return await request.post(Urls.userRegister, data);
}