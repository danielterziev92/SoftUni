import {createContext, useRef, useState} from "react";

export const ProductsContext = createContext([]);
ProductsContext.displayName = 'ProductsContext';

export default function ProductsProvider({children}) {
    const [allProducts, setAllProducts] = useState([]);
    const [searchedProduct, setSearchedProduct] = useState([]);
    const isSearchingProducts = useRef(false);

    const updateAllProducts = (newProducts) => setAllProducts(newProducts);

    const updateExistedProducts = (existedProduct) => setAllProducts(allProducts.map(item => item.id === existedProduct.id ? existedProduct : item))

    const deleteExistedProduct = (existedProduct) => setAllProducts(allProducts.filter(item => item.id !== existedProduct.id))

    const addToAllProducts = (newProduct) => {
        setAllProducts(state => ([...state, newProduct]));
    }

    const productsContextValue = {
        allProducts,
        updateAllProducts,
        updateExistedProducts,
        deleteExistedProduct,
        addToAllProducts,
        searchedProduct,
        setSearchedProduct,
        isSearchingProducts,
    }

    return (
        <ProductsContext.Provider value={{...productsContextValue}}>
            {children}
        </ProductsContext.Provider>
    );
}