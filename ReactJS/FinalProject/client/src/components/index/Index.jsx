import {useRef, useState} from "react";
import {Route, Routes} from "react-router-dom";

import indexStyle from './Index.module.css'

import Login from "../login/Login.jsx";
import Register from "../register/Register.jsx";

import {FormContext} from "../../contexts/FormContext.js";
import Paths from "../../utils/Paths.js";

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

    const loginContextValues = {
        onSubmitFormHandler: loginSubmitFormHandler,
        formRef: loginFormRef,
    }

    const registerContextValues = {
        onSubmitFormHandler: registerSubmitFormHandler,
        formRef: registerFormRef,
    }

    return (
        <section className={indexStyle.Index}>
            <Routes>
                <Route path={Paths.login}
                       element={
                           <FormContext.Provider value={{...loginContextValues}}>
                               <Login/>
                           </FormContext.Provider>
                       }/>
                <Route path={Paths.register}
                       element={
                           <FormContext.Provider value={{...registerContextValues}}>
                               <Register/>
                           </FormContext.Provider>
                       }/>
            </Routes>
        </section>
    );
}