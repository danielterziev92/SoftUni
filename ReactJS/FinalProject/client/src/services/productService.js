import Urls from "../utils/Urls.js";

import * as request from '../lib/request.js'

export const getAllProducts = async () => {
    // await new Promise(resolve => setTimeout(resolve, 2000));
    return request.get(Urls.products);
}

export const getProductById = async (productId) => {
    // await new Promise(resolve => setTimeout(resolve, 2000));
    return request.get(Urls.productDetail(productId));
}

export const createProduct = async (data) => {
    return request.post(Urls.productCreate, data);
}

export const updateProductById = async (productId, data) => {
    return request.put(Urls.productDetail(productId), data);
}

export const deleteProductById = async (productId) => {
    return request.remove(Urls.productDetail(productId));
}

export const getAllGroups = async () => {
    return request.get(Urls.groups)
}