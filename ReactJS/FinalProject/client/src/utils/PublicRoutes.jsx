import {useLayoutEffect, useState} from "react";
import {Navigate, Outlet, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {changeIsMinimizedAsideBarAction} from "../features/common/commonActions.js";

import getNextUrl from "./getNextUrl.js";

export default function PublicRoutes() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const [firstVisited, setFirstVisited] = useState(null);


    useLayoutEffect(() => {
        if (!isAuthenticated) {
            console.log('here')
            dispatch(changeIsMinimizedAsideBarAction(false));
        }

        if (isAuthenticated) {
            const moveTo = getNextUrl(location);
            console.log('moveTo', moveTo)
            console.log(isAuthenticated);
            navigate(moveTo);
        }
        // const userData = JSON.parse(localStorage.getItem('userData'));
        // if (userData !== null && objectManager.compareObjects(userData, {}) && objectManager.notEmptyValues(user)) {
        //     dispatch(fetchUserDataAction());
        //     return navigate(-1);
        // }

        // if (!objectManager.notEmptyValues(userData)) {
        //     navigate(-1)
        // }
        //
        // dispatch(updateUserDataAction(userData));
    }, []);

    return isAuthenticated ? <Navigate to={firstVisited} replace/> : <Outlet/>
}