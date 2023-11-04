import {TableWithDataItem} from "./TableWithDataItem.jsx";
import {useEffect, useState} from "react";
import {ErrorOverlap} from "./overlaps/ErrorOverlap.jsx";
import {NoUsersOverlap} from "./overlaps/NoUsersOverlap.jsx";
import {getAllUsers} from "../services/userService.js";
import {TableWithDataHead} from "./TableWithDataHead.jsx";
import {
    sortDataByCreatedAt,
    sortDataByEmail,
    sortDataByFirstName,
    sortDataByLastName,
    sortDataByPhone
} from "../services/sortData.js";

export const TableWithData = ({
                                  initialUsers,
                              }) => {
    const [users, setUsers] = useState([]);
    const [isFetchFailed, setIsFetchFailed] = useState(false);

    useEffect(() => {
        getAllUsers()
            .then(data => setUsers(data))
            .catch(e => setIsFetchFailed(true));
    }, []);

    useEffect(() => {
        console.log(`initial: ${initialUsers}`)
        setUsers(initialUsers)
        console.log(users)
    }, [initialUsers]);

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


    return (
        <>
            {isFetchFailed && <ErrorOverlap/>}
            {users.length === 0 && !isFetchFailed && < NoUsersOverlap/>}

            {!isFetchFailed && users.length > 0 &&
                <table className="table">
                    <TableWithDataHead sortDataClickHandler={sortDataClickHandler}/>
                    <tbody>
                    {users.map(user =>
                        (<TableWithDataItem
                                {...user}
                                key={user._id}/>
                        ))}
                    </tbody>
                </table>
            }
        </>
    );
}