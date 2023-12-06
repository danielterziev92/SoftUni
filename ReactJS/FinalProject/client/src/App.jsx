import {useState} from "react";
import {Route, Routes} from "react-router-dom";

import mainStyle from "./components/Main.module.css";

import Aside from "./components/aside/Aside.jsx";
import Products from "./components/products/Products.jsx";

import MessageProvider from "./contexts/MessageContext.jsx";
import ProductsProvider from "./contexts/ProductsContext.jsx";
import AuthenticationProvider from "./contexts/AuthenticationContext.jsx";
import Login from "./components/login/Login.jsx";
import Logout from "./components/logout/Logout.jsx";
import Register from "./components/register/Register.jsx";

import Paths from "./utils/Paths.js";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import MessageBoxDialog from "./components/message-box-dialog/MessageBoxDialog.jsx";
import Profile from "./components/profile/Profile.jsx";
import Groups from "./components/groups/Groups.jsx";
import Index from "./components/index/Index.jsx";

export default function App() {
    const [isLogin, setIsLogin] = useState(false);
    const [isMessageBoxShow, setIsMessageBoxShow] = useState(false);

    return (
        <MessageProvider setIsMessageBoxShow={setIsMessageBoxShow} isMessageBoxShow={isMessageBoxShow}>
            <AuthenticationProvider setIsLogin={setIsLogin} isLogin={isLogin}>
                {isLogin && <Aside/>}
                <main className={mainStyle.Main}>
                    {isMessageBoxShow && <MessageBoxDialog/>}
                    <Routes>
                        <Route path={Paths.index} element={<Index/>}/>
                        <Route path={Paths.login} element={<Login/>}/>
                        <Route path={Paths.register} element={<Register/>}/>
                        <Route element={<PrivateRoutes isLogin={isLogin}/>}>
                            <Route path={Paths.logout} element={<Logout/>}/>
                            <Route path={Paths.profile} element={<Profile/>}/>
                            <Route path={Paths.products} element={<ProductsProvider><Products/></ProductsProvider>}/>
                            <Route path={Paths.groups} element={<Groups/>}/>
                        </Route>
                    </Routes>
                </main>
            </AuthenticationProvider>
        </MessageProvider>
    );
}