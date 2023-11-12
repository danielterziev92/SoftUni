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

const initialPagination = {
    startIndex: 0,
    endIndex: 0,
    currentPage: 1,
    totalPages: 0,
    totalProducts: 0,
    itemPerPage: [5, 10, 15],
    selectedItemPerPage: 15,
}


export default function ProductList(products) {
    const [isAscending, setIsAscending] = useState(true);
    const [selectedItem, setSelectedItem] = useState('');
    const detailModuleShowed = useRef(false);
    const [paginationValues, setPaginationValue] = useState(initialPagination);

    // console.log(products.products.length / state.selectedItemPerPage)

    const changeAscendingOrderClickHandler = (e) => {
        if (selectedItem !== e.currentTarget.textContent) {
            setSelectedItem(e.currentTarget.textContent);
            setIsAscending(true);
        } else {
            setIsAscending(state => !state);
        }
    }

    const calculateTotalPages = () => {
        return Math.ceil(paginationValues.totalProducts / paginationValues.selectedItemPerPage);
    }

    const productPerPageChangeHandler = (value) => {
        setPaginationValue(state => ({
            ...state,
            selectedItemPerPage: value,
        }));
    }

    const goFirstPageClickHandler = () => {
        const endIndex = paginationValues.selectedItemPerPage;
        setPaginationValue(state => ({
            ...state,
            currentPage: 1,
            startIndex: 0,
            endIndex: endIndex
        }));
    }

    const goToNextPageClickHandler = () => {
        const nextPage = paginationValues.currentPage + 1;
        const startIndex = paginationValues.startIndex + paginationValues.selectedItemPerPage;
        const endIndex = paginationValues.endIndex + paginationValues.selectedItemPerPage;
        setPaginationValue(state => ({
            ...state,
            currentPage: nextPage,
            startIndex: startIndex,
            endIndex: endIndex
        }));
    }

    const goToPreviousPageClickHandler = () => {
        const nextPage = paginationValues.currentPage - 1;
        const startIndex = paginationValues.startIndex - paginationValues.selectedItemPerPage;
        const endIndex = paginationValues.endIndex - paginationValues.selectedItemPerPage;
        setPaginationValue(state => ({
            ...state,
            currentPage: nextPage,
            startIndex: startIndex,
            endIndex: endIndex
        }));
    }

    const goLastPageClickHandler = () => {
        const currentPage = calculateTotalPages();
        const startIndex = (currentPage - 1) * paginationValues.selectedItemPerPage;
        const endIndex = paginationValues.totalProducts;
        setPaginationValue(state => ({
            ...state,
            currentPage: currentPage,
            startIndex: startIndex,
            endIndex: endIndex,
        }));
    }

    useEffect(() => {
        setPaginationValue(state => ({
            ...state,
            endIndex: paginationValues.selectedItemPerPage,
            totalPages: Math.ceil(products.products.length / paginationValues.selectedItemPerPage),
            totalProducts: products.products.length,
        }));
    }, [paginationValues.selectedItemPerPage, products.products.length]);

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
                {products.products.slice(paginationValues.startIndex, paginationValues.endIndex).map((product, index) => (
                    <tr key={product.id}>
                        <ProductListItem index={index + paginationValues.startIndex + 1} {...product}
                                         detailModuleShowed={detailModuleShowed}
                        />
                    </tr>
                ))}
                </tbody>
                <ProductPagination
                    {...paginationValues}
                    productPerPageChangeHandler={productPerPageChangeHandler}
                    goFirstPageClickHandler={goFirstPageClickHandler}
                    goToNextPageClickHandler={goToNextPageClickHandler}
                    goToPreviousPageClickHandler={goToPreviousPageClickHandler}
                    goLastPageClickHandler={goLastPageClickHandler}
                />
            </table>
        </>
    );
}