import {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import style from './NavigationBar.module.css';

import Paths from "../../utils/Paths.js";
import {changeIsMinimizedAsideBarAction} from "../../features/common/commonActions.js";

export default function NavigationBar() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.data);
    const showAsideBar = useSelector(state => state.common.isMinimizedAsideBar);

    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const onClickToggleFullScreenHandler = () => {
        if (!isFullScreen && document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
            setIsFullScreen(true);
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
            setIsFullScreen(false);
        }
    };

    return (
        <div className={style.NavigationBar}>
            <div className={style.LeftContainer}>
                <Link to={Paths.index}>
                    <figure>
                        <img src="/public/logo.png" alt="Logo"/>
                    </figure>
                </Link>
                <div className={`${style.Menu} ${showAsideBar ? '' : `${style.Close}`}`}
                     onClick={() => dispatch(changeIsMinimizedAsideBarAction(!showAsideBar))}>
                    <div className={style.MenuLine}></div>
                    <div className={style.MenuLine}></div>
                    <div className={style.MenuLine}></div>
                </div>
            </div>
            <div className={style.RightContainer}>
                <Link to={Paths.POS} className={style.POS}>
                    POS
                </Link>
                <div className={`${style.FullScreen} tooltip`} onClick={onClickToggleFullScreenHandler}>
                    <i className="fa-solid fa-maximize"></i>
                </div>
                <div className={`${style.Notification} tooltip`}>
                    <i className="fa-regular fa-bell"></i>
                    <span>1</span>
                    {showNotificationDropdown &&
                        <div className={style.NotificationDropdown}>

                        </div>
                    }
                </div>
                <div className={`${style.ProfileDropdown} tooltip`}>
                    <button onClick={() => setShowProfileDropdown(value => !value)}>
                        <figure>
                            <img src={user.picture_url} alt="Profile picture"/>
                        </figure>
                        <span className={style.UserName}>{user.first_name} {user.last_name}</span>
                        <span className={style.UserRole}>Admin</span>
                    </button>
                    {showProfileDropdown &&
                        <div className={style.DropDownProfileMenu}>
                            <ul>
                                <li>
                                    <Link to={Paths.profile} onClick={() => setShowProfileDropdown(false)}>
                                        <i className="fa-solid fa-user"></i>
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to={Paths.logout} onClick={() => setShowProfileDropdown(false)}>
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}