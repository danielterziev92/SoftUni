import * as request from '../lib/request.js'
import Urls from "../utils/Urls.js";
import pathToUrl from "../utils/pathToUrl.js";

export const loginUser = async (data) => {
    return request.post(Urls.token, data);
}

export const getRefreshToken = async (oldToken) => {
    const response = await fetch(Urls.refreshToken, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(oldToken),
    })

    if (!response.ok) {
        throw new Error('Token refresh failed');
    }

    return await response.json();
}

export const getUserById = async (id, token) => {
    const url = pathToUrl(Urls.userDetail, {id});
    return await request.get(url, null, token);
}

export const updateUserById = async (id, token, data) => {
    const {is_staff, is_superuser, is_active, ...dataToSend} = data
    const url = pathToUrl(Urls.userDetail, {id});
    return await request.patch(url, dataToSend, token);
    // const response = await fetch(url, {
    //     method: 'PATCH',
    //     headers: {
    //         'Content-type': 'application/json',
    //         'Authorization': `Bearer ${token}`,
    //     },
    //     body: JSON.stringify(dataToSend),
    // });
    //
    // if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    // }
    //
    // return await response.json();
}

export const registerUser = async (data) => {
    return await request.post(Urls.userRegister, data);
}