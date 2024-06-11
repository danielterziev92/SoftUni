import {useLayoutEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {checkAuthenticationAction} from "../features/user/userActions.js";
import {useNavigate} from "react-router-dom";
import {changeIsMinimizedAsideBarAction} from "../features/common/commonActions.js";


export default function useAuthCheck() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    useLayoutEffect(() => {
        if (isAuthenticated) return;

        dispatch(checkAuthenticationAction());
        dispatch(changeIsMinimizedAsideBarAction(true));
    });

}