import {useContext} from "react";
import {Navigate, Outlet,} from "react-router-dom";

import Paths from "./Paths.js";
import {AuthenticationContext} from "../contexts/AuthenticationContext.jsx";
import compareObjects from "./compareObjects.js";

const PrivateRoutes = () => {
    const {user} = useContext(AuthenticationContext);

    return compareObjects(user, {}) ? <Navigate to={Paths.login} replace/> : <Outlet/>;
};

export default PrivateRoutes;