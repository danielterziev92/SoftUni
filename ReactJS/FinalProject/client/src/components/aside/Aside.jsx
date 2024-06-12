import {useEffect, useLayoutEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {changeIsMinimizedAsideBarAction} from "../../features/common/commonActions.js";

import style from './Aside.module.css';

import {sections} from "./asideSections.js";

export default function Aside() {
    const dispatch = useDispatch();

    const isAuthenticated = useSelector(store => store.user.isAuthenticated);
    const showAsideBar = useSelector(state => state.common.isMinimizedAsideBar);

    const [showComponent, setShowComponent] = useState(false);

    useLayoutEffect(() => {
        if (isAuthenticated) {
            setShowComponent(true);
            return;
        }

        setShowComponent(false);
    }, [isAuthenticated, showAsideBar]);

    useEffect(() => {
        if (showComponent) {
            dispatch(changeIsMinimizedAsideBarAction(true));
            return;
        }

        dispatch(changeIsMinimizedAsideBarAction(false));
    }, [showComponent]);


    return (
        showAsideBar
            ? <aside className={style.Aside}>
                <ul>
                    {sections.map((section, index) => (
                        <li key={index}>
                            <Link to={section.itemHREF}>
                                <i className={section.itemIClassName}></i>
                                <span>{section.itemTitle}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
            : <></>
    );
}