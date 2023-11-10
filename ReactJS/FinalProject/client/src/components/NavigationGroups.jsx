import VerticalNavigationItem from "./VerticalNavigationItem.jsx";

export default function VerticalNavigationGroupItem({
                                                        name,
                                                        listItems
                                                    }) {
    console.log(listItems)

    return (
        <div className="vertical-nav-group-items">
            <h3 className="vertical-nav-group-name">
                {name}
            </h3>
            {listItems.map((item, index) => <VerticalNavigationItem key={index} {...item} />)}
        </div>
    );
}