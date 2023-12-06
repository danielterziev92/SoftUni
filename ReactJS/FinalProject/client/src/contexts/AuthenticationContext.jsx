import {createContext, useContext, useEffect, useLayoutEffect, useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";

import {MessageContext} from "./MessageContext.jsx";

import cookieManager from "../utils/cookieManager.js";
import tokenManager from "../utils/tokenManager.js";

import compareObjects from "../utils/compareObjects.js";

import Paths from "../utils/Paths.js";

export const AuthenticationContext = createContext();
AuthenticationContext.displayName = 'AuthenticationContext';

export const tokenName = 'token';
export const tokenExpDays = 10;

const nonLoginPaths = [Paths.login, Paths.register, Paths.index]


export default function AuthenticationProvider({children, isLogin, setIsLogin,}) {
    const {updateMessage, updateStatus} = useContext(MessageContext);

    const [authToken, setAuthToken] = useState({});
    const [user, setUser] = useState({});

    const isFirstRender = useRef(true);
    const intervalId = useRef(0);

    const navigate = useNavigate();
    const location = useLocation();


    useLayoutEffect(() => {
        const pathName = location.pathname;
        const accessToken = authToken.access;

        if (nonLoginPaths.indexOf(pathName)) return;

        if (accessToken) {
            navigate(pathName);
            return;
        }

        const refreshToken = cookieManager.getCookie(tokenName);

        if (!refreshToken) {
            navigate(Paths.login);
            return;
        }

        tokenManager.getNewTokens(refreshToken)
            .then(setNewTokens)
            .catch(e => {
                if (e.code === 'token_not_valid') {
                    cookieManager.deleteCookie(tokenName);
                    navigate(Paths.login);
                    return;
                }
            });

        navigate(pathName === Paths.login ? Paths.afterLogin : pathName);
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (!compareObjects(authToken, {}) && !isLogin) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
            navigate(Paths.afterLogout);
        }

        // if (!compareObjects(authToken, {}) && authToken.refresh) {
        //     const intervalTime = 4 * 60 * 1000;
        //     intervalId.current = setInterval(() => {
        //         const refreshToken = cookieManager.getCookie(tokenName);
        //         const newToken = tokenManager.getNewTokens(refreshToken);
        //         setNewTokens(newToken);
        //     }, intervalTime)
        // }
        //
        // return () => clearInterval(intervalId.current);
    }, [authToken]);

    const updateAuthToken = (newToken) => setAuthToken(newToken);

    const updateTokenByKey = (key, value) => setAuthToken(state => ({...state, [key]: value}));

    const updateUser = (newUser) => setUser(newUser);

    const loginUserInApp = (data) => {
        setNewTokens(data);

        updateMessage('Вписахте се успешно');
        updateStatus('success');
        navigate(Paths.afterLogin);
    }

    const logoutUser = () => {
        updateUser({});
        updateAuthToken({});
        cookieManager.deleteCookie(tokenName);
    }

    function setNewTokens(tokens) {
        updateAuthToken(tokens);
        updateUser(jwtDecode(tokens.access));
        cookieManager.setCookie(tokenName, tokens.refresh, tokenExpDays);
    }

    const authenticationContextValues = {
        authToken,
        updateAuthToken,
        updateTokenByKey,
        user,
        updateUser,
        loginUserInApp,
        logoutUser,
        setNewTokens,
        setIsLogin,
    }

    return (
        <AuthenticationContext.Provider value={authenticationContextValues}>
            {children}
        </AuthenticationContext.Provider>
    )
}