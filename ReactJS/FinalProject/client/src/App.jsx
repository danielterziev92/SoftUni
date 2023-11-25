import {Route, Routes} from "react-router-dom";

import Aside from "./components/aside/Aside.jsx";
import Products from "./components/products/Products.jsx";

import mainStyle from "./components/Main.module.css";
import Login from "./components/login/Login.jsx";

export default function App() {
    return (
        <>
            <Aside/>
            <main className={mainStyle.Main}>
                <Routes>
                    <Route path="/products/" element={<Products/>}/>
                    <Route path="/login/" element={<Login/>}/>
                    {/*<Route path="/groups/" element={</>}/>*/}
                </Routes>
            </main>
        </>
    );
}