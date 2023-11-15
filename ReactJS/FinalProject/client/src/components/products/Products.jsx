import {useEffect, useState} from "react";

import ProductList from "../product-list/ProductList.jsx";
import SearchProduct from "../search-product/SearchProduct.jsx";
import ProductAddForm from "./ProductAddForm.jsx";

import {getAllProducts} from "../../services/productService.js";

import navStyle from '../Main.module.css'
import Spinner from "../spinner/Spinner.jsx";

const initialState = {
    title: 'Всички продукти',
    data: [],
    error: '',
    searchedProductValue: '',
    isSpinnerShow: true,
    isShowAddProduct: false,
}

export default function Products() {
    const [productsState, setProductsState] = useState(initialState);

    const addProductClickHandler = () => {
        setProductsState(state => ({
            ...state,
            isShowCreateProduct: true
        }));
    };

    useEffect(() => {
        getAllProducts()
            .then(products => setProductsState(state => ({
                ...state,
                data: products
            })))
            .catch(e => setProductsState(state => ({
                ...state,
                error: e
            })))
            .finally(() => setProductsState(state => ({
                    ...state,
                    isSpinnerShow: false
                }))
            )
    }, []);

    return (
        <>
            <nav className={navStyle.Nav}>
                <ul>
                    <li><h2>{productsState.title}</h2></li>
                    <li><SearchProduct setProductState={setProductsState} productState={productsState}/></li>
                    <li>
                        <div className={navStyle.addProduct} onClick={addProductClickHandler}>
                            <i className="fa-solid fa-circle-plus"></i>
                            Добави
                        </div>
                    </li>
                </ul>
            </nav>
            {productsState.isShowAddProduct && <ProductAddForm/>}

            {productsState.isSpinnerShow && <Spinner/>}

            {!productsState.isSpinnerShow &&
                <section>
                    <ProductList
                        products={productsState.data}
                        setProductsState={setProductsState}
                    />
                </section>
            }
        </>
    );
}