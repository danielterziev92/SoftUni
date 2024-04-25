import {useLayoutEffect} from "react";
import {Navigate, Outlet,} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';

import {selectIsAuthenticated} from "../features/user/userSlice.js";
import {checkAuthenticationAction, fetchUserDataAction} from "../features/user/userActions.js";

import Paths from "./Paths.js";

const PrivateRoutes = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(checkAuthenticationAction());
        dispatch(fetchUserDataAction());
    }, [dispatch]);

    return isAuthenticated ? <Outlet/> : <Navigate to={Paths.login} replace/>;
};

export default PrivateRoutes;