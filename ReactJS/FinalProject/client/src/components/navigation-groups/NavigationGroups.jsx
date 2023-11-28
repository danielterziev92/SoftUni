import {useContext, useLayoutEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

import asideStyle from './NavigationGroups.module.css';

import {AuthenticationContext} from "../../contexts/AuthenticationContext.jsx";
import PathToUrl from "../../utils/pathToUrl.js";

export default function NavigationGroups({name, listItems}) {
    const {user} = useContext(AuthenticationContext);
    const [activeTab, setActiveTab] = useState('');
    const location = useLocation();

    useLayoutEffect(() => {
        setActiveTab(location.pathname);
    }, [location]);

    return (
        <div className={asideStyle.verticalNavGroupItem}>
            <h3 className={asideStyle.verticalNavGroupName}>
                {name}
            </h3>
            {listItems.map((item, index) => (
                <div key={index}>
                    <Link to={PathToUrl(item.itemHREF, {id: user.user_id})}
                          className={activeTab === item.itemHREF ? asideStyle.active : ''}>
                        <i className={item.itemIClassName}></i>
                        <span>{item.itemTitle}</span>
                    </Link>
                </div>
            ))}
        </div>
    );
}