import {TableWithDataItem} from "./TableWithDataItem.jsx";
import {useEffect, useState} from "react";
import {ErrorOverlap} from "./overlaps/ErrorOverlap.jsx";
import {NoUsersOverlap} from "./overlaps/NoUsersOverlap.jsx";
import {createUser, getAllUsers, getUser, updateUser} from "../services/userService.js";
import {TableWithDataHead} from "./TableWithDataHead.jsx";
import {
    filteredData,
    sortDataByCreatedAt,
    sortDataByEmail,
    sortDataByFirstName,
    sortDataByLastName,
    sortDataByPhone
} from "../services/sortData.js";
import {Spinner} from "./Spinner.jsx";
import {UserInfoModal} from "./UserInfoModal.jsx";
import {UserCreateModal} from "./UserCreateModal.jsx";
import {UserUpdateModal} from "./UserUpdateModal.jsx";
import {UserDeleteModal} from "./UserDeleteModal.jsx";

export const TableWithData = ({
                                  searchValue,
                                  searchCriteria,
                              }) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [isFetchFailed, setIsFetchFailed] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [isSpinnerShow, setIsSpinnerShow] = useState(true);
    const [showUserInfoModal, setShowUserInfoModal] = useState(false);
    const [showUserUpdateModal, setShowUserUpdateModal] = useState(false);
    const [showUserDeleteModal, setShowUserDeleteModal] = useState(false);
    const [showUserCreateModal, setShowUserCreateModal] = useState(false);

    useEffect(() => {
        getAllUsers()
            .then(data => setUsers(data))
            .catch(e => setIsFetchFailed(true))
            .finally(() => setIsSpinnerShow(false));
    }, []);

    useEffect(() => {
        setFilteredUsers(filteredData(users, searchValue, searchCriteria))
    }, [searchValue, searchCriteria]);

    const sortDataClickHandler = (criterion) => {
        const criteria = {
            'First Name': sortDataByFirstName,
            'Last Name': sortDataByLastName,
            'Email': sortDataByEmail,
            'Phone': sortDataByPhone,
            'Created': sortDataByCreatedAt,
        }
        setUsers(criteria[criterion](users));
    }

    const onClickShowUserInfoModalHandler = async (userId) => {
        const data = await getUser(userId);
        setUser(data);
        setShowUserInfoModal(true);
    }

    const onClickShowUserCreateModalHandler = () => {
        setShowUserCreateModal(true);
    }

    const onClickShowUserUpdateModalHandler = async (userId) => {
        const data = await getUser(userId);
        setUser(data);
        setShowUserUpdateModal(true);
    }

    const onClickShowUserDeleteModalHandler = async (userId) => {
        const data = await getUser(userId);
        setUser(data);
        setShowUserDeleteModal(true);
    }

    const clickCreateNewUserHandler = async (e) => {
        e.preventDefault();
        const formDate = new FormData(e.currentTarget);
        const newUser = await createUser(Object.fromEntries(formDate));
        setUsers(state => [...state, newUser]);
        closeModal();
    }

    const clickUpdateUserInfoHandler = async (e) => {
        e.preventDefault();
        const formDate = new FormData(e.currentTarget);
        const newUser = await updateUser(user._id, Object.fromEntries(formDate));
        const newUsersArray = users.map(u => {
            if (u._id === newUser._id) {
                return newUser
            }
            return u;
        });
        setUsers(newUsersArray.slice());
        closeModal();
    }

    const clickDeleteUserInfoHandler = async (e) => {
        e.preventDefault()

    }

    const closeModal = () => {
        if (showUserInfoModal) {
            return setShowUserInfoModal(false);
        }

        if (showUserCreateModal) {
            return setShowUserCreateModal(false);
        }

        if (showUserUpdateModal) {
            return setShowUserUpdateModal(false);
        }

        if (showUserDeleteModal) {
            return setShowUserDeleteModal(false);
        }
    }

    return (
        <>
            {isSpinnerShow && <Spinner/>}
            {isFetchFailed && !isSpinnerShow && <ErrorOverlap/>}
            {users.length === 0 && !isSpinnerShow && !isFetchFailed && <NoUsersOverlap/>}

            {!isFetchFailed && users.length > 0 && !isSpinnerShow &&
                <>
                    {showUserInfoModal && <UserInfoModal {...user} closeModal={closeModal}/>}

                    {showUserCreateModal && <UserCreateModal closeModal={closeModal}
                                                             clickCreateNewUserHandler={clickCreateNewUserHandler}/>}

                    {showUserUpdateModal && <UserUpdateModal userDetail={user}
                                                             closeModal={closeModal}
                                                             clickUpdateUserInfoHandler={clickUpdateUserInfoHandler}/>}

                    {showUserDeleteModal && <UserDeleteModal closeModal={closeModal}
                                                             clickDeleteUserInfoHandler={clickDeleteUserInfoHandler}/>}

                    <table className="table">
                        <TableWithDataHead sortDataClickHandler={sortDataClickHandler}/>
                        <tbody>
                        {filteredUsers.length !== 0
                            ? filteredUsers.map(user => (
                                <TableWithDataItem {...user}
                                                   key={user._id}
                                                   onClickShowUserInfoModalHandler={onClickShowUserInfoModalHandler}
                                                   onClickShowUserUpdateModalHandler={onClickShowUserUpdateModalHandler}
                                                   onClickShowUserDeleteModalHandler={onClickShowUserDeleteModalHandler}
                                />
                            ))
                            : users.map(user => (
                                <TableWithDataItem {...user}
                                                   key={user._id}
                                                   onClickShowUserInfoModalHandler={onClickShowUserInfoModalHandler}
                                                   onClickShowUserUpdateModalHandler={onClickShowUserUpdateModalHandler}
                                                   onClickShowUserDeleteModalHandle={onClickShowUserDeleteModalHandler}
                                />
                            ))}
                        </tbody>
                    </table>
                    <button className="btn-add btn" onClick={onClickShowUserCreateModalHandler}>Add new user</button>
                </>
            }
        </>
    );
}