import {useRef, useState} from "react";

import indexStyle from './Index.module.css'

import Login from "../login/Login.jsx";
import Register from "../register/Register.jsx";

import {FormContext} from "../../contexts/FormContext.js";

export default function Index() {
    const [isLogin, setIsLogin] = useState(true);
    const loginFormRef = useRef();
    const registerFormRef = useRef();

    const loginSubmitFormHandler = async (value) => {
        loginFormRef.current.requestSubmit();
        console.log('Login Function');
        console.log(value)
    }

    const registerSubmitFormHandler = async (value) => {
        registerFormRef.current.requestSubmit();
        console.log('Register    Function');
        console.log(value)
    }

    return (
        <section className={indexStyle.Index}>
            {isLogin
                ? (<FormContext.Provider value={{onSubmitFormHandler: loginSubmitFormHandler, formRef: loginFormRef}}>
                    <Login/>
                </FormContext.Provider>)
                :
                (< FormContext.Provider
                    value={{onSubmitFormHandler: registerSubmitFormHandler, formRef: registerFormRef}}>
                    <Register/>
                </FormContext.Provider>)
            }
        </section>
    );
}