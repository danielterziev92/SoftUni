import {useEffect, useRef} from "react";
import {Link} from "react-router-dom";

import authStyle from "../Authentication.module.css";

import useForm from "../../hooks/useForm.js";
import Paths from "../../utils/Paths.js";


const initialUserData = {
    username: '',
    email: '',
    password: '',
}

const FormInformation = {
    username: {type: 'text', label: 'Потребителско име'},
    email: {type: 'email', label: 'Емайл'},
    password: {type: 'password', label: 'Парола'},
}

export default function Register() {
    const focusedInput = useRef('username');
    const {formValue, changeDataHandler, onSubmitForm,} = useForm(initialUserData, registerSubmitFormHandler);

    useEffect(() => {
        if (focusedInput.current) {
            focusedInput.current.focus();
        }
    }, [focusedInput]);

    async function registerSubmitFormHandler(value) {
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
                        <button>Регистрация</button>
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