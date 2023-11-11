import {Route, Routes} from "react-router-dom";
import ProductList from "./ProductList.jsx";

export default function ProductAddForm() {
    return (
        <Routes>
            <Route index element={<ProductList/>}/>
        </Routes>
    );
}