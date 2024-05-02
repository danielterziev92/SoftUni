import {useDispatch} from "react-redux";
import {toast} from "react-hot-toast";

import {signUpUserAction} from "../../features/user/userActions.js";

import useForm from "../../hooks/useForm.js";

import style from "../../pages/auth/Auth.module.css";
import {useEffect, useReducer, useState} from "react";


const initialFormData = {
    email: '',
    password: '',
    re_password: '',
}

const FormKey = {
    Email: 'email',
    Password: 'password',
    RePassword: 're_password',
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
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function SignUp({setIsWrapperActive}) {
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);
    const [validationPasswordMessages, setValidationPasswordMessages] = useState([]);

    const {formValue, changeDataHandler, onSubmitForm} = useForm(initialFormData, singUpSubmitFormHandler);

    useEffect(() => {
        const password = formValue[FormKey.Password];
        const messages = new Set(validationPasswordMessages);

        Object.entries(regexCriteria).forEach(([key, regex]) => {
            if (!regex.test(password)) {
                messages.add(regexCriteriaMessages[key]);
            } else {
                messages.delete(regexCriteriaMessages[key]);
            }
        });

        setValidationPasswordMessages(Array.from(messages));
    }, [formValue[FormKey.Password]]);

    useEffect(() => {
        console.log(validationPasswordMessages)
    }, [validationPasswordMessages]);

    function onBlurCheckEmailHandler() {
        if (formValue[FormKey.Email] === '') return;

        if (!EMAIL_REGEX.test(formValue[FormKey.Email])) {
            toast.error('Please enter a valid email address');
        }
    }

    async function singUpSubmitFormHandler(data) {
        const toastId = toast.loading('Loading...');

        const response = await dispatch(signUpUserAction(data));

        if (response.meta.requestStatus === 'fulfilled') {
            toast.success(response.payload.message);
        } else {
            const {message} = response.payload;
            toast.error(message);
        }

        toast.dismiss(toastId);
    }


    return (
        <>
            <div className={`${style.FormBox} ${style.Register}`}>
                <h2 className={style.Animation} style={{'--i': 19, '--j': 0}}>Sign Up</h2>
                <form onSubmit={onSubmitForm}>
                    <div className={`${style.InputBox} ${style.Animation}`} style={{'--i': 20, '--j': 1}}>
                        <input className={formValue[FormKey.Email] !== '' && style.NotEmpty}
                               type="email" required={true} name={FormKey.Email}
                               value={formValue[FormKey.Email]} onChange={changeDataHandler}
                               onBlur={onBlurCheckEmailHandler}
                        />
                        <label>Email</label>
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className={`${style.InputBox} ${style.Animation}`} style={{'--i': 21, '--j': 2}}>
                        <input type={showPassword ? 'text' : FormKey.Password} required={true} name={FormKey.Password}
                               value={formValue[FormKey.Password]} onChange={changeDataHandler}/>
                        <label>Password</label>
                        {showPassword
                            ? <i className={`fa-solid fa-eye-slash ${style.ShowHidePassword}`}
                                 onClick={() => setShowPassword(false)}></i>
                            : <i className={`fa-solid fa-eye ${style.ShowHidePassword}`}
                                 onClick={() => setShowPassword(true)}></i>
                        }
                        <i className="fa-solid fa-lock"></i>
                    </div>

                    <div className={`${style.InputBox} ${style.Animation}`} style={{'--i': 22, '--j': 3}}>
                        <input type={showRePassword ? 'text' : FormKey.Password} required={true}
                               name={FormKey.RePassword}
                               value={formValue[FormKey.RePassword]} onChange={changeDataHandler}/>
                        <label>Repeat Password: </label>
                        {showRePassword
                            ? <i className={`fa-solid fa-eye-slash ${style.ShowHidePassword}`}
                                 onClick={() => setShowRePassword(false)}></i>
                            : <i className={`fa-solid fa-eye ${style.ShowHidePassword}`}
                                 onClick={() => setShowRePassword(true)}></i>
                        }
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    <ul className={style.ValidationMessages} style={{'--i': 22, '--j': 3}}>
                        {validationPasswordMessages.map(message => <li key={message}>{message}</li>)}
                    </ul>
                    <button className={`${style.Button} ${style.Animation}`} style={{'--i': 24, '--j': 4}}
                            disabled={validationPasswordMessages.length > 0}
                    >
                        Sign Up
                    </button>
                    <div className={`${style.LogregLink} ${style.Animation}`} style={{'--i': 25, '--j': 5}}>
                        <p>
                            Already have an account?
                            <a onClick={() => setIsWrapperActive(false)}>Sign In</a>
                        </p>
                    </div>
                </form>
            </div>
            <div className={`${style.InfoText} ${style.Register}`}>
                <h2 className={style.Animation} style={{'--i': 19, '--j': 0}}>Welcome!</h2>
                <p className={style.Animation} style={{'--i': 20, '--j': 1}}>Ready to join our platform?</p>
                <p className={style.Animation} style={{'--i': 25, '--j': 2}}>We&apos;re excited to have you on our
                    board.</p>
                <p className={style.Animation} style={{'--i': 30, '--j': 3}}>Let&apos;s get started</p>
            </div>
        </>
    )
}