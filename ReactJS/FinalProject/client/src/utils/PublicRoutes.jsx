import {useLayoutEffect, useState} from "react";
import {Navigate, Outlet, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {fetchUserDataAction, updateUserDataAction} from "../features/user/userActions.js";
import {changeIsMinimizedAsideBarAction} from "../features/common/commonActions.js";

import Paths from "./Paths.js";
import objectManager from "./compareObjects.js";

export default function PublicRoutes() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.data);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const [firstVisited, setFirstVisited] = useState(null);


    useLayoutEffect(() => {
        dispatch(changeIsMinimizedAsideBarAction(false));


        if (isAuthenticated) {
            const {search} = location;
            const match = search.match(/(?<=\?next=).*/);
            console.log(match)
            if (match) return match[0];

            return Paths.dashboard;
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