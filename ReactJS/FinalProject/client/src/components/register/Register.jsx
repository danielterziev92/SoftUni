import {useContext, useEffect, useRef} from "react";

import useForm from "../../hooks/useForm.js";

import {FormContext} from "../../contexts/FormContext.js";


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
    const {formRef} = useContext(FormContext);
    const {formValue, changeDataHandler, onSubmitForm,} = useForm(initialUserData);


    useEffect(() => {
        if (focusedInput.current) {
            focusedInput.current.focus();
        }
    }, [focusedInput]);

    return (
        <article>
            <form ref={formRef} onSubmit={onSubmitForm}>
                {Object.entries(formValue).map(([key, value]) => (
                    <div key={key}>
                        <label htmlFor={key}>{FormInformation[key].label}</label>
                        <input id={key} value={formValue[key]} name={key} type={FormInformation[key].type}
                               onChange={changeDataHandler}
                               ref={focusedInput.current === key ? focusedInput : null}
                        />
                    </div>
                ))}
                <button>Регистрация</button>
            </form>
        </article>
    );
}