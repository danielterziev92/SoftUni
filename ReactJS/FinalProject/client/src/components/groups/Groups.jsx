import {useEffect, useLayoutEffect, useState} from "react";

import style from './Groups.module.css';

import Spinner from "../spinner/Spinner.jsx";
import GroupEdit from "../group-edit/GroupEdit.jsx";

import useMessageContext from "../../hooks/useMessageContext.js";

import {deleteGroupById, getAllGroups, updateGroupById} from "../../services/groupService.js";
import GroupAdd from "../group-add/GroupAdd.jsx";
import compareObjects from "../../utils/compareObjects.js";

export default function Groups() {
    const {updateMessage, updateStatus} = useMessageContext();

    const [groups, setGroups] = useState([]);
    const [isGroupModalShow, setIsGroupModalShow] = useState(false);
    const [isAddGroupModalShow, setIsAddGroupModalShow] = useState(false);
    const [selectedGroupData, setSelectedGroupData] = useState({});
    const [filteredCategory, setFilteredCategory] = useState([]);
    const [allGroups, setAllGroups] = useState([]);

    useLayoutEffect(() => {
        getAllGroups().then(setGroups).catch(console.log);
    }, []);

    useEffect(() => {
        if (compareObjects(groups, {})) return;

        const uniqueGroups = Array.from(new Set(groups.map(group => group.name))).map(name => {
            const group = groups.find(obj => obj.name === name);
            return {id: group.id, name: group.name};
        });

        setAllGroups(uniqueGroups);
    }, [groups]);

    const showEditModal = (id) => {
        setIsGroupModalShow(true);

        const groupDetail = groups.find(obj => obj.id === id);
        setSelectedGroupData(groupDetail);

        const filteredCategories = allGroups.filter(group => group.id !== id);
        setFilteredCategory(filteredCategories);
    }

    const hideEditModal = () => setIsGroupModalShow(false);

    const showAddModal = () => setIsAddGroupModalShow(true);

    const hideAddModal = () => setIsAddGroupModalShow(false);

    function updateGroupName(newGroup) {
        return groups.map(group => {
            if (group.parent_category_name === selectedGroupData.name && group.id !== newGroup.id) {
                return {...group, parent_category_name: newGroup.name};
            }

            if (group.id === newGroup.id) {
                return newGroup;
            }

            return group;
        });
    }

    async function updateGroupInfo(data) {
        const selectedGroup = filteredCategory.find(group => group.name === data.parent_category_name);
        const {parent_category_name, id, ...correctData} = {
            ...data,
            parent_category: Number(selectedGroup?.id) || null
        };
        try {
            const response = await updateGroupById(selectedGroupData.id, correctData);
            updateMessage('Успешно променихте групата');
            updateStatus('success');
            console.log('the response is ', response)
            setGroups(updateGroupName(data));
        } catch (e) {
            updateMessage(e);
            updateStatus('error');
        }
    }

    async function deleteGroupClickHandler(id) {
        try {
            await deleteGroupById(id);
            const newGroups = await getAllGroups();
            setGroups(newGroups);
        } catch (e) {
            updateMessage(e);
            updateStatus('error');
        }
    }

    return (
        <>
            {isAddGroupModalShow && <GroupAdd allGroups={allGroups} hideModal={hideAddModal}/>}
            <div className={style.addGroup}>
                <button onClick={() => showAddModal()}><i className="fa-solid fa-circle-plus"></i> Добави група</button>
            </div>
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
                                    <i className={`fa-solid fa-pen ${style.editButton}`}
                                       onClick={() => showEditModal(group.id)}
                                    ></i>
                                    <i className={`fa-solid fa-trash-can ${style.deleteButton}`}
                                       onClick={() => deleteGroupClickHandler(group.id)}
                                    ></i>
                                </li>
                            </ul>
                        ))}
                    </ul>
                </div>)
                : <Spinner/>
            }
            <p className={style.warning}>
                <i className="fa-solid fa-triangle-exclamation"></i>
                Внимавайте! Ако изтриете категория която е главна категория на други под категории, ще изтриете и
                тях!
                <i className="fa-solid fa-triangle-exclamation"></i>
            </p>
        </>
    );
}