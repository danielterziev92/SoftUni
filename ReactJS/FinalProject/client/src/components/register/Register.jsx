import {useContext, useEffect, useReducer, useRef,} from "react";
import {Link} from "react-router-dom";

import authStyle from "../Authentication.module.css";

import {MessageContext} from "../../contexts/MessageContext.jsx";

import useForm from "../../hooks/useForm.js";

import {loginUser, registerUser} from "../../services/userService.js";

import Paths from "../../utils/Paths.js";

const FormKey = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    RepeatPassword: 'repeat_password',
}

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const initialState = {
    validUsername: false,
    focusUsername: false,
    validEmail: false,
    focusEmail: false,
    validPassword: false,
    focusPassword: false,
    validPasswordMatch: false,
    focusPasswordMatch: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_VALID_NAME':
            return {...state, validUsername: action.payload};
        case 'SET_FOCUS_USER':
            return {...state, focusUsername: action.payload};
        case 'SET_VALID_EMAIL':
            return {...state, validEmail: action.payload};
        case 'SET_FOCUS_EMAIL':
            return {...state, focusEmail: action.payload};
        case 'SET_VALID_PASSWORD':
            return {...state, validPassword: action.payload};
        case 'SET_FOCUS_PASSWORD':
            return {...state, focusPassword: action.payload};
        case 'SET_VALID_PASSWORD_MATCH':
            return {...state, validPasswordMatch: action.payload};
        case 'SET_FOCUS_PASSWORD_MATCH':
            return {...state, focusPasswordMatch: action.payload};
        default:
            return state;
    }
};

const reducerActions = {
    setValidUsername: 'SET_VALID_NAME',
    setFocusUsername: 'SET_FOCUS_USER',
    setValidEmail: 'SET_VALID_EMAIL',
    setFocusEmail: 'SET_FOCUS_EMAIL',
    setValidPassword: 'SET_VALID_PASSWORD',
    setFocusPassword: 'SET_FOCUS_PASSWORD',
    setValidPasswordMatch: 'SET_VALID_PASSWORD_MATCH',
    setFocusPasswordMatch: 'SET_FOCUS_PASSWORD_MATCH',
}

export default function Register() {
    const {updateMessage, updateStatus} = useContext(MessageContext);
    const {loginUserInApp} = useContext(AuthenticationContext);

    const [state, dispatch] = useReducer(reducer, initialState);

    const userRef = useRef();

    const {formValue, changeDataHandler, onSubmitForm} = useForm(
        Object.fromEntries(Object.keys(FormKey).map(key => [FormKey[key], '']))
        , registerSubmitFormHandler
    );

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        dispatch({type: reducerActions.setValidUsername, payload: USER_REGEX.test(formValue[FormKey.Username])});
    }, [formValue[FormKey.Username]]);

    useEffect(() => {
        dispatch({type: reducerActions.setValidEmail, payload: EMAIL_REGEX.test(formValue[FormKey.Email])});
    }, [formValue[FormKey.Email]]);

    useEffect(() => {
        dispatch({
            type: reducerActions.setValidPassword,
            payload: PASSWORD_REGEX.test(formValue[FormKey.Password]),
        });
        dispatch({
            type: reducerActions.setValidPasswordMatch,
            payload: formValue[FormKey.Password] === formValue[FormKey.RepeatPassword],
        });
    }, [formValue[FormKey.Password], formValue[FormKey.RepeatPassword]]);

    async function registerSubmitFormHandler(value) {
        const message = checkAllValue(value);
        if (message) {
            updateMessage(message);
            updateStatus('error');
            return;
        }

        try {
            await registerUser({...value});
            const token = await loginUser({username: value.username, password: value.password});
            loginUserInApp(token);
        } catch (e) {
            updateMessage(e.message);
            updateStatus('error');
        }

        function checkAllValue(obj) {
            if (Object.values(obj).every(value => !value) || Object.values(obj).some(value => !value)) {
                return 'Всички полета са задължителни';
            }

            if (/\s/.test(obj.username)) {
                return 'Потребителско име не може да има празно място';
            }
        }
    }

    return (
        <section className={authStyle.Section}>
            <article>
                <form onSubmit={onSubmitForm} className={authStyle.Form} aria-label="register-form">
                    <div>
                        <label htmlFor={FormKey.Username}>Потребителско име:
                            <span className={state.validUsername ? authStyle.success : authStyle.hide}>
                            <i className="fa-solid fa-check"></i>
                            </span>
                            <span
                                className={state.validUsername || !formValue[FormKey.Username] ? authStyle.hide : authStyle.error}>
                            <i className="fa-solid fa-xmark"></i>
                            </span>
                        </label>
                        <input type="text" id={FormKey.Username} ref={userRef}
                               name={FormKey.Username} value={formValue[FormKey.Username]}
                               autoComplete="off" required={true}
                               aria-invalid={state.validUsername ? "false" : "true"} aria-describedby="usernote"
                               onChange={changeDataHandler}
                               onFocus={() => dispatch({type: reducerActions.setFocusUsername, payload: true})}
                               onBlur={() => dispatch({type: reducerActions.setFocusUsername, payload: true})}
                               aria-label='username'
                        />
                        <p id="usernote" aria-label="usernote"
                           className={state.focusUsername && formValue[FormKey.Username] && !state.validUsername ? authStyle.instructions : authStyle.hide}>
                            <i className="fa-solid fa-circle-info"></i>
                            <ul>Потребителското име трябва да има:
                                <li>Между 4 и 23 символа</li>
                                <li>Трябва да започва с буква</li>
                                <li>Позволени са само букви, цифри, долна черта и терета</li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <label htmlFor={FormKey.Email}>Имейл:
                            <span className={state.validEmail ? authStyle.success : authStyle.hide}>
                            <i className="fa-solid fa-check"></i>
                            </span>
                            <span
                                className={state.validEmail || !formValue[FormKey.Email] ? authStyle.hide : authStyle.error}>
                            <i className="fa-solid fa-xmark"></i>
                            </span>
                        </label>
                        <input type="email" id={FormKey.Email}
                               name={FormKey.Email} value={formValue[FormKey.Email]}
                               autoComplete="off" required={true}
                               aria-invalid={state.validEmail ? "false" : "true"} aria-describedby="emailnote"
                               onChange={changeDataHandler}
                               onFocus={() => dispatch({type: reducerActions.setFocusEmail, payload: true})}
                               onBlur={() => dispatch({type: reducerActions.setFocusName, payload: false})}
                               aria-label='email'
                        />
                        <p id="emailnote" aria-label="emailnote"
                           className={state.focusEmail && formValue[FormKey.Email] && !state.validEmail ? authStyle.instructions : authStyle.hide}>
                            <i className="fa-solid fa-circle-info"></i>
                            <ul>Имейла трябва да съдържа:
                                <li>Всички букви трябва да са на латиница</li>
                                <li>Трябва да започва с букви или цифри</li>
                                <li>Трябва да съдържа @</li>
                                <li>Трябва да завършва с разширението на домейна</li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <label htmlFor={FormKey.Password}>Парола:
                            <span className={state.validPassword ? authStyle.success : authStyle.hide}>
                            <i className="fa-solid fa-check"></i>
                            </span>
                            <span
                                className={state.validPassword || !formValue[FormKey.Password] ? authStyle.hide : authStyle.error}>
                            <i className="fa-solid fa-xmark"></i>
                            </span>
                        </label>
                        <input type="password" id={FormKey.Password} required={true}
                               name={FormKey.Password} value={formValue[FormKey.Password]}
                               aria-invalid={state.validPassword ? "false" : "true"} aria-describedby="passwordnote"
                               onChange={changeDataHandler}
                               onFocus={() => dispatch({type: reducerActions.setFocusPassword, payload: true})}
                               onBlur={() => dispatch({type: reducerActions.setFocusPassword, payload: false})}
                               aria-label='password'
                        />
                        <p id="passwordnote" aria-label="passwordnote"
                           className={state.focusPassword && formValue[FormKey.Password] && !state.validPassword ? authStyle.instructions : authStyle.hide}>
                            <i className="fa-solid fa-circle-info"></i>
                            <ul>Паролата трябва да има:
                                <li>Между 8 и 24 символа</li>
                                <li>Главна и малка буква, цифра и специален символ: @, #, $, %</li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <label htmlFor={FormKey.RepeatPassword}>Повтори парола:
                            <span className={state.validPasswordMatch && formValue[FormKey.RepeatPassword]
                                ? authStyle.success
                                : authStyle.hide}>
                            <i className="fa-solid fa-check"></i>
                            </span>
                            <span className={state.validPasswordMatch || !formValue[FormKey.RepeatPassword]
                                ? authStyle.hide
                                : authStyle.error}>
                            <i className="fa-solid fa-xmark"></i>
                            </span>
                        </label>
                        <input type="password" id={FormKey.RepeatPassword} required={true}
                               name={FormKey.RepeatPassword} value={formValue[FormKey.RepeatPassword]}
                               aria-invalid={state.validPasswordMatch ? "false" : "true"} aria-describedby="confirmnote"
                               onChange={changeDataHandler}
                               onFocus={() => dispatch({type: reducerActions.setFocusPasswordMatch, payload: true})}
                               onBlur={() => dispatch({type: reducerActions.setFocusPasswordMatch, payload: false})}
                        />
                        <p id="confirmnote"
                           className={state.focusPasswordMatch && !state.validPasswordMatch ? authStyle.instructions : authStyle.hide}>
                            <i className="fa-solid fa-circle-info"></i>
                            Паролите не съвпадат!
                        </p>
                    </div>
                    <div>
                        <button
                            disabled={!state.validUsername || !state.validEmail || !state.validPassword || !state.validPasswordMatch}>
                            Регистрация
                        </button>
                    </div>
                    <div>
                        <span>Имате регистрация ?</span>
                        <Link to={Paths.login}>Впиши се</Link>
                    </div>
                </form>
            </article>
        </section>
    );
}