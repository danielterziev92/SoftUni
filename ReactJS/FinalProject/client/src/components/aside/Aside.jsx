import {useContext} from "react";

import clipboard from 'clipboard-copy';

import style from './Aside.module.css';


import {sections} from "./asideSections.js";
import {Link} from "react-router-dom";


export default function Aside() {

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

            {/*{sections.map((section, index) =>*/}
            {/*<NavigationGroups key={index} {...section}/>)*/}
            {/*}*/}
        </aside>
    );
}