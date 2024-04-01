import {useContext, useLayoutEffect} from "react";

import {MessageContext} from "../../contexts/MessageContext.jsx";

import cookieManager from "../../utils/cookieManager.js";

export default function Logout() {
    const {updateMessage, updateStatus} = useContext(MessageContext);

    useLayoutEffect(() => {

        updateMessage('Успешно се отписахте');
        updateStatus('success');
    }, []);

    return null;
}