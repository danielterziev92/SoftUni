import {getAllGroups} from "../services/productService.js";
import {useContext, useEffect, useState} from "react";
import {MessageContext} from "../contexts/MessageContext.jsx";

const useLoadAllGroups = () => {
    const [groups, setGroups] = useState([]);
    const {updateMessage, updateStatus} = useContext(MessageContext);

    useEffect(() => {
        getAllGroups()
            .then(data => sortGroup(data))
            .catch(e => {
                updateMessage(e);
                updateStatus('error');
            })
    }, []);

    const sortGroup = (data) => {
        const grouped = {};
        const result = [];

        data.forEach(item => {
            const {parent_category, ...rest} = item;

            if (!parent_category) {
                result.push({...rest, children: []});
            } else {
                grouped[parent_category] = grouped[parent_category] || [];
                grouped[parent_category].push({...rest, children: []});
            }
        });

        result.forEach(parent => {
            parent.children = grouped[parent.id] || [];
        });

        setGroups(result);
    };

    return groups;
};

export default useLoadAllGroups;