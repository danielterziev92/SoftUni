import {useContext, useEffect, useState} from "react";

import navStyle from '../Main.module.css'

import ProductAddForm from "../product-form-add/ProductAddForm.jsx";
import SearchProduct from "../search-product/SearchProduct.jsx";
import Spinner from "../spinner/Spinner.jsx";
import ProductList from "../product-list/ProductList.jsx";

import {ProductsContext} from "../../contexts/ProductsContext.jsx";


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

    const {allProducts, updateAllProducts, setMatchesProducts, isSearchingProducts} = useContext(ProductsContext);

    useEffect(() => {
        // getAllProducts()
        //     .then(updateAllProducts)
        //     .catch(e => updateMessage({message: e, status: 'error'}))
        //     .finally(() => setProductsState(state => ({...state, isSpinnerShow: false})));
    }, []);

    useEffect(() => {
        searchProduct ? isSearchingProducts.current = true : isSearchingProducts.current = false;

        const matchingProducts = allProducts.filter(product => product.name.toLowerCase().includes(searchProduct.toLowerCase()));
        setMatchesProducts(matchingProducts);
    }, [searchProduct]);

    const showAddProductClickHandler = () => setIsShowAddProduct(true);

    const closeAddProductClickHandler = () => setIsShowAddProduct(false);


    return (
        <>
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