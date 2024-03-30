import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";

import authStyle from "../Authentication.module.css";

// import {AuthenticationContext} from "../../contexts/AuthenticationContext.jsx";
// import {MessageContext} from "../../contexts/MessageContext.jsx";

import useForm from "../../hooks/useForm.js";

import {selectUser} from "../../features/user/userSlice.js";
import {loginUser} from "../../features/user/userActions.js";


import Paths from "../../utils/Paths.js";
import CookieManager from "../../utils/cookieManager.js";
import axios from "axios";
import Urls from "../../utils/Urls.js";
// import compareObjects from "../../utils/compareObjects.js";

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
    const user = useSelector(selectUser);
    // const {user, loginUserInApp} = useContext(AuthenticationContext);
    // const {updateMessage, updateStatus} = useContext(MessageContext);

    // const focusedInput = useRef('username');

    const navigate = useNavigate();

    // const {formValue, changeDataHandler, onSubmitForm,} = useForm(initialUserData, loginSubmitFormHandler);

    // useLayoutEffect(() => {
    //     if (!compareObjects(user, {})) {
    //         navigate(Paths.afterLogin);
    //     }
    // }, []);

    // useEffect(() => {
    //     if (focusedInput.current) {
    //         focusedInput.current.focus();
    //     }
    // }, [focusedInput]);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginUser(formData)).then((result) => {
            if (result.payload && result.payload.message === 'Login successful.') {
                navigate('/');
            }
        });
    };

    // function loginSubmitFormHandler(data) {
    //     dispatch(loginUser(data));
    // }


    return (
        <section className={authStyle.Section}>
            <article>
                {/*<form onSubmit={onSubmitForm} className={authStyle.Form} data-testid="login-form">*/}
                {/*    {Object.entries(formValue).map(([key, value]) => (*/}
                {/*        <div key={key}>*/}
                {/*            <label htmlFor={key}>{FormInformation[key].label}</label>*/}
                {/*            <input id={key} value={formValue[key]} name={key} type={FormInformation[key].type}*/}
                {/*                   onChange={changeDataHandler}*/}
                {/*                   ref={focusedInput.current === key ? focusedInput : null}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*    <div>*/}

                {/*        <button type="submit" disabled={user.loading}>{user.loading ? 'Зарежда се...' : 'Вход'}</button>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <span>Нямате регистрация ?</span>*/}
                {/*        <Link to={Paths.register}>Регистирай се</Link>*/}
                {/*    </div>*/}
                {/*</form>*/}
                {/*{user.error && <div>Error: {user.error}</div>}
                */}

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" disabled={user.loading}>
                        {user.loading ? 'Loading...' : 'Login'}
                    </button>
                    {user.error && <div>Error: {user.error}</div>}
                </form>
            </article>
        </section>
    );
}