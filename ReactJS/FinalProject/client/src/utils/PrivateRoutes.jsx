import {useLayoutEffect} from "react";
import {Navigate, Outlet, useLocation,} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';

import Paths from "./Paths.js";
import getNextUrl from "./getNextUrl.js";

const PrivateRoutes = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    function getNextLocation() {
        if (location.pathname === Paths.signOut) return Paths.afterSignOut;

        const nextLocation = `${Paths.signIn}?next=${location.pathname}`
        console.log('nextLocation', nextLocation);
        return nextLocation;
    }

    useLayoutEffect(() => {
        console.log(isAuthenticated);
        if (isAuthenticated) {
            return getNextUrl(location);
        }

        // dispatch(fetchUserDataAction());
    }, [dispatch]);

    return isAuthenticated ? <Outlet/> : <Navigate to={getNextLocation()} replace/>;
};

export default PrivateRoutes;