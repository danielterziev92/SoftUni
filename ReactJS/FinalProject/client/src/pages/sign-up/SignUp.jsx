import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-hot-toast";

import {signUpUserAction} from "../../features/user/userActions.js";

import mainStyle from "../sign-in/SignIn.module.css";
import style from "./SignUp.module.css";

import useForm from "../../hooks/useForm.js";
import Paths from "../../utils/Paths.js";
import SignUpNavigator from "../../components/sign-up-navigator/SignUpNavigator.jsx";

const initialFormData = {
    email: '',
    password: '',
    re_password: '',
    conditions: false,
}

const FormKey = {
    Email: 'email',
    Password: 'password',
    RePassword: 're_password',
    Conditions: 'conditions',
}

const regexCriteria = {
    lowercaseRegex: /[a-z]+/,
    uppercaseRegex: /[A-Z]+/,
    digitRegex: /[0-9]+/,
    specialCharRegex: /[!@#$%]+/,
    lengthRegex: /^.{8,24}$/,
}

const regexCriteriaMessages = {
    lowercaseRegex: 'Password must contain at least one lowercase letter.',
    uppercaseRegex: 'Password must contain at least one uppercase letter.',
    digitRegex: 'Password must contain one digit',
    specialCharRegex: 'Password must contain at least one special character (!@#$%).',
    lengthRegex: 'Password must be between 8 and 24 symbols',
}


const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const theme = useSelector(state => state.common.theme);

    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const [validationPasswordMessages, setValidationPasswordMessages] = useState({});
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const {
        formValue,
        updateFormValue,
        changeDataHandler,
        onSubmitForm
    } = useForm(initialFormData, singUpSubmitFormHandler);

    useEffect(() => {
        const password = formValue[FormKey.Password];
        const messages = {...validationPasswordMessages};

        Object.entries(regexCriteria).forEach(([key, regex]) => {
            if (!regex.test(password)) {
                messages[key] = {message: regexCriteriaMessages[key], status: 'error'};
            } else {
                messages[key] = {message: regexCriteriaMessages[key], status: 'success'};
            }
        });

        setValidationPasswordMessages(messages);
    }, [formValue[FormKey.Password]]);

    useEffect(() => {
        const {password, re_password} = formValue;
        if (password !== re_password) {
            setPasswordMismatch(false);
            return;
        }

        setPasswordMismatch(true);
    }, [formValue]);

    function onBlurCheckEmailHandler() {
        if (formValue[FormKey.Email] === '') return;

        if (!EMAIL_REGEX.test(formValue[FormKey.Email])) {
            toast.error('Please enter a valid email address');
        }
    }

    function canSubmitForm() {
        return !(Object.values(formValue).every(value => value !== "" && value !== false) &&
            Object.values(validationPasswordMessages).every(message => message.status === "success"));
    }

    async function singUpSubmitFormHandler(data) {
        const toastId = toast.loading('Loading...');

        const response = await dispatch(signUpUserAction(data));
        const {message} = response.payload;
        if (response.meta.requestStatus === 'fulfilled') {
            toast.success(message);
            updateFormValue(initialFormData);
            navigate(Paths.afterSignUp, {replace: true})
        } else {
            toast.error(message);
        }

        toast.dismiss(toastId);
    }

    function PasswordMismatch() {
        if (!passwordMismatch) {
            return <p className={style.PasswordMismatch}>Passwords mismatch!</p>
        }
        return <p className={style.PasswordMatch}>Passwords match!</p>
    }

    return (
        <section className={theme === 'Dark' && mainStyle.Dark}>
            <SignUpNavigator steps={5} step={2}/>
            <article className={`${mainStyle.Wrapper}`}>
                <h2>Sign Up</h2>
                <form onSubmit={onSubmitForm}>
                    <div className={mainStyle.InputBox}>
                        <input className={formValue[FormKey.Email] === '' ? '' : mainStyle.NotEmpty}
                               type={FormKey.Email} required={true} name={FormKey.Email}
                               value={formValue[FormKey.Email]} onChange={changeDataHandler}
                               onBlur={onBlurCheckEmailHandler}
                        />
                        <label>Email</label>
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className={mainStyle.InputBox}>
                        <input type={showPassword ? 'text' : FormKey.Password} required={true}
                               name={FormKey.Password} value={formValue[FormKey.Password]}
                               onChange={changeDataHandler} onClick={() => setShowMessages(true)}
                               onFocus={() => setShowMessages(true)}/>
                        <label>Password</label>
                        {showPassword
                            ? <i className={`fa-solid fa-eye ${mainStyle.ShowHidePassword}`}
                                 onClick={() => setShowPassword(false)}></i>
                            : <i className={`fa-solid fa-eye-slash ${mainStyle.ShowHidePassword}`}
                                 onClick={() => setShowPassword(true)}></i>
                        }
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    <div className={mainStyle.InputBox}>
                        <input type={showRePassword ? 'text' : FormKey.Password} required={true}
                               name={FormKey.RePassword} value={formValue[FormKey.RePassword]}
                               onChange={changeDataHandler} onClick={() => setShowMessages(true)}
                               onFocus={() => setShowMessages(true)}
                            // onBlur={() => setShowMessages(false)}
                        />
                        <label>Repeat Password: </label>
                        {showRePassword
                            ? <i className={`fa-solid fa-eye ${mainStyle.ShowHidePassword}`}
                                 onClick={() => setShowRePassword(false)}></i>
                            : <i className={`fa-solid fa-eye-slash ${mainStyle.ShowHidePassword}`}
                                 onClick={() => setShowRePassword(true)}></i>
                        }
                        <i className="fa-solid fa-lock"></i>
                        {formValue[FormKey.RePassword] && <PasswordMismatch/>}
                    </div>
                    {showMessages && (
                        <ul className={style.ValidationMessages}>
                            {Object.values(validationPasswordMessages).map((message, key) =>
                                <li key={key}
                                    className={message.status === 'error' ? style.ErrorMessage : style.SuccessMessage}>
                                    {message.message}
                                </li>
                            )}
                        </ul>
                    )}
                    <div className={style.Conditions}>
                        <input type="checkbox" id={FormKey.Conditions} name={FormKey.Conditions}
                               checked={formValue[FormKey.Conditions]} onChange={changeDataHandler}/>
                        <label htmlFor={FormKey.Conditions}>
                            I confirm that I have carefully reviewed and accepted the terms and conditions.
                        </label>
                    </div>

                    <button className={mainStyle.Button} disabled={canSubmitForm()}>Sign Up</button>
                    <div className={mainStyle.LogregLink}>
                        <p>
                            Already have an account?
                            <Link to={Paths.signIn}>Sign In</Link>
                        </p>
                    </div>
                </form>
            </article>
        </section>
    )
}