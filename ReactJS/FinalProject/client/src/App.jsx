import {useLayoutEffect, useState} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Toaster} from "react-hot-toast";

import {checkAuthenticationAction, fetchUserDataAction, updateUserDataAction} from "./features/user/userActions.js";

import style from "./components/Main.module.css";

import Spinner from "./components/spinner/Spinner.jsx";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import Aside from "./components/aside/Aside.jsx";
import Products from "./components/products/Products.jsx";
import ProductsProvider from "./contexts/ProductsContext.jsx";
import Auth from "./pages/auth/Auth.jsx";
import Logout from "./pages/logout/Logout.jsx";
import Register from "./components/register/Register.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Groups from "./components/groups/Groups.jsx";
import Index from "./components/index/Index.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

import Page404 from "./components/page-404/Page404.jsx";
import Paths from "./utils/Paths.js";
import {addBrowserHistoryAction} from "./features/history/historyActions.js";
import NavigationBar from "./components/navigation-bar/NavigationBar.jsx";

export default function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const isAuthenticated = useSelector(store => store.user.isAuthenticated);
    const lastVisitedPage = useSelector(state => state.history.browser[state.history.browser.length - 1]);
    const showAsideBar = useSelector(state => state.common.isMinimizedAsideBar);

    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        if (location.pathname === lastVisitedPage) return;
        dispatch(addBrowserHistoryAction(location.pathname));
    }, [dispatch, location.pathname]);

    useLayoutEffect(() => {
        const checkAuth = async () => {
            if (isAuthenticated) return;
            await dispatch(checkAuthenticationAction());
            setIsLoading(false);

            if (!isAuthenticated) return navigate(Paths.auth);
        }

        checkAuth();
    }, []);

    useLayoutEffect(() => {
        const fetchData = async () => {
            if (!isAuthenticated) return;

            const mandatoryValues = ['email', 'first_name', 'last_name', 'phone'];

            const userLocalData = JSON.parse(localStorage.getItem('userData'));

            let areAllKeysValuesNotEmptyString = false;
            if (userLocalData) {
                areAllKeysValuesNotEmptyString = mandatoryValues.every(key => {
                    return Object.keys(userLocalData).includes(key) && userLocalData[key] !== '';
                })
            }

            if (!areAllKeysValuesNotEmptyString) {
                await dispatch(fetchUserDataAction());
            }

            await dispatch(updateUserDataAction(userLocalData));
        }

        fetchData();
    }, [isAuthenticated]);


    return (
        <ErrorBoundary>
            {isLoading
                ? <Spinner/>
                : (<>
                    <NavigationBar/>
                    <Aside/>
                    <main className={`${style.MainContent} ${showAsideBar ? style.Minimized : style.Expand}`}>
                        <Toaster position="top-center" toastOptions={{duration: 5000,}}/>
                        <Routes>
                            <Route path={Paths.index} element={<Index/>}/>
                            <Route path={Paths.auth} element={<Auth/>}/>
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
                </>)
            }
        </ErrorBoundary>
    );
}