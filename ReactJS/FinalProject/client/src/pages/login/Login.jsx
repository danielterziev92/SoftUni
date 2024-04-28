import {useEffect, useLayoutEffect, useRef} from "react";
import {Link, useLocation, useNavigate,} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-hot-toast";

import {fetchUserDataAction, loginUserAction, updateUserDataAction} from "../../features/user/userActions.js";

import authStyle from "../../components/Authentication.module.css";

import useForm from "../../hooks/useForm.js";

import Paths from "../../utils/Paths.js";
import CookieManager from "../../utils/cookieManager.js";
import objectManager from "../../utils/compareObjects.js";


const initialUserData = {
    email: '',
    password: '',
}

export const FormInformation = {
    email: {type: 'email', label: 'Email'},
    password: {type: 'password', label: 'Password'},
}

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const focusedInput = useRef('username');
    const {formValue, changeDataHandler, onSubmitForm,} = useForm(initialUserData, loginSubmitFormHandler);

    const user = useSelector(state => state.user.data);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const browserHistory = useSelector(state => state.history.browser);


    useLayoutEffect(() => {
        if (isAuthenticated) return location.pathname === Paths.login ? navigate(Paths.index) : navigate(-1);

        const userCookieData = CookieManager.getCookie('userData');
        if (userCookieData !== null && objectManager.compareObjects(userCookieData, {}) && objectManager.notEmptyValues(user)) {
            dispatch(fetchUserDataAction());
            return navigate(-1);
        }

        if (!objectManager.notEmptyValues(userCookieData)) {
            navigate(-1)
        }

        dispatch(updateUserDataAction(userCookieData));
    }, []);

    useEffect(() => {
        if (focusedInput.current && focusedInput.current.focus) {
            focusedInput.current.focus();
        }
    }, [focusedInput.current]);


    async function loginSubmitFormHandler(data) {
        const toastId = toast.loading('Loading...');

        const response = await dispatch(loginUserAction(data));

        if (response.meta.requestStatus === 'fulfilled') {
            toast.success(response.payload.message);
            const moveTo = browserHistory[0] !== Paths.login ? browserHistory[0] : Paths.afterLogin
            navigate(moveTo);
        } else {
            const {message} = response.payload;
            toast.error(message);
        }

        toast.dismiss(toastId);
    }


    return (
        <section className={authStyle.Section}>
            <article>
                <form onSubmit={onSubmitForm} className={authStyle.Form} data-testid="login-form">
                    {Object.entries(formValue).map(([key, value]) => (
                        <div key={key}>
                            <label htmlFor={key}>{FormInformation[key].label}</label>
                            <input id={key} value={formValue[key]} name={key}
                                   type={FormInformation[key].type}
                                   onChange={changeDataHandler}
                                   ref={focusedInput.current === key ? focusedInput : null}
                            />
                        </div>
                    ))}
                    <div>
                        <button type="submit">Login</button>
                    </div>
                    <div>
                        <span>Don&apos;t have a registration?</span>
                        <Link to={Paths.register}>Sign up</Link>
                    </div>
                </form>
            </article>
        </section>
    );
}