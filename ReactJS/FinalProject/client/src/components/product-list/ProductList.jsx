import listStyle from './ProductList.module.css';
import {useRef, useState} from "react";
import ProductListItem from "../products/ProductListItem.jsx";
import ProductPagination from "../product-pagination/ProductPagination.jsx";

const tableKeys = [
    {name: '№', sorting: false},
    {name: 'Код', sorting: true},
    {name: 'Име', sorting: true},
    {name: 'Цена', sorting: true},
    {name: 'Активен', sorting: true},
    {name: 'Група', sorting: true},
    {name: 'Детайл', sorting: false},
]


export default function ProductList(products) {
    const [isAscending, setIsAscending] = useState(true);
    const [selectedItem, setSelectedItem] = useState('');
    const detailModuleShowed = useRef(false);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(15);
    const [productLength, setProductLength] = useState(products.products.length);

    const changeAscendingOrderClickHandler = (e) => {
        if (selectedItem !== e.currentTarget.textContent) {
            setSelectedItem(e.currentTarget.textContent);
            setIsAscending(true);
        } else {
            setIsAscending(state => !state);
        }
    }


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
                {products.products.slice(startIndex, endIndex).map((product, index) => (
                    <tr key={product.id}>
                        <ProductListItem index={index + startIndex + 1} {...product}
                                         detailModuleShowed={detailModuleShowed}
                        />
                    </tr>
                ))}
                </tbody>
                <ProductPagination
                    setStartIndex={setStartIndex}
                    setEndIndex={setEndIndex}
                    productLength={productLength}
                />
            </table>
        </>
    );
}