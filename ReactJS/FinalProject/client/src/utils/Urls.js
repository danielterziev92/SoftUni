const BASE_URL = 'http://localhost:8000/api'

const Urls = {
    baseUrl: BASE_URL,
    token: `${BASE_URL}/token/`,
    refreshToken: `${BASE_URL}/token/refresh/`,
    userDetail: `${BASE_URL}/user/:id/`,
    userRegister: `${BASE_URL}/user/create/`,
    products: `${BASE_URL}/products/`,
    productCreate: `${BASE_URL}/product/create/`,
    productDetail: `${BASE_URL}/product/:id/`,
    productInfo: `${BASE_URL}/product/:id/info/`,
    productInfoCreate: `${BASE_URL}/product/:id/info/create/`,
    productBarcodes: `${BASE_URL}/product/:id/barcodes/`,
    productBarcodesCreate: `${BASE_URL}/product/:id/barcodes/create/`,
    productUploadImage: `${BASE_URL}/product-info/upload/`,
    groups: `${BASE_URL}/groups/`,
    groupDetail: `${BASE_URL}/group/:id/`,
    groupCreate: `${BASE_URL}/group/create/`,
}

export default Urls;