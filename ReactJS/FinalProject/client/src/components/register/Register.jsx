import {useContext} from "react";

import useForm from "../../hooks/useForm.js";

import {FormContext} from "../../contexts/FormContext.js";


const initialUserData = {
    username: '',
    email: '',
    password: '',
}

export default function Register() {
    const {formValue, updateFormValue, changeDataHandler, onSubmitForm,} = useForm(initialUserData);

    const {formRef} = useContext(FormContext);

    return (
        <article>
            <form ref={formRef} onSubmit={onSubmitForm}>
                <button>Регистрация</button>
            </form>
        </article>
    );
}