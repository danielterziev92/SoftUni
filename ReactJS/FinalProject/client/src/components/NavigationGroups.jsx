import NavigationGroupItem from "./NavigationGroupItem.jsx";
import asideStyle from './Aside.module.css';

export default function NavigationGroups({
                                             name,
                                             listItems
                                         }) {
    return (
        <div className={asideStyle.verticalNavGroupItems}>
            <h3 className={asideStyle.verticalNavGroupName}>
                {name}
            </h3>
            {listItems.map((item, index) => <NavigationGroupItem key={index} {...item} />)}
        </div>
    );
}