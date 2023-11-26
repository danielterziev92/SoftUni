import {createContext} from "react";

export const AuthenticationContext = createContext();
AuthenticationContext.displayName = 'AuthenticationContext';

export default function AuthenticationProvider({children}) {


    const authenticationContextValues = {}

    return (
        <AuthenticationContext.Provider value={authenticationContextValues}>
            {children}
        </AuthenticationContext.Provider>
    )
}
