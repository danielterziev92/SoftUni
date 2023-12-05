import {useContext, useLayoutEffect} from "react";

import {AuthenticationContext, tokenName} from "../../contexts/AuthenticationContext.jsx";
import {MessageContext} from "../../contexts/MessageContext.jsx";

import cookieManager from "../../utils/cookieManager.js";

export default function Logout() {
    const {updateAuthToken, updateUser} = useContext(AuthenticationContext);
    const {updateMessage, updateStatus} = useContext(MessageContext);

    useLayoutEffect(() => {
        cookieManager.deleteCookie(tokenName);

        updateAuthToken({});
        updateUser({});
        updateMessage('Успешно се отписахте');
        updateStatus('success');
    }, []);

    return null;
}