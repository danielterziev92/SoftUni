import {Link} from "react-router-dom";

import style from "../index/Index.module.css";

import Paths from "../../utils/Paths.js";

export default function Page404() {

    return (
        <section>
            <nav className={style.navMenu}>
                <ul>
                    <li className={style.logo}>
                        <img src="../../../public/logo.svg" alt="Logo"/>
                    </li>
                    <li><Link to={Paths.login}>Вход</Link></li>
                    <li><Link to={Paths.register}>Регистрация</Link></li>
                </ul>
            </nav>
            <h1 className={style.error}>Страницата не съществува</h1>
        </section>
    );
}