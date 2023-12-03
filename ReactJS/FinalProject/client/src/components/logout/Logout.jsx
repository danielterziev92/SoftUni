import {useContext, useLayoutEffect} from "react";

import {AuthenticationContext} from "../../contexts/AuthenticationContext.jsx";
import {MessageContext} from "../../contexts/MessageContext.jsx";

import cookieManager from "../../utils/cookieManager.js";

export default function Logout() {
    const {tokenName, updateAuthToken, updateUser} = useContext(AuthenticationContext);
    const {updateMessage, updateStatus} = useContext(MessageContext);

    useLayoutEffect(() => {
        cookieManager.deleteCookie(tokenName.current);

        updateAuthToken({});
        updateUser({});
        updateMessage('Успешно се отписахте');
        updateStatus('success');
    }, []);

    return null;
}