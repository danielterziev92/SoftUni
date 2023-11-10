import {Link} from "react-router-dom";

export default function VerticalNavigationItem({
                                                   itemTitle,
                                                   itemHREF,
                                                   itemIClassName,
                                               }) {
    return (
        <>
            <Link to={itemHREF}>
                <i className={itemIClassName}></i>
                <span>{itemTitle}</span>
            </Link>
        </>
    );
}