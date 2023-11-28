import {useContext, useEffect, useLayoutEffect, useRef} from "react";
import {Link, useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";

import authStyle from "../Authentication.module.css";

import {AuthenticationContext} from "../../contexts/AuthenticationContext.jsx";
import {MessageContext} from "../../contexts/MessageContext.jsx";

import useForm from "../../hooks/useForm.js";

import {loginUser} from "../../services/userServices.js";

import Paths from "../../utils/Paths.js";
import {setCookie} from "../../utils/cookieManager.js";
import compareObjects from "../../utils/compareObjects.js";

const initialUserData = {
    username: '',
    password: '',
}

const FormInformation = {
    username: {type: 'text', label: 'Потребителско име'},
    password: {type: 'password', label: 'Парола'},
}

export default function Login() {
    const {updateAuthToken, updateUser, user, tokenName, dayToExpire} = useContext(AuthenticationContext);
    const {updateMessage, updateStatus} = useContext(MessageContext);
    const focusedInput = useRef('username');
    const navigate = useNavigate();


    const {formValue, changeDataHandler, onSubmitForm,} = useForm(initialUserData, loginSubmitFormHandler);

    useLayoutEffect(() => {
        if (!compareObjects(user, {})) {
            navigate(Paths.afterLogin);
        }
    }, []);

    useEffect(() => {
        if (focusedInput.current) {
            focusedInput.current.focus();
        }
    }, [focusedInput]);

    async function loginSubmitFormHandler(data) {
        try {
            const response = await loginUser(data);
            updateAuthToken(response);
            updateUser(jwtDecode(response.access));

            setCookie(tokenName.current, response.access, dayToExpire.current);
            setCookie('refresh', response.refresh, 90);
            updateMessage('Вписахте се успешно');
            updateStatus('success');
            navigate(Paths.afterLogin);
        } catch (e) {
            updateMessage('sadasdsa');
            updateStatus('error');
            console.log('This come from error')
            console.log(e);
        }
    }


    return (
        <section className={authStyle.Section}>
            <article>
                <form onSubmit={onSubmitForm} className={authStyle.Form}>
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
                        <button>Вход</button>
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