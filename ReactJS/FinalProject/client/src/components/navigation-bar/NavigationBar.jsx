import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {changeIsMinimizedAsideBarAction} from "../../features/common/commonActions.js";

import style from './NavigationBar.module.css';

import NavigationBarTools from "../navigation-bar-tools/NavigationBarTools.jsx";

import Paths from "../../utils/Paths.js";

export default function NavigationBar() {
    const dispatch = useDispatch();

    const showAsideBar = useSelector(state => state.common.isMinimizedAsideBar);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    return (
        <div className={style.NavigationBar}>
            <div className={style.LeftContainer}>
                <Link to={Paths.index}>
                    <figure>
                        <img src="/public/logo.png" alt="Logo"/>
                    </figure>
                </Link>
                {isAuthenticated && (
                    <div className={`${style.Menu} ${showAsideBar ? '' : `${style.Close}`}`}
                         onClick={() => dispatch(changeIsMinimizedAsideBarAction(!showAsideBar))}>
                        <div className={style.MenuLine}></div>
                        <div className={style.MenuLine}></div>
                        <div className={style.MenuLine}></div>
                    </div>
                )}
            </div>
            <div className={style.RightContainer}>
                {isAuthenticated
                    ? <NavigationBarTools/>
                    : (
                        <ul className={style.Sign}>
                            <li><Link to={Paths.signIn}>Sign In</Link></li>
                            <li><Link to={Paths.signUp}>Sign Up</Link></li>
                        </ul>
                    )
                }
            </div>
        </div>
    )
}