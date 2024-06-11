import {Navigate, Outlet, useLocation,} from "react-router-dom";
import {useSelector} from 'react-redux';

import Paths from "./Paths.js";

const PrivateRoutes = () => {
    const location = useLocation();

    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    function getNextLocation() {
        if (location.pathname === Paths.signOut) return Paths.afterSignOut;

        return `${Paths.signIn}?next=${location.pathname}`.match(/next=(.*)/)[1];
    }

    return isAuthenticated ? <Outlet/> : <Navigate to={getNextLocation()} replace/>;
};

export default PrivateRoutes;