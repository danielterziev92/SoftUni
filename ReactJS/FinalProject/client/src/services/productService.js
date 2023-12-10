import Urls from "../utils/Urls.js";

import * as request from '../lib/request.js'
import pathToUrl from "../utils/pathToUrl.js";
import returnNewAuthToken from "../lib/authToken.js";

export const getAllProducts = async () => {
    const newTokens = await returnNewAuthToken();

    // await new Promise(resolve => setTimeout(resolve, 2000));
    return request.get(Urls.products, null, newTokens.access);
}

export const getProductById = async (productId) => {
    const newTokens = await returnNewAuthToken();

    // await new Promise(resolve => setTimeout(resolve, 2000));
    const url = pathToUrl(Urls.productDetail, {id: productId});
    return request.get(url, null, newTokens.access);
}

export const createProduct = async (data) => {
    const newTokens = await returnNewAuthToken();

    return request.post(Urls.productCreate, data, newTokens.access);
}

export const updateProductById = async (productId, data) => {
    const newTokens = await returnNewAuthToken();

    const url = pathToUrl(Urls.productDetail, {id: productId});
    return request.put(url, data, newTokens.access);
}

export const deleteProductById = async (productId) => {
    const newTokens = await returnNewAuthToken();

    const url = pathToUrl(Urls.productDetail, {id: productId});
    return request.remove(url, newTokens.access);
}
