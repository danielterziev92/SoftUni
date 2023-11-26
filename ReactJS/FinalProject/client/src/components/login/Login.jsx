import {useEffect, useRef} from "react";
import {Link} from "react-router-dom";

import authStyle from "../Authentication.module.css";

import useForm from "../../hooks/useForm.js";

import Paths from "../../utils/Paths.js";

const initialUserData = {
    username: '',
    password: '',
}

const FormInformation = {
    username: {type: 'text', label: 'Потребителско име'},
    password: {type: 'password', label: 'Парола'},
}

export default function Login() {
    const focusedInput = useRef('username');

    const {formValue, changeDataHandler, onSubmitForm,} = useForm(initialUserData, loginSubmitFormHandler);

    useEffect(() => {
        if (focusedInput.current) {
            focusedInput.current.focus();
        }
    }, [focusedInput]);

    async function loginSubmitFormHandler(value) {
        console.log('Login Function');
        console.log(value)
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