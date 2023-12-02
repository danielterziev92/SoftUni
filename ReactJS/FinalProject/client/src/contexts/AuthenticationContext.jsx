import {createContext, useContext, useEffect, useLayoutEffect, useRef, useState} from "react";
import compareObjects from "../utils/compareObjects.js";
import {deleteCookie, getCookie, setCookie} from "../utils/cookieManager.js";
import {jwtDecode} from "jwt-decode";
import {useNavigate} from "react-router-dom";
import Paths from "../utils/Paths.js";
import {getRefreshToken} from "../services/userServices.js";
import checkToken from "../utils/tokenManager.js";
import {MessageContext} from "./MessageContext.jsx";

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
    const {updateMessage, updateStatus} = useContext(MessageContext);


    useLayoutEffect(() => {
        const accessToken = getCookie(tokenName.current);

        if (!checkToken(accessToken)) {
            return;
        }

        if (accessToken) {
            setUser(jwtDecode(accessToken));
            setIsLogin(true);
            navigate(Paths.afterLogin);
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
                getRefreshToken(authToken).then(newToken => {
                    updateAuthToken(newToken);
                    setCookie(tokenName.current, newToken.access, dayToExpire.current);
                    setCookie(tokenName.current, newToken.refresh, 20);
                });
            }, intervalTime)
        }

        return () => clearInterval(intervalId);
    }, [authToken]);

    const updateAuthToken = (newToken) => setAuthToken(newToken);

    const updateTokenByKey = (key, value) => setAuthToken(state => ({...state, [key]: value}));

    const updateUser = (newUser) => setUser(newUser);

    const loginUserInApp = (data) => {
        console.log(data)
        updateAuthToken(data);
        updateUser(jwtDecode(data.access));

        setCookie(tokenName.current, data.access, dayToExpire.current);
        setCookie('refresh', data.refresh, 90);

        updateMessage('Вписахте се успешно');
        updateStatus('success');
        navigate(Paths.afterLogin);
    }

    const logoutUser = () => {
        updateUser({});
        updateAuthToken({});
        deleteCookie(tokenName.current);
        deleteCookie('refresh');
    }

    const authenticationContextValues = {
        authToken,
        updateAuthToken,
        updateTokenByKey,
        user,
        updateUser,
        loginUserInApp,
        logoutUser,
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