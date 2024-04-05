import {Link} from "react-router-dom";

import style from './HeaderContent.module.css';

import Paths from "../../utils/Paths.js";


export default function HeaderContent({title, navigation}) {


    return (
        <div className={style.HeaderContent}>
            <h4>{title}</h4>
            <ul>
                <li>
                    <Link to={Paths.dashboard}>Dashboard</Link>
                </li>
                <li>
                    <a>{navigation.charAt(0).toUpperCase() + navigation.slice(1)}</a>
                </li>
            </ul>
        </div>
    )
}