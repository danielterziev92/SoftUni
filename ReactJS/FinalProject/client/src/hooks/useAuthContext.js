import {useContext} from "react";
import {AuthenticationContext} from "../contexts/AuthenticationContext.jsx";

export default function useAuthContext() {
    return useContext(AuthenticationContext);
}