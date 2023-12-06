import {useLayoutEffect, useState} from "react";
import {Link} from "react-router-dom";

import style from './Index.module.css';

import {getAllUsers, getProductsForUserByJWTToken} from "../../services/userService.js";

import cookieManager from "../../utils/cookieManager.js";
import tokenManager from "../../utils/tokenManager.js";
import {tokenExpDays, tokenName} from "../../contexts/AuthenticationContext.jsx";
import Paths from "../../utils/Paths.js";
import compareObjects from "../../utils/compareObjects.js";

export default function Index() {
    const [users, setUsers] = useState([]);
    const [userInfo, setUserInfo] = useState({});

    useLayoutEffect(() => {
        const token = cookieManager.getCookie(tokenName);
        if (token) {
            getUserProducts(token);
            return;
        }

        getAllUsers()
            .then(setUsers)
            .catch(console.log)
    }, []);

    async function getUserProducts(token) {
        const newTokens = await tokenManager.getNewTokens(token);
        cookieManager.setCookie(tokenName, newTokens.refresh, tokenExpDays);
        try {
            const response = await getProductsForUserByJWTToken(newTokens.access);
            setUserInfo(response);
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <nav className={style.navMenu}>
                <ul>
                    <li className={style.logo}>
                        <img src="../../../public/logo.svg" alt="Logo"/>
                    </li>
                    {compareObjects(userInfo, {}) ? (
                        <>
                            <li><Link to={Paths.login}>Вход</Link></li>
                            <li><Link to={Paths.register}>Регистрация</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link to={Paths.logout}>Всички продукти</Link></li>
                            <li><Link to={Paths.groups}>Всички групи</Link></li>
                            <li><Link to={Paths.profile}>Профил</Link></li>
                            <li><Link to={Paths.logout}>Изход</Link></li>
                        </>
                    )
                    }
                </ul>
            </nav>
            <section className={style.welcome}>
                <h1>Добре дошли в нашата платформа</h1>
            </section>
            {users.length > 0 && (
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
            )}
            {!compareObjects(userInfo, {}) && (
                <section className={style.userInfo}>
                    <h2>Добре дошъл {userInfo.username}</h2>
                    <span>{userInfo.email}</span>
                    <h3>Вие имате {userInfo.product_count === 1
                        ? `${userInfo.product_count} продукт`
                        : `${userInfo.product_count} продукта`}</h3>
                    <div>
                        <ul>
                            <li>Име</li>
                            <li>Цена</li>
                            <li>Количество</li>
                        </ul>
                        {userInfo.products.map(product => (
                            <ul key={product.id}>
                                <li>{product.name}</li>
                                <li>{Number(product.price).toFixed(2)} лв.</li>
                                <li>{product.quantity}</li>
                            </ul>
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}