import {Route, Routes} from "react-router-dom";

import Aside from "./components/aside/Aside.jsx";
import Products from "./components/products/Products.jsx";

import mainStyle from "./components/Main.module.css";
import {MessageContext} from "./contexts/MessageContext.js";

export default function App() {
    return (
        <MessageContext.Provider value={{message: '', status: ''}}>
            <Aside/>
            <main className={mainStyle.Main}>
                <Routes>
                    <Route path="/products/*" element={<Products/>}/>
                </Routes>
            </main>
        </MessageContext.Provider>
    );
}