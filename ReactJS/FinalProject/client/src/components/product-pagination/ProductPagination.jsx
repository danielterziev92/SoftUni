import {useContext, useEffect, useRef, useState} from "react";

import paginationStyle from './ProductPagination.module.css';

import {ProductsContext} from "../../contexts/ProductsContext.jsx";
import {MessageContext} from "../../contexts/MessageContext.jsx";

const initialPagination = {
    startIndex: 0,
    endIndex: 0,
    currentPage: 1,
    totalPages: 1,
    totalProducts: 0,
    itemPerPage: [5, 10, 15],
    selectedItemPerPage: 15,
}

export default function ProductPagination({setPaginationState, productToShow, setProductToShow,}) {
    const prevPaginationValues = useRef(15);
    const [productLength, setProductLength] = useState(0);
    const [paginationValues, setPaginationValue] = useState(initialPagination);
    const [currItemPerPage, setCurrItemPerPage] = useState(initialPagination.selectedItemPerPage);
    const {updateAllProducts} = useContext(ProductsContext);
    const {updateMessage, updateStatus} = useContext(MessageContext);

    useEffect(() => {
        setProductLength(productToShow.length);
    }, [productToShow]);

    useEffect(() => {
        productPerPageChangeHandler(currItemPerPage);
    }, [currItemPerPage]);

    useEffect(() => {
        setPaginationState(state => ({...state, startIndex: paginationValues.startIndex}));
    }, [paginationValues.startIndex]);

    useEffect(() => {
        setPaginationState(state => ({
            ...state,
            endIndex: paginationValues.startIndex + paginationValues.selectedItemPerPage
        }));
    }, [paginationValues.endIndex]);


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

    const calculateTotalPages = () => Math.ceil(paginationValues.totalProducts / paginationValues.selectedItemPerPage);

    const calculatePaginationValues = () => {
        const totalPages = calculateTotalPages();
        const currentPage = Math.min(paginationValues.currentPage, totalPages)
        const startIndex = (currentPage - 1) * paginationValues.selectedItemPerPage;
        const endIndex = Math.min(startIndex + paginationValues.selectedItemPerPage, paginationValues.totalProducts);

        prevPaginationValues.current = paginationValues.selectedItemPerPage;

        return {
            startIndex, endIndex, currentPage, totalPages,
            itemPerPage: paginationValues.itemPerPage,
            totalProducts: paginationValues.totalProducts,
            selectedItemPerPage: paginationValues.selectedItemPerPage,
        }
    }

    const updatePaginationValues = (newValues) => setPaginationValue((state) => ({...state, ...newValues}));

    const productPerPageChangeHandler = (value) => {
        setPaginationValue(state => ({
            ...state,
            selectedItemPerPage: value,
        }));
        prevPaginationValues.current = paginationValues.selectedItemPerPage;
    }

    const goToPageClickHandler = (page) => {
        if (page < 1 || page > paginationValues.totalPages) {
            return;
        }

        const startIndex = (page - 1) * paginationValues.selectedItemPerPage;
        updatePaginationValues({
            currentPage: page,
            startIndex,
            endIndex: startIndex + paginationValues.selectedItemPerPage
        });
    };

    const goFirstPageClickHandler = () => goToPageClickHandler(1);

    const goToNextPageClickHandler = () => goToPageClickHandler(paginationValues.currentPage + 1);

    const goToPreviousPageClickHandler = () => goToPageClickHandler(paginationValues.currentPage - 1);

    const goLastPageClickHandler = () => goToPageClickHandler(calculateTotalPages());

    async function refreshAllProductClickHandler() {
        // try {
        //     const allProducts = await getAllProducts();
        //     updateAllProducts(allProducts);
        //     setProductToShow(allProducts);
        //     updateMessage('Всички продукти са обновени');
        //     updateStatus('success');
        // } catch (e) {
        //     console.log(e);
        // }
    }


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
                    <button onClick={refreshAllProductClickHandler}>
                        <i className="fa-solid fa-arrow-rotate-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}