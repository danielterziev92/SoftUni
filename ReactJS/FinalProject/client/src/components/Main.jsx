import {Route, Routes} from "react-router-dom";

import Products from "./Products/Products.jsx";

import mainStyle from './Main.module.css';

export default function Main() {
    return (
        <main className={mainStyle.Main}>
            <Routes>
                <Route path="/products/*" element={<Products/>}/>
            </Routes>
        </main>
    );
}