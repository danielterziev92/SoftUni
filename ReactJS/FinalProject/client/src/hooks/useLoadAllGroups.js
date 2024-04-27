import { useLayoutEffect, useState} from "react";

const useLoadAllGroups = () => {
    const [groups, setGroups] = useState([]);

    useLayoutEffect(() => {
        // getAllGroups()
        //     .then(data => uniqueGroups(data))
        //     .catch(e => {
        //         updateMessage(e);
        //         updateStatus('error');
        //     })
    }, []);

    const uniqueGroups = (data) => {
        const result = Array.from(new Set(data.map(group => group.name))).map(name => {
            return data.find(obj => obj.name === name);
        });

        sortGroup(result);
    };

    const sortGroup = (data) => {
        const groupedGroups = {};
        const result = [];

        data.forEach(item => {
            const {parent_category_name, ...rest} = item;

            if (!parent_category_name) {
                result.push({...rest, children: []});
            } else {
                groupedGroups[parent_category_name] = groupedGroups[parent_category_name] || [];
                groupedGroups[parent_category_name].push({...rest, children: []});
            }
        });

        const newResult = result.map(item => {
            Object.keys(groupedGroups).map(groupName => {
                if (item.name === groupName) {
                    item.children = groupedGroups[groupName];
                    delete groupedGroups[groupName];
                }
            });

            return item;
        });

        setGroups(newResult);
    };

    return groups;
};

export default useLoadAllGroups;