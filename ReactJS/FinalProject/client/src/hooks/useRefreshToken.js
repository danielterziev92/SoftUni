import {useContext, useLayoutEffect, useState} from "react";
import {getCookie, setCookie} from "../utils/cookieManager.js";
import {AuthenticationContext} from "../contexts/AuthenticationContext.jsx";
import {useNavigate} from "react-router-dom";
import Paths from "../utils/Paths.js";
import {getRefreshToken} from "../services/userServices.js";

export default function useRefreshToken() {
    const [newToken, setNewToken] = useState({});
    const navigate = useNavigate();

    const {logoutUser, tokenName, dayToExpire} = useContext(AuthenticationContext);

    useLayoutEffect(() => {
        const oldAccessToken = getCookie('authToken');
        const oldRefreshToken = getCookie('refresh');
        if (!oldAccessToken || !oldRefreshToken) {
            logoutUser();
            navigate(Paths.login)
        }

        refreshWithNewToken();
    }, []);

    const refreshWithNewToken = async () => {
        const newToken = await getRefreshToken({
            'access': getCookie(tokenName.current),
            'refresh': getCookie('refresh')
        });
        setCookie(tokenName.current, newToken.access, dayToExpire.current);
        setCookie('refresh', newToken.refresh, 20);
        setNewToken(newToken);
    }

    return {
        newToken
    };
}
