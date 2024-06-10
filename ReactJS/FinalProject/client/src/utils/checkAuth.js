import {toast} from "react-hot-toast";

import {checkAuthenticationAction} from "../features/user/userActions.js";

import Paths from "./Paths.js";
import getNextDestination from "./getNextDestination.js";
import {useSelector} from "react-redux";


export default async function checkAuth(location, dispatch, navigate) {

    const isUserAthenticated = useSelector(state => state.user.isAuthenticated);
    let isAuthenticated;

    if (isAuthenticated) return;
    const response = await dispatch(checkAuthenticationAction());
    isAuthenticated = response.payload;

    if (isAuthenticated) {
        if (location.pathname === Paths.auth && (location.hash === '' || location.hash === Paths.signIn)) {
            const message = 'You\'re already signed in! If you need to sign in as a different user, please log out first.'
            toast.error(message);
        }

        if (location.pathname === Paths.auth && (location.hash === Paths.signUp)) {
            const message = 'You\'re already logged in. If you wish to create another account, please log out first.'
            toast.error(message);
        }

        navigate(getNextDestination());
    }
}