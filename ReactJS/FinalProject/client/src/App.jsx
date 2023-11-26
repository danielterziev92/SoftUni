import {useState} from "react";
import {Route, Routes} from "react-router-dom";

import mainStyle from "./components/Main.module.css";

import Aside from "./components/aside/Aside.jsx";
import Products from "./components/products/Products.jsx";

import MessageProvider from "./contexts/MessageContext.jsx";
import ProductsProvider from "./contexts/ProductsContext.jsx";
import Paths from "./utils/Paths.js";
import AuthenticationProvider from "./contexts/AuthenticationContext.jsx";
import Login from "./components/login/Login.jsx";

export default function App() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <MessageProvider>
            <AuthenticationProvider>
                {isLogin && <Aside/>}
                <main className={mainStyle.Main}>
                    <Routes>
                        <Route path={Paths.login} element={<Login/>}/>
                        <Route path={Paths.products} element={<ProductsProvider><Products/></ProductsProvider>}/>
                        {/*<Route path="/groups/" element={</>}/>*/}
                    </Routes>
                </main>
            </AuthenticationProvider>
        </MessageProvider>
    );
}