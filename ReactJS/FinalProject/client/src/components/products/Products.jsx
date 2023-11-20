import {useContext, useEffect, useState} from "react";

import SearchProduct from "../search-product/SearchProduct.jsx";

import {getAllProducts} from "../../services/productService.js";

import navStyle from '../Main.module.css'
import {MessageContext} from "../../contexts/MessageContext.js";
import ProductAddForm from "../product-form-add/ProductAddForm.jsx";
import Spinner from "../spinner/Spinner.jsx";
import ProductList from "../product-list/ProductList.jsx";
import {ProductsContext} from "../../contexts/ProductsContext.js";
import useMessage from "../../hooks/useMessage.js";
import MessageBoxDialog from "../message-box-dialog/MessageBoxDialog.jsx";

const initialState = {
    title: 'Всички продукти',
    error: '',
    isSpinnerShow: true,
    isShowAddProduct: false,
};

export default function Products() {
    const [searchProduct, setSearchProduct] = useState('');
    const [productsState, setProductsState] = useState(initialState);
    const [isShowAddProduct, setIsShowAddProduct] = useState(false);
    const [allProducts, setAllProducts] = useState([]);

    const {message, isMessageBoxShow, updateMessage, updateStatus, closeMessageBoxDialog} = useMessage();


    useEffect(() => {
        getAllProducts()
            .then(setAllProducts)
            .catch(e => updateMessage({message: e, status: 'error'}))
            .finally(() => setProductsState(state => ({...state, isSpinnerShow: false})));
    }, []);

    useEffect(() => {
        console.log(searchProduct);
    }, [searchProduct]);

    const updateAllProduct = (newProducts) => setAllProducts(newProducts);


    const showAddProductClickHandler = () => {
        setIsShowAddProduct(true);
    };

    const closeAddProductClickHandler = () => {
        setIsShowAddProduct(false);
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

    const messageValues = {
        message,
        updateMessage,
        updateStatus,
        isMessageBoxShow,
        closeMessageBoxDialog,
    }

    return (
        <>
            <MessageContext.Provider value={messageValues}>
                {isMessageBoxShow && <MessageBoxDialog/>}
                <nav className={navStyle.Nav}>
                    <ul>
                        <li><h2>Всички продукти</h2></li>
                        <li><SearchProduct setSearchProduct={setSearchProduct}/></li>
                        <li>
                            <div className={navStyle.addProduct} onClick={showAddProductClickHandler}>
                                <i className="fa-solid fa-circle-plus"></i> Добави
                            </div>
                        </li>
                    </ul>
                </nav>
                {isShowAddProduct && <ProductAddForm closeModalHandler={closeAddProductClickHandler}/>}

                {productsState.isSpinnerShow && <Spinner/>}

                {!productsState.isSpinnerShow &&
                    <ProductsContext.Provider value={{allProducts, updateAllProduct}}>
                        <section>
                            <ProductList/>
                        </section>
                    </ProductsContext.Provider>
                }
            </MessageContext.Provider>
        </>
    );
}