import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {useLocation, useNavigate,} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-hot-toast";

import {fetchUserDataAction, loginUserAction, updateUserDataAction} from "../../features/user/userActions.js";

import style from "./Login.module.css";

import useForm from "../../hooks/useForm.js";

import Paths from "../../utils/Paths.js";
import CookieManager from "../../utils/cookieManager.js";
import objectManager from "../../utils/compareObjects.js";
import {changeIsMinimizedAsideBarAction} from "../../features/common/commonActions.js";
import useRegisterReducer from "../../hooks/useAuthReducerState.js";


const initialUserData = {
    email: '',
    password: '',
}

export const FormInformation = {
    email: {type: 'email', label: 'Email'},
    password: {type: 'password', label: 'Password'},
}

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const focusedInput = useRef('username');
    const [isWrapperActive, setIsWrapperActive] = useState(false);
    const [registerState, registerDispatch] = useRegisterReducer();
    const {formValue, changeDataHandler, onSubmitForm,} = useForm(initialUserData, loginSubmitFormHandler);

    const user = useSelector(state => state.user.data);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const browserHistory = useSelector(state => state.history.browser);
    const showAsideBar = useSelector(state => state.common.isMinimizedAsideBar);

    useEffect(() => {
        dispatch(changeIsMinimizedAsideBarAction(false));
    }, [location.pathname]);

    useLayoutEffect(() => {
        if (isAuthenticated) return location.pathname === Paths.login ? navigate(Paths.index) : navigate(-1);

        const userCookieData = CookieManager.getCookie('userData');
        if (userCookieData !== null && objectManager.compareObjects(userCookieData, {}) && objectManager.notEmptyValues(user)) {
            dispatch(fetchUserDataAction());
            return navigate(-1);
        }

        if (!objectManager.notEmptyValues(userCookieData)) {
            navigate(-1)
        }

        dispatch(updateUserDataAction(userCookieData));
    }, []);

    useEffect(() => {
        if (focusedInput.current && focusedInput.current.focus) {
            focusedInput.current.focus();
        }
    }, [focusedInput.current]);


    async function loginSubmitFormHandler(data) {
        const toastId = toast.loading('Loading...');

        const response = await dispatch(loginUserAction(data));

        if (response.meta.requestStatus === 'fulfilled') {
            toast.success(response.payload.message);
            const moveTo = browserHistory[0] !== Paths.login ? browserHistory[0] : Paths.afterLogin
            navigate(moveTo);
        } else {
            const {message} = response.payload;
            toast.error(message);
        }

        toast.dismiss(toastId);
    }


    return (
        // <section className={style.Section}>
        //     <article>
        //         <form onSubmit={onSubmitForm} className={style.Form} data-testid="login-form">
        //             {Object.entries(formValue).map(([key, value]) => (
        //                 <div key={key}>
        //                     <label htmlFor={key}>{FormInformation[key].label}</label>
        //                     <input id={key} value={formValue[key]} name={key}
        //                            type={FormInformation[key].type}
        //                            onChange={changeDataHandler}
        //                            ref={focusedInput.current === key ? focusedInput : null}
        //                     />
        //                 </div>
        //             ))}
        //             <div>
        //                 <button type="submit">Login</button>
        //             </div>
        //             <div>
        //                 <span>Don&apos;t have a registration?</span>
        //                 <Link to={Paths.register}>Sign up</Link>
        //             </div>
        //         </form>
        //     </article>
        // </section>
        <div className={style.Background}>
            <div className={`${style.Wrapper} ${isWrapperActive && style.Active}`}>
                <span className={style.BgAnimate}></span>
                <span className={style.BgAnimate2}></span>
                {/* Sing In Form */}
                <div className={`${style.FormBox} ${style.Login}`}>
                    <h2 className={style.Animation} style={{'--i': 0, '--j': 21}}>Sign In</h2>
                    <form onSubmit={onSubmitForm}>
                        <div className={`${style.InputBox} ${style.Animation}`} style={{'--i': 1, '--j': 22}}>
                            <input type="email" required={true}/>
                            <label>Email</label>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className={`${style.InputBox} ${style.Animation}`} style={{'--i': 2, '--j': 23}}>
                            <input type="password" required={true}/>
                            <label>Password</label>
                            <i className="fa-solid fa-lock"></i>
                        </div>
                        <button className={`${style.Button} ${style.Animation}`} style={{'--i': 3, '--j': 24}}>Login
                        </button>
                        <div className={`${style.LogregLink} ${style.Animation}`} style={{'--i': 4, '--j': 25}}>
                            <p>
                                Don&apos;t have an account?
                                <a onClick={() => setIsWrapperActive(true)}>Sign Up</a>
                            </p>
                        </div>
                    </form>
                </div>
                <div className={`${style.InfoText} ${style.Login}`}>
                    <h2 className={style.Animation} style={{'--i': 0, '--j': 20}}>Welcome Back!</h2>
                    <p className={style.Animation} style={{'--i': 1, '--j': 21}}>We&apos;re thrilled to see you return
                        to our
                        platform.</p>
                    <p className={style.Animation} style={{'--i': 1, '--j': 22}}> Thank you for choosing us again.</p>
                    <p className={style.Animation} style={{'--i': 1, '--j': 23}}>Enjoy your time!</p>
                </div>

                {/* Sign Up Form*/}
                <div className={`${style.FormBox} ${style.Register}`}>
                    <h2 className={style.Animation} style={{'--i': 19, '--j': 0}}>Sign Up</h2>
                    <form onSubmit={onSubmitForm}>
                        <div className={`${style.InputBox} ${style.Animation}`} style={{'--i': 20, '--j': 1}}>
                            <input type="email" required={true}/>
                            <label>Email</label>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className={`${style.InputBox} ${style.Animation}`} style={{'--i': 21, '--j': 2}}>
                            <input type="password" required={true}/>
                            <label>Password</label>
                            <i className="fa-solid fa-lock"></i>
                        </div>
                        <div className={`${style.InputBox} ${style.Animation}`} style={{'--i': 22, '--j': 3}}>
                            <input type="re_password" required={true}/>
                            <label>Repeat Password: </label>
                            <i className="fa-solid fa-lock"></i>
                        </div>
                        <button className={`${style.Button} ${style.Animation}`} style={{'--i': 22, '--j': 4}}>
                            Login
                        </button>
                        <div className={`${style.LogregLink} ${style.Animation}`} style={{'--i': 23, '--j': 5}}>
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
                    <p className={style.Animation} style={{'--i': 25, '--j': 2}}>We're excited to have you on board.</p>
                    <p className={style.Animation} style={{'--i': 30, '--j': 3}}>Let's get started</p>
                </div>
            </div>
        </div>
    );
}