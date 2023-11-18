import {useEffect, useState} from "react";

import ProductList from "../product-list/ProductList.jsx";
import SearchProduct from "../search-product/SearchProduct.jsx";
import ProductForm from "../product-form/ProductForm.jsx";

import {getAllProducts} from "../../services/productService.js";

import navStyle from '../Main.module.css'
import Spinner from "../spinner/Spinner.jsx";
import MessageBoxModal from "../message-box-modal/MessageBoxModal.jsx";
import {ProductsContext} from "../../contexts/ProductsContext.js";

const initialState = {
    title: 'Всички продукти',
    error: '',
    searchedProductValue: '',
    isSpinnerShow: true,
    isShowAddProduct: false,
};

export default function Products() {
    const [productsState, setProductsState] = useState(initialState);
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then(setAllProducts)
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

    const showAddProductClickHandler = () => {
        setProductsState(state => ({
            ...state,
            isShowCreateProduct: true
        }));
    };

    const closeAddProductClickHandler = () => {
        setProductsState(state => ({
            ...state,
            isShowCreateProduct: false,
        }));
    };

    const addProductForm = () => {
        return (
            <ProductForm
                productData={null}
                submitHandler={productAddSubmitHandler}
                removeProduct={null}
                removeProductHandler={null}
                closeModalHandler={closeAddProductClickHandler}
            />
        );
    };

    const productAddSubmitHandler = () => {
        console.log('productAddSubmitHandler')
    };

    const successfullyAddProductHandler = () => {
        console.log('successfullyAddProductHandler')
    }

    const unsuccessfullyAddProductHandler = () => {
        console.log('unsuccessfullyAddProductHandler')
    }

    return (
        <>
            {/*{productsState.isShowAddProduct &&*/}
            {/*    <MessageBoxModal*/}
            {/*        title={'Добавяне на продукт'}*/}
            {/*        message={addProductForm}*/}
            {/*        successButtonMessage={'Добави'}*/}
            {/*        errorButtonMessage={'Отказ'}*/}
            {/*        successButtonHandler={successfullyAddProductHandler}*/}
            {/*        errorButtonHandler={unsuccessfullyAddProductHandler}*/}
            {/*        closeModalHanlder={closeAddProductClickHandler}*/}
            {/*    />}*/}
            <nav className={navStyle.Nav}>
                <ul>
                    <li><h2>{productsState.title}</h2></li>
                    <li><SearchProduct setProductState={setProductsState} productState={productsState}/></li>
                    <li>
                        <div className={navStyle.addProduct} onClick={showAddProductClickHandler}>
                            <i className="fa-solid fa-circle-plus"></i>
                            Добави
                        </div>
                    </li>
                </ul>
            </nav>
            {/*{productsState.isShowAddProduct && <ProductForm/>}*/}

            {productsState.isSpinnerShow && <Spinner/>}

            {!productsState.isSpinnerShow &&
                <ProductsContext.Provider value={{allProducts, setAllProducts}}>
                    <section>
                        <ProductList/>
                    </section>
                </ProductsContext.Provider>
            }
        </>
    );
}