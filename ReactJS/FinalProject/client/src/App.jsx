import {useEffect, useLayoutEffect} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import axios from "axios";

import {selectIsAuthenticated, selectUser} from "./features/user/userSlice.js";

import mainStyle from "./components/Main.module.css";

import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import Aside from "./components/aside/Aside.jsx";
import Products from "./components/products/Products.jsx";
import ProductsProvider from "./contexts/ProductsContext.jsx";
import Login from "./components/login/Login.jsx";
import Logout from "./components/logout/Logout.jsx";
import Register from "./components/register/Register.jsx";
import MessageBoxDialog from "./components/message-box-dialog/MessageBoxDialog.jsx";
import Profile from "./components/profile/Profile.jsx";
import Groups from "./components/groups/Groups.jsx";
import Index from "./components/index/Index.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Page404 from "./components/page-404/Page404.jsx";

import CookieManager from "./utils/cookieManager.js";

import Urls from "./utils/Urls.js";
import Paths from "./utils/Paths.js";

export default function App() {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const userInfo = useSelector(selectUser);

    const navigate = useNavigate();

    useLayoutEffect(() => {
        if (CookieManager.getCookie('csrftoken') !== '') return
        const fetchCSRFToken = async () => {
            try {
                const response = await axios.get(Urls.CRSFToken);
                const token = response.data.csrfToken;

                CookieManager.setCookie('csrftoken', token, 1);
            } catch (error) {
                console.error('Error fetching CSRF token:', error);
            }
        };

        fetchCSRFToken();
    }, []);

    useEffect(() => {
        // console.log(!isAuthenticated)
        // if (!isAuthenticated) return navigate(Paths.login)

        console.log(CookieManager.getCookie('csrftoken'))
        console.log(CookieManager.getCookie('sessionid'))

        console.log('We Have This Info')
    }, [isAuthenticated]);

    return (
        <ErrorBoundary>
            {isAuthenticated && <Aside/>}
            <main className={mainStyle.Main}>
                <MessageBoxDialog/>
                <Routes>
                    <Route path={Paths.index} element={<Index/>}/>
                    <Route path={Paths.login} element={<Login/>}/>
                    <Route path={Paths.register} element={<Register/>}/>
                    <Route element={<PrivateRoutes/>}>
                        <Route path={Paths.logout} element={<Logout/>}/>
                        <Route path={Paths.profile} element={<Profile/>}/>
                        <Route path={Paths.products}
                               element={<ProductsProvider><Products/></ProductsProvider>}/>
                        <Route path={Paths.groups} element={<Groups/>}/>
                    </Route>
                    <Route path='*' element={<Page404/>}/>
                </Routes>
            </main>
        </ErrorBoundary>
    );
}