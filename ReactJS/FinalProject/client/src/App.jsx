import {Route, Routes} from "react-router-dom";

import mainStyle from "./components/Main.module.css";

import Aside from "./components/aside/Aside.jsx";
import Products from "./components/products/Products.jsx";
import Index from "./components/index/Index.jsx";

import MessageProvider from "./contexts/MessageContext.jsx";
import ProductsProvider from "./contexts/ProductsContext.jsx";
import Paths from "./utils/Paths.js";

export default function App() {
    return (
        <MessageProvider>
            <Aside/>
            <main className={mainStyle.Main}>
                <Routes>
                    <Route path={Paths.login} element={<Index/>}/>
                    <Route path={Paths.products} element={<ProductsProvider><Products/></ProductsProvider>}/>
                    {/*<Route path="/groups/" element={</>}/>*/}
                </Routes>
            </main>
        </MessageProvider>
    );
}