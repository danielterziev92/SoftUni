import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import {Toaster} from "react-hot-toast";

import style from "./components/Main.module.css";

import PublicRoutes from "./utils/PublicRoutes.jsx";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import Aside from "./components/aside/Aside.jsx";
import NavigationBar from "./components/navigation-bar/NavigationBar.jsx";
import Products from "./components/products/Products.jsx";
import ProductsProvider from "./contexts/ProductsContext.jsx";
import SignIn from "./pages/sign-in/SignIn.jsx";
import SignUp from "./pages/sign-up/SignUp.jsx";
import SignOut from "./pages/signout/SignOut.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Groups from "./components/groups/Groups.jsx";
import Index from "./components/index/Index.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Page404 from "./components/page-404/Page404.jsx";

import useAuthCheck from "./hooks/useAuthCheck.js";

import Paths from "./utils/Paths.js";

export default function App() {
    const isMinimizedAsideBar = useSelector(state => state.common.isMinimizedAsideBar);

    useAuthCheck();

    return (
        <ErrorBoundary>
            <>
                <NavigationBar/>
                <Aside/>
                <main className={`${style.MainContent} ${isMinimizedAsideBar ? style.Minimized : style.Expand}`}>
                    <Toaster position="top-center" toastOptions={{duration: 5000,}}/>
                    <Routes>
                        <Route element={<PublicRoutes/>}>
                            <Route path={Paths.index} element={<Index/>}/>
                            <Route path={Paths.signIn} element={<SignIn/>}/>
                            <Route path={Paths.signUp} element={<SignUp/>}/>
                        </Route>
                        <Route element={<PrivateRoutes/>}>
                            <Route path={Paths.signOut} element={<SignOut/>}/>
                            <Route path={Paths.profile} element={<Profile/>}/>
                            <Route path={Paths.products}
                                   element={<ProductsProvider><Products/></ProductsProvider>}/>
                            <Route path={Paths.groups} element={<Groups/>}/>
                        </Route>
                        <Route path='*' element={<Page404/>}/>
                    </Routes>
                </main>
            </>
        </ErrorBoundary>
    );
}