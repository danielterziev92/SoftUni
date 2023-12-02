import {useContext, useEffect, useRef, useState} from "react";

import style from './ProductList.module.css';

import ProductListItem from "../product-list-item/ProductListItem.jsx";
import ProductPagination from "../product-pagination/ProductPagination.jsx";

import {ProductsContext} from "../../contexts/ProductsContext.jsx";
import {SingleProductContext} from "../../contexts/SingleProductContext.js";

const tableKeys = [
    {name: '№', sorting: false},
    {name: 'Код', sorting: true},
    {name: 'Име', sorting: true},
    {name: 'Цена', sorting: true},
    {name: 'Брой', sorting: true},
    {name: 'Активен', sorting: true},
    {name: 'Детайли', sorting: false},
]


export default function ProductList() {
    const [productToShow, setProductToShow] = useState([]);
    const {allProducts, searchedProduct, isSearchingProduct} = useContext(ProductsContext);
    const [paginationState, setPaginationState] = useState({
        startIndex: 0,
        endIndex: 15,
        productLength: allProducts.length,
    });
    const [isAscending, setIsAscending] = useState(true);
    const [selectedItem, setSelectedItem] = useState('');
    const detailModuleShowed = useRef(false);

    useEffect(() => {
        if (isSearchingProduct) {
            setProductToShow(searchedProduct);
            return;
        }

        setProductToShow(allProducts);
    }, [allProducts, searchedProduct, isSearchingProduct]);

    const changeOrderClickHandler = (e) => {
        if (selectedItem !== e.currentTarget.textContent) {
            setSelectedItem(e.currentTarget.textContent);
            setIsAscending(true);
        } else {
            setIsAscending(state => !state);
        }
    }

    const contextValue = {
        detailModuleShowed,
    }

    return (
        <>
            <div className={style.ProductList}>
                <div className={style.header}>
                    <div className={style.row}>
                        {tableKeys.map(({sorting, name}, index) => (
                            <div key={index} className={style.column}>
                                {sorting
                                    ? <span onClick={changeOrderClickHandler}>{name}</span>
                                    : <span>{name}</span>
                                }
                                {selectedItem === name && (isAscending
                                    ? <i className="fa-solid fa-arrow-up-short-wide"></i>
                                    : <i className="fa-solid fa-arrow-down-short-wide"></i>)
                                }
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.body}>
                    {productToShow.length > 0
                        ? productToShow.slice(paginationState.startIndex, paginationState.endIndex).map((product, index) => (
                            <SingleProductContext.Provider key={product.id} value={{product, ...contextValue}}>
                                <ProductListItem rowNumb={index + paginationState.startIndex + 1}/>
                            </SingleProductContext.Provider>
                        ))
                        : <div>Няма съвпадения</div>
                    }
                </div>
                <ProductPagination
                    setPaginationState={setPaginationState}
                    productLength={paginationState.productLength}
                />
            </div>
        </>
    );
}