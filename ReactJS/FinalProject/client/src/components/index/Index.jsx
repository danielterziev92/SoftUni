import {Link} from "react-router-dom";

import style from './Index.module.css';

import Paths from "../../utils/Paths.js";
import {useLayoutEffect, useState} from "react";
import {getAllUsers} from "../../services/userService.js";

export default function Index() {
    const [users, setUsers] = useState([]);

    useLayoutEffect(() => {
        getAllUsers()
            .then(setUsers)
            .catch(console.log)
    }, []);

    return (
        <>
            <nav className={style.navMenu}>
                <ul>
                    <li className={style.logo}>
                        <img src="../../../public/logo.svg" alt="Logo"/>
                    </li>
                    <li><Link to={Paths.login}>Вход</Link></li>
                    <li><Link to={Paths.register}>Регистрация</Link></li>
                </ul>
            </nav>
            <section className={style.welcome}>
                <h1>Добре дошли в нашата платформа</h1>
            </section>
            <section className={style.customers}>
                <ul>
                    <ul className={style.title}>
                        <li>Потребителско име</li>
                        <li>Имейл</li>
                        <li>Брой продукти</li>
                    </ul>
                    {users.map(user => (
                        <ul key={user.id} className={style.table}>
                            <li>{user.username}</li>
                            <li>{user.email}</li>
                            <li>{user.product_count} бр.</li>
                        </ul>
                    ))}
                </ul>

            </section>
        </>
    );
}