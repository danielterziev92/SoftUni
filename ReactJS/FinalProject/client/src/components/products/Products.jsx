import {useEffect, useState} from "react";

import ProductList from "../product-list/ProductList.jsx";
import SearchProduct from "../search-product/SearchProduct.jsx";
import ProductAddForm from "./ProductAddForm.jsx";

import {getAllProducts} from "../../services/productService.js";

import navStyle from '../Main.module.css'
import Spinner from "../Spinner.jsx";

const initialState = {
    title: 'Всички продукти',
    data: [],
    error: '',
    searchedProductValue: '',
    isSpinnerShow: true,

    isShowAddProduct: false,
}

export default function Products() {
    const [productState, setProductState] = useState(initialState);

    const addProductClickHandler = () => {
        setProductState(state => ({
            ...state,
            isShowCreateProduct: true
        }));
    };

    useEffect(() => {
        getAllProducts()
            .then(products => setProductState(state => ({
                ...state,
                data: products
            })))
            .catch(e => setProductState(state => ({
                ...state,
                error: e
            })))
            .finally(() => setProductState(state => ({
                    ...state,
                    isSpinnerShow: false
                }))
            )
    }, []);

    return (
        <>
            <nav className={navStyle.Nav}>
                <ul>
                    <li><h2>{productState.title}</h2></li>
                    <li><SearchProduct setProductState={setProductState} productState={productState}/></li>
                    <li>
                        <div className={navStyle.addProduct} onClick={addProductClickHandler}>
                            <i className="fa-solid fa-circle-plus"></i>
                            Добави
                        </div>
                    </li>
                </ul>
            </nav>
            {productState.isShowAddProduct && <ProductAddForm/>}

            {productState.isSpinnerShow && <Spinner/>}

            {!productState.isSpinnerShow &&
                <section>
                    <ProductList products={productState.data}/>
                </section>
            }
        </>
    );
}