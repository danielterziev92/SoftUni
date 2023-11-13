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
    totalPages: 1,
    totalProducts: 0,
    itemPerPage: [5, 10, 15],
    selectedItemPerPage: 15,
}


export default function ProductList(products) {
    const [isAscending, setIsAscending] = useState(true);
    const [selectedItem, setSelectedItem] = useState('');
    const detailModuleShowed = useRef(false);
    const prevPaginationValues = useRef(15);
    const [paginationValues, setPaginationValue] = useState(initialPagination);


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

    const calculatePaginationValues = () => {
        const totalPages = calculateTotalPages();
        let currentPage = 0;
        if (paginationValues.currentPage > totalPages) {
            currentPage = totalPages;
        } else {
            currentPage = paginationValues.currentPage;
        }

        const startIndex = (currentPage - 1) * paginationValues.selectedItemPerPage;
        const endIndex = startIndex + paginationValues.selectedItemPerPage;
        const itemPerPage = paginationValues.itemPerPage;
        const totalProducts = paginationValues.totalProducts
        const selectedItemPerPage = paginationValues.selectedItemPerPage;
        prevPaginationValues.current = paginationValues.selectedItemPerPage;

        return {startIndex, endIndex, currentPage, totalPages, itemPerPage, totalProducts, selectedItemPerPage,}
    }

    const productPerPageChangeHandler = (value) => {
        setPaginationValue(state => ({
            ...state,
            selectedItemPerPage: value,
        }));
        console.log('change the selectedItemPerPage')
        prevPaginationValues.current = paginationValues.selectedItemPerPage;
    }

    const goFirstPageClickHandler = () => {
        setPaginationValue(state => ({
            ...state,
            currentPage: 1,
            startIndex: 0,
            endIndex: paginationValues.selectedItemPerPage,
        }));
    }

    const goToNextPageClickHandler = () => {
        if (paginationValues.currentPage + 1 > paginationValues.totalPages) {
            return;
        }

        setPaginationValue(state => ({
            ...state,
            currentPage: paginationValues.currentPage + 1,
            startIndex: paginationValues.startIndex + paginationValues.selectedItemPerPage,
            endIndex: paginationValues.endIndex + paginationValues.selectedItemPerPage,
        }));
    }

    const goToPreviousPageClickHandler = () => {
        if (paginationValues.currentPage - 1 < 1) {
            return;
        }

        setPaginationValue(state => ({
            ...state,
            currentPage: paginationValues.currentPage - 1,
            startIndex: paginationValues.startIndex - paginationValues.selectedItemPerPage,
            endIndex: paginationValues.endIndex - paginationValues.selectedItemPerPage,
        }));
    }

    const goLastPageClickHandler = () => {
        const currentPage = calculateTotalPages();
        setPaginationValue(state => ({
            ...state,
            currentPage: currentPage,
            startIndex: (currentPage - 1) * paginationValues.selectedItemPerPage,
            endIndex: paginationValues.totalProducts,
        }));
    }

    useEffect(() => {
        // console.log(`
        //     PresValueSelected: ${prevPaginationValues.current},
        //     CurrentValueSelected: ${paginationValues.selectedItemPerPage},
        //     Are the same: ${prevPaginationValues.current !== paginationValues.selectedItemPerPage}
        // `)
        if (prevPaginationValues.current !== paginationValues.selectedItemPerPage) {
            const newPaginationValues = calculatePaginationValues();
            setPaginationValue(newPaginationValues);
            return;
        }

        prevPaginationValues.current = paginationValues.selectedItemPerPage;

        setPaginationValue(state => ({
            ...state,
            endIndex: paginationValues.selectedItemPerPage,
            totalPages: Math.ceil(products.products.length / state.selectedItemPerPage),
            totalProducts: products.products.length,
        }));

        // Object.keys(paginationValues).map(key => {
        //     console.log(`${key}: ${paginationValues[key]}`)
        // })
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