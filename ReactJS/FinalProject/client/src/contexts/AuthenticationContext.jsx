import {createContext, useEffect, useLayoutEffect, useRef, useState} from "react";
import compareObjects from "../utils/compareObjects.js";
import {getCookie, setCookie} from "../utils/cookieManager.js";
import {jwtDecode} from "jwt-decode";
import {useNavigate} from "react-router-dom";
import Paths from "../utils/Paths.js";
import {refreshToken} from "../services/userServices.js";

export const AuthenticationContext = createContext();
AuthenticationContext.displayName = 'AuthenticationContext';

// const authTokenReducer = (state, action) => {
//     switch (action.type) {
//         case 'updateState':
//             return {...state, ...action.payload}
//         case 'updateByKey':
//             return {...state, [action.key]: action.value}
//         default:
//             return state
//     }
// }

export default function AuthenticationProvider({children, isLogin, setIsLogin,}) {
    const [authToken, setAuthToken] = useState({});
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const tokenName = useRef('authToken');
    const dayToExpire = useRef(20);
    const isFirstRender = useRef(true);

    useLayoutEffect(() => {
        const accessToken = getCookie(tokenName.current)
        if (accessToken) {
            setUser(jwtDecode(accessToken));
            setIsLogin(true);
            navigate(Paths.afterLogin);
        } else {
            navigate(Paths.login);
        }
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        let intervalId = 0;
        if (!compareObjects(authToken, {}) && !isLogin) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
            navigate(Paths.afterLogout);
        }

        if (!compareObjects(authToken, {}) && authToken.refresh) {
            const intervalTime = 4 * 60 * 1000;
            intervalId = setInterval(() => {
                refreshToken(authToken).then(newToken => {
                    updateAuthToken(newToken);
                    setCookie(tokenName.current, newToken.access, dayToExpire.current);
                });
            }, intervalTime)
        }

        return () => clearInterval(intervalId);
    }, [authToken]);

    const updateAuthToken = (newToken) => setAuthToken(newToken);

    const updateTokenByKey = (key, value) => setAuthToken(state => ({...state, [key]: value}));

    const updateUser = (newUser) => setUser(newUser);

    const authenticationContextValues = {
        authToken,
        updateAuthToken,
        updateTokenByKey,
        user,
        updateUser,
        tokenName,
        dayToExpire,
        setIsLogin,
    }

    return (
        <AuthenticationContext.Provider value={authenticationContextValues}>
            {children}
        </AuthenticationContext.Provider>
    )
}
// 1:38:12