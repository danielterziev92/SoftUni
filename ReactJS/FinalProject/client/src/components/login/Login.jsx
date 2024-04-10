import {useEffect, useLayoutEffect, useRef} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {addMessage} from "../../features/message/messageSlice.js";
import {selectIsAuthenticated, selectUser} from "../../features/user/userSlice.js";

import {fetchUserData, loginUser, updateUserDataAction} from "../../features/user/userActions.js";

import authStyle from "../Authentication.module.css";

import useForm from "../../hooks/useForm.js";

import Paths from "../../utils/Paths.js";
import CookieManager from "../../utils/cookieManager.js";
import objectManager from "../../utils/compareObjects.js";

const initialUserData = {
    email: '',
    password: '',
}

export const FormInformation = {
    email: {type: 'email', label: 'Имейл'},
    password: {type: 'password', label: 'Парола'},
}

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const focusedInput = useRef('username');
    const {formValue, changeDataHandler, onSubmitForm,} = useForm(initialUserData, loginSubmitFormHandler);

    const user = useSelector(selectUser);
    const isAuthenticated = useSelector(selectIsAuthenticated);

    useLayoutEffect(() => {
        if (isAuthenticated) return navigate(-1)

        const userCookieData = CookieManager.getCookie('userData');
        if (userCookieData !== null && objectManager.compareObjects(userCookieData, {}) && objectManager.notEmptyValues(user)) {
            dispatch(fetchUserData());
            return navigate(-1);
        }

        if (!objectManager.notEmptyValues(userCookieData)) {
            navigate(-1)
        }

        updateUserDataAction(userCookieData);
    }, []);

    useEffect(() => {
        if (focusedInput.current && focusedInput.current.focus) {
            focusedInput.current.focus();
        }
    }, [focusedInput.current]);

    function loginSubmitFormHandler(data) {
        dispatch(loginUser(data)).then(result => {
            if (result.payload && result.payload.message === 'Login successful.') {
                addMessage(result.payload.message)
                navigate('/');
            }
        });
    }


    return (
        <section className={authStyle.Section}>
            <article>
                <form onSubmit={onSubmitForm} className={authStyle.Form} data-testid="login-form">
                    {Object.entries(formValue).map(([key, value]) => (
                        <div key={key}>
                            <label htmlFor={key}>{FormInformation[key].label}</label>
                            <input id={key} value={formValue[key]} name={key} type={FormInformation[key].type}
                                   onChange={changeDataHandler}
                                   ref={focusedInput.current === key ? focusedInput : null}
                            />
                        </div>
                    ))}
                    <div>
                        <button type="submit" disabled={user.loading}>{user.loading ? 'Зарежда се...' : 'Вход'}</button>
                    </div>
                    <div>
                        <span>Нямате регистрация ?</span>
                        <Link to={Paths.register}>Регистирай се</Link>
                    </div>
                </form>
            </article>
        </section>
    );
}