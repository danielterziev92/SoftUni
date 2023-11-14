import asideStyle from './NavigationGroups.module.css';
import {Link} from "react-router-dom";

export default function NavigationGroups({
                                             name,
                                             listItems
                                         }) {
    return (
        <div className={asideStyle.verticalNavGroupItems}>
            <h3 className={asideStyle.verticalNavGroupName}>
                {name}
            </h3>
            {listItems.map((item, index) => (
                <Link to={item.itemHREF} key={index}>
                    <i className={item.itemIClassName}></i>
                    <span>{item.itemTitle}</span>
                </Link>
            ))}
        </div>
    );
}