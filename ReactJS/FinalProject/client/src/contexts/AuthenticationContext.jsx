import {createContext, useEffect, useLayoutEffect, useState} from "react";
import compareObjects from "../utils/compareObjects.js";
import {getCookie} from "../utils/cookieManager.js";
import {jwtDecode} from "jwt-decode";
import {useNavigate} from "react-router-dom";
import Paths from "../utils/Paths.js";

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

export default function AuthenticationProvider({children, setIsLogin}) {
    const [authToken, setAuthToken] = useState({});
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const accessToken = getCookie('authToken')
        if (accessToken) {
            setUser(jwtDecode(accessToken));
            setIsLogin(true);
            navigate(Paths.afterLogin);
        }
    }, []);

    useEffect(() => {
        if (!compareObjects(authToken, {})) {
            setIsLogin(true);
        }
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
    }

    return (
        <AuthenticationContext.Provider value={authenticationContextValues}>
            {children}
        </AuthenticationContext.Provider>
    )
}
