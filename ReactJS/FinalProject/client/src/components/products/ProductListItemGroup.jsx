export default function ProductListItemGroup({index, groups, group}) {
    return (
        <>
            <span>{group}</span>
            <ul>
                {typeof groups === 'object'
                    ? groups.map((groupName, index) => (
                        <li key={index} className={groupName === group && 'selected'}>{groupName}</li>
                    ))
                    : <li key={index}>{groups}</li>
                }
            </ul>
        </>
    );
}