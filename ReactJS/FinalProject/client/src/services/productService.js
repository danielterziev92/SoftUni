import Urls from "../utils/Urls.js";

import * as request from '../lib/request.js'
import pathToUrl from "../utils/pathToUrl.js";

export const getAllProducts = async () => {
    // await new Promise(resolve => setTimeout(resolve, 2000));
    return request.get(Urls.products);
}

export const getProductById = async (productId) => {
    // await new Promise(resolve => setTimeout(resolve, 2000));
    const url = pathToUrl(Urls.productDetail, {id: productId});
    return request.get(url);
}

export const createProduct = async (data) => {
    return request.post(Urls.productCreate, data);
}

export const updateProductById = async (productId, data) => {
    const url = pathToUrl(Urls.productDetail, {id: productId});
    return request.put(url, data);
}

export const deleteProductById = async (productId) => {
    const url = pathToUrl(Urls.productDetail, {id: productId});
    return request.remove(url);
}

export const getAllGroups = async () => {
    return request.get(Urls.groups)
}