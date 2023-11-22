import {useEffect, useState} from "react";

import navStyle from '../Main.module.css'

import ProductAddForm from "../product-form-add/ProductAddForm.jsx";
import MessageBoxDialog from "../message-box-dialog/MessageBoxDialog.jsx";
import SearchProduct from "../search-product/SearchProduct.jsx";
import Spinner from "../spinner/Spinner.jsx";
import ProductList from "../product-list/ProductList.jsx";

import {MessageContext} from "../../contexts/MessageContext.js";
import {ProductsContext} from "../../contexts/ProductsContext.js";

import useMessage from "../../hooks/useMessage.js";

import {getAllProducts} from "../../services/productService.js";

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

    const updateAllProducts = (newProducts) => setAllProducts(newProducts);

    const updateExistedProducts = (existedProduct) => setAllProducts(allProducts.map(item => item.id === existedProduct.id ? existedProduct : item))

    const addToAllProducts = (newProduct) => {
        setAllProducts(state => ([...state, newProduct]));
    }

    const showAddProductClickHandler = () => setIsShowAddProduct(true);

    const closeAddProductClickHandler = () => setIsShowAddProduct(false);


    const messageContextValues = {
        message,
        updateMessage,
        updateStatus,
        isMessageBoxShow,
        closeMessageBoxDialog,
    }

    const productsContextValue = {
        allProducts,
        updateAllProducts,
        updateExistedProducts,
        addToAllProducts,
    }

    return (
        <>
            <MessageContext.Provider value={messageContextValues}>
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

                <ProductsContext.Provider value={{...productsContextValue}}>
                    {isShowAddProduct && <ProductAddForm closeModalHandler={closeAddProductClickHandler}/>}

                    {productsState.isSpinnerShow && <Spinner/>}

                    {!productsState.isSpinnerShow &&
                        <section>
                            <ProductList/>
                        </section>
                    }
                </ProductsContext.Provider>
            </MessageContext.Provider>
        </>
    );
}