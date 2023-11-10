import NavigationGroupItem from "./NavigationGroupItem.jsx";

export default function NavigationGroups({
                                                        name,
                                                        listItems
                                                    }) {
    console.log(listItems)

    return (
        <div className="vertical-nav-group-items">
            <h3 className="vertical-nav-group-name">
                {name}
            </h3>
            {listItems.map((item, index) => <NavigationGroupItem key={index} {...item} />)}
        </div>
    );
}