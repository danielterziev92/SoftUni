import Urls from "../utils/Urls.js";

import * as request from '../lib/request.js'
import pathToUrl from "../utils/pathToUrl.js";
import cookieManager from "../utils/cookieManager.js";
import {tokenExpDays, tokenName} from "../contexts/AuthenticationContext.jsx";
import tokenManager from "../utils/tokenManager.js";

export const getAllProducts = async () => {
    const refreshToken = cookieManager.getCookie(tokenName);
    const newTokens = await tokenManager.getNewTokens(refreshToken);
    cookieManager.setCookie(tokenName, newTokens.refresh, tokenExpDays);

    // await new Promise(resolve => setTimeout(resolve, 2000));
    return request.get(Urls.products, null, newTokens.access);
}

export const getProductById = async (productId) => {
    const refreshToken = cookieManager.getCookie(tokenName);
    const newTokens = await tokenManager.getNewTokens(refreshToken);
    console.log(newTokens)
    cookieManager.setCookie(tokenName, newTokens.refresh, tokenExpDays);

    // await new Promise(resolve => setTimeout(resolve, 2000));
    const url = pathToUrl(Urls.productDetail, {id: productId});
    return request.get(url, null, newTokens.access);
}

export const createProduct = async (data) => {
    const refreshToken = cookieManager.getCookie(tokenName);
    const newTokens = await tokenManager.getNewTokens(refreshToken);
    cookieManager.setCookie(tokenName, newTokens.refresh, tokenExpDays);

    return request.post(Urls.productCreate, data, newTokens.access);
}

export const updateProductById = async (productId, data) => {
    const refreshToken = cookieManager.getCookie(tokenName);
    const newTokens = await tokenManager.getNewTokens(refreshToken);
    cookieManager.setCookie(tokenName, newTokens.refresh, tokenExpDays);

    const url = pathToUrl(Urls.productDetail, {id: productId}, newTokens.access);
    return request.put(url, data);
}

export const deleteProductById = async (productId) => {
    const refreshToken = cookieManager.getCookie(tokenName);
    const newTokens = await tokenManager.getNewTokens(refreshToken);
    cookieManager.setCookie(tokenName, newTokens.refresh, tokenExpDays);

    const url = pathToUrl(Urls.productDetail, {id: productId}, newTokens.access);
    return request.remove(url);
}

export const getAllGroups = async () => {
    return request.get(Urls.groups)
}