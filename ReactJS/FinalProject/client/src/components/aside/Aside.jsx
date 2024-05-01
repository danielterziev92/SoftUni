import clipboard from 'clipboard-copy';

import style from './Aside.module.css';


import {sections} from "./asideSections.js";
import {Link} from "react-router-dom";
import {useLayoutEffect, useState} from "react";
import {useSelector} from "react-redux";


export default function Aside() {
    const isAuthenticated = useSelector(store => store.user.isAuthenticated);
    const showAsideBar = useSelector(state => state.common.isMinimizedAsideBar);

    const [showComponent, setShowComponent] = useState(false);

    useLayoutEffect(() => {
        if (isAuthenticated) {
            if (showAsideBar) {
                setShowComponent(true);
            } else {
                setShowComponent(false);
            }
        }

    }, [isAuthenticated, showAsideBar]);

    // const copyEmailOnClickHandler = async () => {
    //     try {
    //         await clipboard('');
    //         updateMessage(`Имейл адрес:${''} беше копиран в клипборда`);
    //         updateStatus('success');
    //     } catch (error) {
    //         updateMessage('Грешка при копирането в клипборда');
    //         updateStatus('error');
    //     }
    // }

    if (showComponent) {
        return (
            <aside className={style.Aside}>
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
        );
    } else {
        return <></>;
    }
}