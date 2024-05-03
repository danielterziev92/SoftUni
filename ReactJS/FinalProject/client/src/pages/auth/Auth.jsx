import {useEffect, useLayoutEffect, useState} from "react";
import {useLocation, useNavigate,} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {fetchUserDataAction, updateUserDataAction} from "../../features/user/userActions.js";
import {changeIsMinimizedAsideBarAction} from "../../features/common/commonActions.js";

import style from "./Auth.module.css";

import SignIn from "../../components/sign-in/SignIn.jsx";
import SignUp from "../../components/sing-up/SignUp.jsx";

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

    useLayoutEffect(() => {
        if (isAuthenticated) return location.pathname === Paths.auth ? navigate(Paths.index) : navigate(-1);

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


    return (
        <section className={style.Background}>
            <article className={`${style.Wrapper} ${isWrapperActive && style.Active}`}>
                <span className={style.BgAnimate}></span>
                <span className={style.BgAnimate2}></span>
                <SignIn setIsWrapperActive={setIsWrapperActive}/>
                <SignUp setIsWrapperActive={setIsWrapperActive}/>
            </article>
        </section>
    );
}