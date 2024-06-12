import {useLayoutEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-hot-toast";

import {singInUserAction} from "../../features/user/userActions.js";

import style from "./SignIn.module.css";

import useForm from "../../hooks/useForm.js";
import Paths from "../../utils/Paths.js";
import {changeIsMinimizedAsideBarAction} from "../../features/common/commonActions.js";
import getNextUrl from "../../utils/getNextUrl.js";
import compareObjects from "../../utils/compareObjects.js";

const initialData = {
    email: 'daniel.st.terziev@gmail.com',
    password: 'DN9206040560d$t',
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

    const [errorEmailMessage, setErrorEmailMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const {formValue, changeDataHandler, onSubmitForm} = useForm(initialData, singInSubmitFormHandler);

    useLayoutEffect(() => {
        dispatch(changeIsMinimizedAsideBarAction(false));
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

    return (
        <section className={theme === 'Dark' ? style.Dark : undefined}>
            <article className={`${style.Wrapper}`}>
                <h2>Sign In</h2>
                <form onSubmit={onSubmitForm}>
                    <div className={`${style.InputBox} ${errorEmailMessage ? style.InputBoxError : ''}`}>
                        <input className={formValue[FormKey.Email] ? style.NotEmpty : ''}
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
                    <div className={style.InputBox}>
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
                    <button className={style.Button}>Sing In</button>
                    <div className={style.LogregLink}>
                        <p>Don&apos;t have an account? <Link to={Paths.signUp}>Sign Up</Link></p>
                    </div>
                </form>
            </article>
        </section>
    );
}