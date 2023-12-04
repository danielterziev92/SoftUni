import {Navigate, Outlet,} from "react-router-dom";

import cookieManager from "./cookieManager.js";

import Paths from "./Paths.js";
import {tokenName} from "../contexts/AuthenticationContext.jsx";

const PrivateRoutes = () => {
    return cookieManager.getCookie(tokenName) ? <Outlet/> : <Navigate to={Paths.login} replace/>;
};

export default PrivateRoutes;