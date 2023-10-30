import VerticalNavigationItem from "./VerticalNavigationItem.jsx";

export default function VerticalNavigationGroupItem(props) {
    return (
        <div className="vertical-nav-group-items">
            <h3 className="vertical-nav-group-name">
                {props.name}
            </h3>
            {props.items.map((item, index) => (
                <VerticalNavigationItem
                    key={index}
                    title={item.itemTitle}
                    href={item.itemHREF}
                    iClassName={item.itemIClassName}/>
            ))}
        </div>
    );
}