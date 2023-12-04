import {useEffect, useLayoutEffect, useState} from "react";

import style from './Groups.module.css';

import Spinner from "../spinner/Spinner.jsx";

import {getAllGroups} from "../../services/groupService.js";
import MessageBoxModal from "../message-box-modal/MessageBoxModal.jsx";

export default function Groups() {
    const [groups, setGroups] = useState([]);
    const [isGroupModalShow, setIsGroupModalShow] = useState(false);

    useLayoutEffect(() => {
        getAllGroups().then(setGroups).catch(console.log)
    }, []);

    useEffect(() => {
        console.log(groups)
    }, [groups]);

    return (
        <>
            {isGroupModalShow &&
                <MessageBoxModal
                />
            }
            {groups.length > 0
                ?
                (<div className={style.groupList}>
                    <ul className={style.title}>
                        <li>Код</li>
                        <li>Име</li>
                        <li>Подкатегория</li>
                        <li>Действия</li>
                    </ul>
                    <ul>
                        {groups.map(group => (
                            <ul key={group.id} className={style.body}>
                                <li>{group.code}</li>
                                <li>{group.name}</li>
                                <li>{group.parent_category_name || 'Това е главна категория'}</li>
                                <li>
                                    <i className={`fa-solid fa-square-pen ${style.editButton}`}></i>
                                    <i className={`fa-solid fa-trash-can ${style.deleteButton}`}></i>
                                </li>
                            </ul>
                        ))}
                    </ul>
                </div>)
                : <Spinner/>
            }
        </>
    );
}