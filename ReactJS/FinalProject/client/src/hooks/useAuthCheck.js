import {useLayoutEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {checkAuthenticationAction} from "../features/user/userActions.js";


export default function useAuthCheck() {
    const dispatch = useDispatch();

    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    useLayoutEffect(() => {
        if (isAuthenticated) return;

        dispatch(checkAuthenticationAction());
    });

}