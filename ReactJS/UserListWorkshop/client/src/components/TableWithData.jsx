import {TableWithDataItem} from "./TableWithDataItem.jsx";
import {useEffect, useState} from "react";
import {ErrorOverlap} from "./overlaps/ErrorOverlap.jsx";
import {NoUsersOverlap} from "./overlaps/NoUsersOverlap.jsx";
import {createUser, deleteUser, getAllUsers, getUser, updateUser} from "../services/userService.js";
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
import {Pagination} from "./Pagination.jsx";

export const TableWithData = ({
                                  searchValue,
                                  searchCriteria,
                              }) => {
    const [users, setUsers] = useState([]);
    const [usersOnCurrentPage, setUsersOnCurrentPage] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [isFetchFailed, setIsFetchFailed] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [isSpinnerShow, setIsSpinnerShow] = useState(true);
    const [showUserInfoModal, setShowUserInfoModal] = useState(false);
    const [showUserUpdateModal, setShowUserUpdateModal] = useState(false);
    const [showUserDeleteModal, setShowUserDeleteModal] = useState(false);
    const [showUserCreateModal, setShowUserCreateModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(5);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        getAllUsers()
            .then(data => setUsers([...data, ...data, ...data, ...data]))
            .catch(e => setIsFetchFailed(true))
            .finally(() => setIsSpinnerShow(false));
    }, []);

    useEffect(() => {
        setFilteredUsers(filteredData(users, searchValue, searchCriteria))
    }, [searchValue, searchCriteria]);

    useEffect(() => {
        calculatePagination();
        setUsersOnCurrentPage(getUserOnCurrentPage());
    }, [users]);

    useEffect(() => {
        if (currentPage > pageCount && pageCount > 0) {
            setCurrentPage(pageCount);
        }
    }, [pageCount]);

    useEffect(() => {
        setUsersOnCurrentPage(getUserOnCurrentPage());
    }, [currentPage]);

    useEffect(() => {
        setUsersOnCurrentPage([]);
        calculatePagination();
        setUsersOnCurrentPage(getUserOnCurrentPage());
    }, [usersPerPage]);

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
        setSelectedUser(data);
        setShowUserInfoModal(true);
    }

    const onClickShowUserCreateModalHandler = () => {
        setShowUserCreateModal(true);
    }

    const onClickShowUserUpdateModalHandler = async (userId) => {
        const data = await getUser(userId);
        setSelectedUser(data);
        setShowUserUpdateModal(true);
    }

    const onClickShowUserDeleteModalHandler = async (userId) => {
        const data = await getUser(userId);
        setSelectedUser(data);
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
        const newUser = await updateUser(selectedUser._id, Object.fromEntries(formDate));
        const newUsersArray = users.map(user => {
            if (user._id === newUser._id) {
                return newUser
            }
            return user;
        });
        setUsers(newUsersArray.slice());
        closeModal();
    }

    const clickDeleteUserInfoHandler = async () => {
        const deletedUser = await deleteUser(selectedUser._id);
        setUsers(users.filter(user => user._id !== deletedUser._id))
        closeModal();
    }

    const calculatePagination = () => {
        const pageCounts = calculatePageCount()
        setPageCount(pageCounts);
    }

    const calculatePageCount = () => {
        console.log(Math.ceil(users.length / usersPerPage))
        return Math.ceil(users.length / usersPerPage)
    }

    const getUserOnCurrentPage = () => {
        if (currentPage === 1) {
            return users.slice(0, usersPerPage);
        } else {
            const startIndex = usersPerPage * (currentPage - 1)
            const endIndex = startIndex + usersPerPage
            return users.slice(startIndex, endIndex);
        }
    }

    const clickFirstPageHandler = () => {
        setCurrentPage(1)
    }

    const clickLastPageHandler = () => {
        setCurrentPage(calculatePageCount());
    }

    const clickNextPageHandler = () => {
        if (currentPage < pageCount) {
            setCurrentPage(state => state + 1)
        }
    }
    const clickPreviousPageHandler = () => {
        if (currentPage > 1) {
            setCurrentPage(state => state - 1)
        }
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
                    {showUserInfoModal && <UserInfoModal {...selectedUser} closeModal={closeModal}/>}

                    {showUserCreateModal && <UserCreateModal closeModal={closeModal}
                                                             clickCreateNewUserHandler={clickCreateNewUserHandler}/>}

                    {showUserUpdateModal && <UserUpdateModal userDetail={selectedUser}
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
                            : usersOnCurrentPage.map(user => (
                                <TableWithDataItem {...user}
                                                   key={user._id}
                                                   onClickShowUserInfoModalHandler={onClickShowUserInfoModalHandler}
                                                   onClickShowUserUpdateModalHandler={onClickShowUserUpdateModalHandler}
                                                   onClickShowUserDeleteModalHandler={onClickShowUserDeleteModalHandler}
                                />
                            ))}
                        </tbody>
                    </table>
                    <button className="btn-add btn" onClick={onClickShowUserCreateModalHandler}>Add new user</button>
                    <Pagination pageCount={pageCount}
                                currentPage={currentPage}
                                usersPerPage={usersPerPage}
                                setUsersPerPage={setUsersPerPage}
                                clickFirstPageHandler={clickFirstPageHandler}
                                clickLastPageHandler={clickLastPageHandler}
                                clickNextPageHandler={clickNextPageHandler}
                                clickPreviousPageHandler={clickPreviousPageHandler}
                    />
                </>
            }
        </>
    );
}