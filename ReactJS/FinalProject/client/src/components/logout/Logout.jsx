import {useContext, useLayoutEffect} from "react";
import {AuthenticationContext} from "../../contexts/AuthenticationContext.jsx";
import {MessageContext} from "../../contexts/MessageContext.jsx";
import {deleteCookie} from "../../utils/cookieManager.js";

export default function Logout() {
    const {tokenName, updateAuthToken, updateUser} = useContext(AuthenticationContext);
    const {updateMessage, updateStatus} = useContext(MessageContext);

    useLayoutEffect(() => {
        deleteCookie(tokenName.current);

        updateAuthToken({});
        updateUser({});
        updateMessage('Успешно се отписахте');
        updateStatus('success');
    }, []);

    return null;
}