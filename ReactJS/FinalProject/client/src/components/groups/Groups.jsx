import {useEffect, useLayoutEffect, useState} from "react";
import {getAllGroups} from "../../services/groupService.js";
import Spinner from "../spinner/Spinner.jsx";

export default function Groups() {
    const [groups, setGroups] = useState([])

    useLayoutEffect(() => {
        getAllGroups().then(setGroups).catch(console.log)
    }, []);

    useEffect(() => {
        console.log(groups)
    }, [groups]);

    return (
        <>
            {groups.length > 0 && <ul>
                {groups.map(group => {
                    <ul key={group.id}>
                        <li>group.code</li>
                        <li>group.name</li>
                        <li>group.parent_category</li>
                    </ul>
                })}
            </ul>}
            : <Spinner/>
        </>
    );
}