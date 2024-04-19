import {useLayoutEffect, useRef} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {checkAuthentication, fetchUserData, updateUserDataAction} from "./features/user/userActions.js";

import {selectIsAuthenticated} from "./features/user/userSlice.js";

import style from "./components/Main.module.css";

import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import Aside from "./components/aside/Aside.jsx";
import Products from "./components/products/Products.jsx";
import ProductsProvider from "./contexts/ProductsContext.jsx";
import Login from "./components/login/Login.jsx";
import Logout from "./components/logout/Logout.jsx";
import Register from "./components/register/Register.jsx";
import MessageBoxDialog from "./components/message-box-dialog/MessageBoxDialog.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Groups from "./components/groups/Groups.jsx";
import Index from "./components/index/Index.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Page404 from "./components/page-404/Page404.jsx";

import Paths from "./utils/Paths.js";

export default function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const isAuthenticated = useSelector(selectIsAuthenticated);

    const previousPage = useRef('');

    useLayoutEffect(() => {
        previousPage.current = location.pathname;
    }, []);

    useLayoutEffect(() => {
        const fetchData = async () => {
            const mandatoryValues = ['email', 'first_name', 'last_name', 'phone'];

            await dispatch(checkAuthentication());

            if (!isAuthenticated) return navigate(Paths.login);

            const userLocalData = JSON.parse(localStorage.getItem('userData'));

            const allKeysValuesNotEmptyString = mandatoryValues.every(key => {
                return Object.keys(userLocalData).includes(key) && userLocalData[key] !== '';
            })

            if (!allKeysValuesNotEmptyString) {
                await dispatch(fetchUserData());
                return navigate(previousPage.current);
            }

            await dispatch(updateUserDataAction(userLocalData));
            return navigate(previousPage.current);
        }

        fetchData();
    }, [isAuthenticated]);


    return (
        <ErrorBoundary>
            {isAuthenticated && <Aside/>}
            <main className={style.MainContent}>
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