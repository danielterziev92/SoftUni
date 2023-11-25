import {useContext, useEffect, useRef} from "react";

import loginStyle from './Login.module.css';

import useForm from "../../hooks/useForm.js";

import {FormContext} from "../../contexts/FormContext.js";

const initialUserData = {
    username: '',
    password: '',
}

const FormKeyTranslation = {
    username: 'Потребителско име',
    password: 'Парола',
}

export default function Login() {
    const focusedInput = useRef('username');
    const {formRef} = useContext(FormContext);
    const {formValue, updateFormValue, changeDataHandler, onSubmitForm,} = useForm(initialUserData);

    useEffect(() => {
        focusedInput.current.focus();
    }, [focusedInput]);


    // <div className={formStyle.name}>
    //     <label htmlFor={FormKey.Name}>Име:</label>
    //     <input id={FormKey.Name} type="text" name={FormKey.Name} value={formValue[FormKey.Name]}
    //            onChange={inputChangeHandler}/>
    // </div>
    return (
        <article>
            <form ref={formRef} onSubmit={onSubmitForm} className={loginStyle.Form}>
                {Object.entries(initialUserData).map(([key, value]) => (
                    <div key={key}>
                        <label htmlFor={key}>{FormKeyTranslation[key]}</label>
                        <input id={key} value={value} name={formValue[key]} onChange={changeDataHandler}
                               ref={focusedInput.current === key ? focusedInput : null}/>
                    </div>
                ))}
                <button>Вход</button>
            </form>
        </article>
    );
}