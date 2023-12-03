import {tokenName} from "../contexts/AuthenticationContext.jsx";

import useAuthContext from "./useAuthContext.js";

import tokenManager from "../utils/tokenManager.js";
import cookieManager from "../utils/cookieManager.js";

export default function useRefreshToken() {
    const {setNewTokens} = useAuthContext();

    return async () => {
        const refreshToken = cookieManager.getCookie(tokenName);

        if (!refreshToken) return;

        return setNewTokens(tokenManager.getNewTokens(refreshToken));
    };
}