const baseUrl = 'http://localhost:8000/api'

import * as request from '../lib/request.js'

export const getAllProducts = async () => {
    return request.get(`${baseUrl}/products/`);
}

export const getProductById = async (productId) => {
    // await new Promise(resolve => setTimeout(resolve, 5000));
    return request.get(`${baseUrl}/product/${productId}/`);
}

export const patchProductById = async (productId, data) => {
    return request.put(`${baseUrl}/product/${productId}/`, data);
}

export const deleteProductById = async (productId) => {
    return request.remove(`${baseUrl}/product/${productId}`);
}

export const getAllGroups = async () => {
    return request.get(`${baseUrl}/groups/`)
}