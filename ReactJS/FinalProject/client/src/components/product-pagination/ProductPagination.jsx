import {useEffect, useRef, useState} from "react";


import paginationStyle from './ProductPagination.module.css';

const initialPagination = {
    startIndex: 0,
    endIndex: 0,
    currentPage: 1,
    totalPages: 1,
    totalProducts: 0,
    itemPerPage: [5, 10, 15],
    selectedItemPerPage: 15,
}

export default function ProductPagination({
                                              setStartIndex,
                                              setEndIndex,
                                              productLength,
                                          }) {
    const prevPaginationValues = useRef(15);
    const [paginationValues, setPaginationValue] = useState(initialPagination);
    const [currItemPerPage, setCurrItemPerPage] = useState(initialPagination.selectedItemPerPage);

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
        if (prevPaginationValues.current !== paginationValues.selectedItemPerPage) {
            const newPaginationValues = calculatePaginationValues();
            setPaginationValue(newPaginationValues);
            return;
        }

        prevPaginationValues.current = paginationValues.selectedItemPerPage;

        setPaginationValue(state => ({
            ...state,
            endIndex: paginationValues.selectedItemPerPage,
            totalPages: Math.ceil(productLength / state.selectedItemPerPage),
            totalProducts: productLength,
        }));

    }, [paginationValues.selectedItemPerPage, productLength]);

    useEffect(() => {
        productPerPageChangeHandler(currItemPerPage);
    }, [currItemPerPage]);

    useEffect(() => {
        setStartIndex(paginationValues.startIndex);
    }, [paginationValues.startIndex]);

    useEffect(() => {
        setEndIndex(paginationValues.endIndex);
    }, [paginationValues.endIndex]);

    return (
        <div className={paginationStyle.tfoot}>
            <div>
                <div>
                    <label htmlFor="itemPerPage">Продукти на страница:</label>
                </div>
                <div>
                    <select name="" id="itemPerPage" value={currItemPerPage}
                            onChange={(e) => setCurrItemPerPage(parseInt(e.target.value))}>
                        {paginationValues.itemPerPage.map(numb => (
                            <option value={numb} key={numb}>{numb}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <div>
                    <button onClick={goFirstPageClickHandler}><i className="fa-solid fa-angles-left"></i></button>
                </div>
                <div>
                    <button onClick={goToPreviousPageClickHandler}><i className="fa-solid fa-chevron-left"></i></button>
                </div>
                <div>
                    <span>{paginationValues.currentPage} от {paginationValues.totalPages} стр.</span>
                </div>
                <div>
                    <button onClick={goToNextPageClickHandler}><i className="fa-solid fa-chevron-right"></i></button>
                </div>
                <div>
                    <button onClick={goLastPageClickHandler}><i className="fa-solid fa-angles-right"></i></button>
                </div>
                <div><span>({paginationValues.totalProducts} продукта общо)</span></div>
            </div>
            <div>
                <div>
                    <span>Обнови всики продукти</span>
                    <button><i className="fa-solid fa-arrow-rotate-right"></i></button>
                </div>
            </div>
        </div>
    );
}