import {useEffect, useLayoutEffect} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {checkAuthentication, fetchUserData} from "./features/user/userActions.js";

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

import {fetchCSRFToken} from "./services/authServices.js";

import CookieManager from "./utils/cookieManager.js";

import Paths from "./utils/Paths.js";

export default function App() {
    const dispatch = useDispatch();

    const isAuthenticated = useSelector(selectIsAuthenticated);
    const userInfo = useSelector(selectUser);

    const navigate = useNavigate();

    useLayoutEffect(() => {
        dispatch(checkAuthentication());
        dispatch(fetchUserData());
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