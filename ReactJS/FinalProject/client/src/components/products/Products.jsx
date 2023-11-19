import {useEffect, useState} from "react";

import SearchProduct from "../search-product/SearchProduct.jsx";

import {getAllProducts} from "../../services/productService.js";

import navStyle from '../Main.module.css'
import Spinner from "../spinner/Spinner.jsx";
import {ProductsContext} from "../../contexts/ProductsContext.js";
import {MessageContext} from "../../contexts/MessageContext.js";
import ProductAddForm from "../product-add-form/ProductAddForm.jsx";

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
    const [message, setMessage] = useState({message: '', status: ''})


    useEffect(() => {
        getAllProducts()
            .then(setAllProducts)
            .catch(e => setMessage({message: e, status: 'error'}))
            .finally(() => setProductsState(state => ({...state, isSpinnerShow: false})))
    }, []);

    useEffect(() => {
        console.log(searchProduct);
    }, [searchProduct]);

    const updateAllProduct = (newProducts) => setAllProducts(newProducts);

    const updateMessage = (newMessage) => setMessage(state => ({...state, message: newMessage}));

    const updateStatus = (newStatus) => setMessage(state => ({...state, status: newStatus}));

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

    return (
        <MessageContext.Provider value={{message, updateMessage, updateStatus}}>

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
            {isShowAddProduct && <ProductAddForm closeProductForm={closeAddProductClickHandler}/>}

            {/*{productsState.isSpinnerShow && <Spinner/>}*/}

            {/*{!productsState.isSpinnerShow &&*/}
            {/*    <ProductsContext.Provider value={{allProducts, updateAllProduct}}>*/}
            {/*        /!*<section>*!/*/}
            {/*        /!*    <ProductList/>*!/*/}
            {/*        /!*</section>*!/*/}
            {/*    </ProductsContext.Provider>*/}
            {/*}*/}
        </MessageContext.Provider>
    );
}