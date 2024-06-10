import {useLayoutEffect} from "react";
import {useDispatch} from "react-redux";
import {toast} from "react-hot-toast";

import {logoutUserAction} from "../../features/user/userActions.js";


export default function SignOut() {
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        async function logoutUser() {
            const toastId = toast.loading('Logging out...');
            const response = await dispatch(logoutUserAction());

            if (response.meta.requestStatus === 'fulfilled') {
                toast.success(response.payload.message);
            } else {
                toast.error(response.payload.message);
            }

            toast.dismiss(toastId);
        }

        logoutUser();
    }, []);

    return null;
}