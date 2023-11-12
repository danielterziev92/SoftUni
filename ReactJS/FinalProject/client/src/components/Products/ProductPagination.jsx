import {useEffect, useState} from "react";


import paginationStyle from './ProductPagination.module.css';

export default function ProductPagination({
                                              startIndex,
                                              endIndex,
                                              currStartIndex,
                                              currEndIndex,
                                              currentPage,
                                              totalPages,
                                              itemPerPage,
                                              selectedItemPerPage,
                                              productPerPageChangeHandler,
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

        </tr>
        </tfoot>
    );
}