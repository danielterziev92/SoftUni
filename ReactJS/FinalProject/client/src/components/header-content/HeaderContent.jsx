import {Link} from "react-router-dom";

import style from './HeaderContent.module.css';

export default function HeaderContent({title, navigations, refreshFunc}) {


    return (
        <div className={style.HeaderContent}>
            <h4>{title}</h4>
            <div>
                <ul>
                    {navigations.map((nav, index) => (
                        <li key={index}>
                            <Link to={nav.active ? nav.to : '#'} className={!nav.active && style.Disable}>
                                {nav.name.charAt(0).toUpperCase() + nav.name.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button onClick={refreshFunc}><i className="fa-solid fa-arrow-rotate-right"></i></button>
            </div>
        </div>
    )
}