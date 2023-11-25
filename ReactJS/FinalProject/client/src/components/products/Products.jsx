import {useContext, useEffect, useState} from "react";

import navStyle from '../Main.module.css'

import ProductAddForm from "../product-form-add/ProductAddForm.jsx";
import MessageBoxDialog from "../message-box-dialog/MessageBoxDialog.jsx";
import SearchProduct from "../search-product/SearchProduct.jsx";
import Spinner from "../spinner/Spinner.jsx";
import ProductList from "../product-list/ProductList.jsx";

import {ProductsContext} from "../../contexts/ProductsContext.jsx";

import {getAllProducts} from "../../services/productService.js";
import {MessageContext} from "../../contexts/MessageContext.jsx";

const initialState = {
    title: 'Всички продукти',
    error: '',
    isSpinnerShow: true,
    isShowAddProduct: false,
};

export default function Products() {
    const [productsState, setProductsState] = useState(initialState);
    const [searchProduct, setSearchProduct] = useState('');
    const [isShowAddProduct, setIsShowAddProduct] = useState(false);

    const {updateMessage, isMessageBoxShow} = useContext(MessageContext);
    const {updateAllProducts} = useContext(ProductsContext);

    useEffect(() => {
        getAllProducts()
            .then(updateAllProducts)
            .catch(e => updateMessage({message: e, status: 'error'}))
            .finally(() => setProductsState(state => ({...state, isSpinnerShow: false})));
    }, []);

    useEffect(() => {
        console.log(searchProduct);
    }, [searchProduct]);

    const showAddProductClickHandler = () => setIsShowAddProduct(true);

    const closeAddProductClickHandler = () => setIsShowAddProduct(false);


    return (
        <>
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
                <section>
                    <ProductList/>
                </section>
            }
        </>
    );
}