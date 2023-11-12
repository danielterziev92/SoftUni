import listStyle from './ProductList.module.css';
import {useEffect, useRef, useState} from "react";
import ProductListItem from "./ProductListItem.jsx";
import ProductPagination from "./ProductPagination.jsx";

const tableKeys = [
    {name: '№', sorting: false},
    {name: 'Код', sorting: true},
    {name: 'Име', sorting: true},
    {name: 'Цена', sorting: true},
    {name: 'Активен', sorting: true},
    {name: 'Група', sorting: true},
    {name: 'Детайл', sorting: false},
]

const paginationKeys = {
    startIndex: 0,
    endIndex: 0,
    startPage: 0,
    currentPage: 0,
    totalPages: 0,
    itemPerPage: [5, 10, 15],
    selectedItemPerPage: 15,
}


export default function ProductList(products) {
    const [isAscending, setIsAscending] = useState(true);
    const [selectedItem, setSelectedItem] = useState('');
    const detailModuleShowed = useRef(false);
    const [paginationValues, setPaginationValue] = useState(paginationKeys);

    const changeAscendingOrderClickHandler = (e) => {
        if (selectedItem !== e.currentTarget.textContent) {
            setSelectedItem(e.currentTarget.textContent);
            setIsAscending(true);
        } else {
            setIsAscending(state => !state);
        }
    }

    const productPerPageChangeHandler = (value) => {
        setPaginationValue(state => ({
            ...state,
            selectedItemPerPage: value
        }));
    }

    useEffect(() => {
        setPaginationValue(state => ({
            ...state,
        }));
    }, []);

    return (
        <>
            <table className={listStyle.ProductList}>
                <thead>
                <tr>
                    {tableKeys.map((key, index) => (
                        <th key={index}>
                            {key.sorting ? (
                                <span onClick={changeAscendingOrderClickHandler}>
                                    {key.name}
                                </span>
                            ) : (
                                <span>{key.name}</span>
                            )}
                            {(selectedItem === key.name) &&
                                (isAscending ? (
                                    <i className="fa-solid fa-arrow-up-short-wide"></i>
                                ) : (
                                    <i className="fa-solid fa-arrow-down-short-wide"></i>
                                ))}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {products.products.slice(paginationValues.currStartIndex, paginationValues.selectedItemPerPage).map((product, index) => (
                    <tr key={product.id}>
                        <ProductListItem index={index + 1} {...product} detailModuleShowed={detailModuleShowed}/>
                    </tr>
                ))}
                </tbody>
                <ProductPagination {...paginationKeys} productPerPageChangeHandler={productPerPageChangeHandler}/>
            </table>
        </>
    );
}