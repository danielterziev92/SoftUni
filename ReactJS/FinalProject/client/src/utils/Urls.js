const BASE_URL = 'http://localhost:8000/api'

const Urls = {
    baseUrl: BASE_URL,
    token: `${BASE_URL}/token/`,
    refreshToken: `${BASE_URL}/token/refresh/`,
    products: `${BASE_URL}/products/`,
    productCreate: `${BASE_URL}/product/create/`,
    productDetail: id => `${BASE_URL}/product/${id}/`,
    productInfo: id => `${BASE_URL}/product/${id}/info/`,
    productInfoCreate: id => `${BASE_URL}/product/${id}/info/create/`,
    productBarcodes: id => `${BASE_URL}/product/${id}/barcodes/`,
    productBarcodesCreate: id => `${BASE_URL}/product/${id}/barcodes/create/`,
    productUploadImage: `${BASE_URL}/product-info/upload/`,
    groups: `${BASE_URL}/groups/`,
    groupDetail: id => `${BASE_URL}/group/${id}/`,
    groupCreate: `${BASE_URL}/group/create/`,
}

export default Urls;