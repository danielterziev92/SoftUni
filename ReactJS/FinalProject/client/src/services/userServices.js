import * as request from '../lib/request.js'
import Urls from "../utils/Urls.js";
import pathToUrl from "../utils/pathToUrl.js";

export const loginUser = async (data) => {
    return request.post(Urls.token, data);
}

export const getRefreshToken = async (oldToken) => {
    const response = await fetch(Urls.refreshToken, {
        method: "POST",
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
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })

    if (!response.ok) {
        throw new Error('Грешна заявка. Моля свържете се с администратор');
    }

    return await response.json();
}