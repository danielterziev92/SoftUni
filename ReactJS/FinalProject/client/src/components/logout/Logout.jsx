import {useContext, useLayoutEffect} from "react";
import {useNavigate} from "react-router-dom";
import {AuthenticationContext} from "../../contexts/AuthenticationContext.jsx";
import {MessageContext} from "../../contexts/MessageContext.jsx";
import {deleteCookie} from "../../utils/cookieManager.js";
import Paths from "../../utils/Paths.js";

export default function Logout() {
    const {tokenName, setIsLogin} = useContext(AuthenticationContext);
    const {updateMessage, updateStatus} = useContext(MessageContext);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        deleteCookie(tokenName.current);

        setIsLogin(false);
        updateMessage('Успешно се отписахте');
        updateStatus('success');

        navigate(Paths.afterLogout);
    }, []);

    return (
        <></>
    );
}