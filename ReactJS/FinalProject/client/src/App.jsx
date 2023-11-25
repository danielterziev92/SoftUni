import {Route, Routes} from "react-router-dom";

import mainStyle from "./components/Main.module.css";

import Aside from "./components/aside/Aside.jsx";
import Products from "./components/products/Products.jsx";
import Login from "./components/login/Login.jsx";

import MessageProvider from "./contexts/MessageContext.jsx";

export default function App() {
    return (
        <MessageProvider>
            <Aside/>
            <main className={mainStyle.Main}>
                <Routes>
                    <Route path="/products/" element={<Products/>}/>
                    <Route path="/login/" element={<Login/>}/>
                    {/*<Route path="/groups/" element={</>}/>*/}
                </Routes>
            </main>
        </MessageProvider>
    );
}