const BASE_URL = 'http://localhost:8000/api'

const Urls = {
    baseUrl: BASE_URL,
    CRSFToken: `${BASE_URL}/crsf-token/`,
    index: `${BASE_URL}/`,
    user: {
        details: `${BASE_URL}/user/`,
        register: `${BASE_URL}/user/create/`,
        login: `${BASE_URL}/user/login/`,
        logout: `${BASE_URL}/user/logout/`,
        authentication: `${BASE_URL}/user/check-auth/`,
        profile: `${BASE_URL}/user/info/`,
        update: `${BASE_URL}/user/edit/`,
        deleteProfilePicture: `${BASE_URL}/user/delete-profile-picture/`,
    },


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
    groupDelete: `${BASE_URL}/group/:id/`,
}

export default Urls;