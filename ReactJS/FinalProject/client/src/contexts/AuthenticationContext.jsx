import {createContext, useState} from "react";

export const AuthenticationContext = createContext();
AuthenticationContext.displayName = 'AuthenticationContext';


export default function AuthenticationProvider({children}) {
    const [authToken, setAuthToken] = useState('');
    const [user, setUser] = useState({});

    const authenticationContextValues = {}

    return (
        <AuthenticationContext.Provider value={authenticationContextValues}>
            {children}
        </AuthenticationContext.Provider>
    )
}
