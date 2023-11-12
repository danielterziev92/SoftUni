import {useEffect, useState} from "react";


import paginationStyle from './ProductPagination.module.css';

export default function ProductPagination({
                                              currentPage,
                                              totalPages,
                                              totalProducts,
                                              itemPerPage,
                                              selectedItemPerPage,
                                              productPerPageChangeHandler,
                                              goFirstPageClickHandler,
                                              goToNextPageClickHandler,
                                              goToPreviousPageClickHandler,
                                              goLastPageClickHandler,
                                          }) {
    const [currItemPerPage, setCurrItemPerPage] = useState(selectedItemPerPage);

    useEffect(() => {
        productPerPageChangeHandler(currItemPerPage);
    }, [currItemPerPage]);

    return (
        <tfoot className={paginationStyle.tfoot}>
        <tr>
            <td>
                <label htmlFor="itemPerPage">Продукти на страница:</label>
            </td>
            <td>
                <select name="" id="itemPerPage" value={currItemPerPage}
                        onChange={(e) => setCurrItemPerPage(parseInt(e.target.value))}>
                    {itemPerPage.map(numb => (
                        <option value={numb} key={numb}>{numb}</option>
                    ))}
                </select>
            </td>
        </tr>
        <tr>
            <td>
                <button onClick={goFirstPageClickHandler}><i className="fa-solid fa-angles-left"></i></button>
            </td>
            <td>
                <button onClick={goToPreviousPageClickHandler}><i className="fa-solid fa-chevron-left"></i></button>
            </td>
            <td>
                <span>{currentPage} от {totalPages} стр.</span>
            </td>
            <td>
                <button onClick={goToNextPageClickHandler}><i className="fa-solid fa-chevron-right"></i></button>
            </td>
            <td>
                <button onClick={goLastPageClickHandler}><i className="fa-solid fa-angles-right"></i></button>
            </td>
            <td><span>({totalProducts} продукта общо)</span></td>
        </tr>
        <tr>
            <td>
                <span>Обнови всики продукти</span>
                <button><i className="fa-solid fa-arrow-rotate-right"></i></button>
            </td>
        </tr>
        </tfoot>
    );
}