import {useLayoutEffect, useState} from "react";

import style from './Groups.module.css';

import Spinner from "../spinner/Spinner.jsx";
import GroupEdit from "../group-edit/GroupEdit.jsx";

import {getAllGroups} from "../../services/groupService.js";

export default function Groups() {
    const [groups, setGroups] = useState([]);
    const [isGroupModalShow, setIsGroupModalShow] = useState(false);
    const [selectedGroupData, setSelectedGroupData] = useState({});
    const [filteredCategory, setFilteredCategory] = useState([]);

    useLayoutEffect(() => {
        getAllGroups().then(setGroups).catch(console.log)
    }, []);


    const showEditModal = (id) => {
        setIsGroupModalShow(true);

        const groupDetail = groups.find(obj => obj.id === id);
        setSelectedGroupData(groupDetail);

        const filteredCategories = groups.filter(group => group.id !== id);
        setFilteredCategory(filteredCategories);
    }

    const hideEditModal = () => setIsGroupModalShow(false);

    function updateGroupInfo(data) {
        console.log("updateGroupInfo", data);
    }

    function deleteGroupClickHandler(id) {

    }

    return (
        <>
            {isGroupModalShow &&
                <GroupEdit
                    groupData={selectedGroupData}
                    hideModal={hideEditModal}
                    updateHandler={updateGroupInfo}
                    allCategories={filteredCategory}
                />}
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
                                    <i className={`fa-solid fa-square-pen ${style.editButton}`}
                                       onClick={() => showEditModal(group.id)}
                                    ></i>
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