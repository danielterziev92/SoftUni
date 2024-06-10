import {useLayoutEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-hot-toast";

import {singInUserAction} from "../../features/user/userActions.js";
import {changeIsMinimizedAsideBarAction} from "../../features/common/commonActions.js";

import useForm from "../../hooks/useForm.js";

import style from "./Auth.module.css";

import getNextUrl from "../../utils/getNextUrl.js";
import Paths from "../../utils/Paths.js";

const initialData = {
    email: '',
    password: '',
}

const FormKey = {
    Email: 'email',
    Password: 'password'
}

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const theme = useSelector(state => state.common.theme);

    const [isWrapperActive, setIsWrapperActive] = useState(true);
    const [errorEmailMessage, setErrorEmailMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const {formValue, changeDataHandler, onSubmitForm} = useForm(initialData, singInSubmitFormHandler);

    useLayoutEffect(() => {
        dispatch(changeIsMinimizedAsideBarAction(false));

        async function initialLoad() {
            await sleep(0);

            setIsWrapperActive(false);
        }

        initialLoad();
    }, []);

    function onBlurCheckEmailHandler() {
        if (!formValue[FormKey.Email]) return setErrorEmailMessage('');

        if (!EMAIL_REGEX.test(formValue[FormKey.Email])) {
            setErrorEmailMessage('Please enter a valid email address');
        }
    }

    async function singInSubmitFormHandler(data) {
        const toastId = toast.loading('Loading...');

        const response = await dispatch(singInUserAction(data));

        if (response.meta.requestStatus === 'fulfilled') {
            toast.success(response.payload.message);
            const moveTo = getNextUrl(location);
            navigate(moveTo);
        } else {
            const {message} = response.payload;
            toast.error(message);
        }

        toast.dismiss(toastId);
    }

    async function signUpClickHandler() {
        setIsWrapperActive(true);
        await sleep(1000);

        navigate(Paths.signUp)
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        <section className={`${style.Background} ${theme === 'Dark' && style.Dark}`}>
            <article className={`${style.Wrapper} ${isWrapperActive && style.Active}`}>
                <span className={style.BgAnimate}></span>
                <div className={`${style.FormBox} ${style.Login}`}>
                    <h2 className={style.Animation} style={{'--i': 0, '--j': 21}}>Sign In</h2>
                    <form onSubmit={onSubmitForm}>
                        <div
                            className={`${style.InputBox} ${errorEmailMessage ? style.InputBoxError : ''} ${style.Animation}`}
                            style={{'--i': 1, '--j': 22}}>
                            <input className={formValue[FormKey.Email] === '' ? '' : style.NotEmpty}
                                   type={FormKey.Email} required={true} name={FormKey.Email} aria-required={true}
                                   value={formValue[FormKey.Email]} onChange={changeDataHandler}
                                   onBlur={onBlurCheckEmailHandler}
                            />
                            <label>Email</label>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        {errorEmailMessage &&
                            <div className={style.Error}>
                                <p>{errorEmailMessage}</p>
                            </div>
                        }
                        <div className={`${style.InputBox} ${style.Animation}`} style={{'--i': 2, '--j': 23}}>
                            <input type={showPassword ? 'text' : FormKey.Password} required={true}
                                   name={FormKey.Password}
                                   value={formValue[FormKey.Password]} onChange={changeDataHandler}
                            />
                            <label>Password</label>
                            {showPassword
                                ? <i className={`fa-solid fa-eye ${style.ShowHidePassword}`}
                                     onClick={() => setShowPassword(false)}></i>
                                : <i className={`fa-solid fa-eye-slash ${style.ShowHidePassword}`}
                                     onClick={() => setShowPassword(true)}></i>
                            }
                            <i className="fa-solid fa-lock"></i>
                        </div>
                        <button className={`${style.Button} ${style.Animation}`} style={{'--i': 3, '--j': 24}}>
                            Sing In
                        </button>
                        <div className={`${style.LogregLink} ${style.Animation}`} style={{'--i': 4, '--j': 25}}>
                            <p>
                                Don&apos;t have an account?
                                <a onClick={signUpClickHandler}>Sign Up</a>
                            </p>
                        </div>
                    </form>
                </div>
                <div className={`${style.InfoText} ${style.Login}`}>
                    <h2 className={style.Animation} style={{'--i': 0, '--j': 20}}>Welcome Back!</h2>
                    <p className={style.Animation} style={{'--i': 1, '--j': 22}}>We&apos;re thrilled to see you return
                        to our
                        platform.</p>
                    <p className={style.Animation} style={{'--i': 2, '--j': 25}}> Thank you for choosing us again.</p>
                    <p className={style.Animation} style={{'--i': 3, '--j': 30}}>Enjoy your time!</p>
                </div>
            </article>
        </section>
    );
}