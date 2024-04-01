import cookieManager from "../utils/cookieManager.js";
import tokenManager from "../utils/tokenManager.js";

export default async function returnNewAuthToken() {
    const refreshToken = cookieManager.getCookie('');
    const newTokens = await tokenManager.getNewTokens(refreshToken);
    cookieManager.setCookie('', newTokens.refresh, '');

    return newTokens;
}