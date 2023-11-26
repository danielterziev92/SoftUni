import {Navigate, Outlet,} from "react-router-dom";
import Paths from "./Paths.js";
const PrivateRoutes = () => {
    const user = false;

    return user ? <Outlet/> : <Navigate to={Paths.login} replace/>;
};

export default PrivateRoutes;