import {useLayoutEffect} from "react";
import {Navigate, Outlet,} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';

import {checkAuthenticationAction, fetchUserDataAction} from "../features/user/userActions.js";

import Paths from "./Paths.js";

const PrivateRoutes = () => {
    const dispatch = useDispatch();

    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    useLayoutEffect(() => {
        dispatch(checkAuthenticationAction());
        dispatch(fetchUserDataAction());
    }, [dispatch]);

    return isAuthenticated ? <Outlet/> : <Navigate to={Paths.auth} replace/>;
};

export default PrivateRoutes;