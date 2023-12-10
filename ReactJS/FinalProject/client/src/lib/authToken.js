import cookieManager from "../utils/cookieManager.js";
import tokenManager from "../utils/tokenManager.js";
import {tokenExpDays, tokenName} from "../contexts/AuthenticationContext.jsx";

export default async function returnNewAuthToken() {
    const refreshToken = cookieManager.getCookie(tokenName);
    const newTokens = await tokenManager.getNewTokens(refreshToken);
    cookieManager.setCookie(tokenName, newTokens.refresh, tokenExpDays);

    return newTokens;
}