import {useContext, useEffect, useRef} from "react";
import {Link} from "react-router-dom";

import loginStyle from '../Authentication.module.css';

import useForm from "../../hooks/useForm.js";
import {FormContext} from "../../contexts/FormContext.js";
import Paths from "../../utils/Paths.js";
import sectionStyle from "../Authentication.module.css";

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

    const loginSubmitFormHandler = async (value) => {
        console.log('Login Function');
        console.log(value)
    }

    const {formValue, changeDataHandler, onSubmitForm,} = useForm(initialUserData, loginSubmitFormHandler);

    useEffect(() => {
        if (focusedInput.current) {
            focusedInput.current.focus();
        }
    }, [focusedInput]);


    return (
        <section className={sectionStyle.Section}>
            <article>
                <form onSubmit={onSubmitForm} className={loginStyle.Form}>
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
                        <Link to={Paths.register}>Регистрация</Link>
                    </div>
                </form>
            </article>
        </section>
    );
}