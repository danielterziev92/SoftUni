import {useEffect, useLayoutEffect, useState} from "react";
import {useLocation, useNavigate,} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {fetchUserDataAction, updateUserDataAction} from "../../features/user/userActions.js";
import {changeIsMinimizedAsideBarAction} from "../../features/common/commonActions.js";

import style from "./Auth.module.css";

import SignIn from "../sign-in-old/SignIn.jsx";
import SignUp from "../sign-up/SignUp.jsx";

import Paths from "../../utils/Paths.js";
import CookieManager from "../../utils/cookieManager.js";
import objectManager from "../../utils/compareObjects.js";

export default function Auth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [isWrapperActive, setIsWrapperActive] = useState(false);

    const user = useSelector(state => state.user.data);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    useEffect(() => {
        const {hash} = location;

        dispatch(changeIsMinimizedAsideBarAction(false));

        if (hash.slice(1) === 'sign-up') {
            setIsWrapperActive(true);
            return;
        }
        setIsWrapperActive(false);
    }, [location]);


    return (
        <section className={style.Background}>
            <article className={`${style.Wrapper} ${isWrapperActive && style.Active}`}>
                <span className={style.BgAnimate}></span>
                <span className={style.BgAnimate2}></span>
                <SignIn/>
                <SignUp setIsWrapperActive={setIsWrapperActive}/>
            </article>
        </section>
    );
}