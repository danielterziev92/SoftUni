import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";

import {selectIsAuthenticated} from "./features/user/userSlice.js";

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

import Paths from "./utils/Paths.js";

export default function App() {
    const isAuthenticated = useSelector(selectIsAuthenticated);

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