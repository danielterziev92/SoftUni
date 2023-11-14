import style from './ProductList.module.css';
import {useRef, useState} from "react";
import ProductListItem from "../product-list-item/ProductListItem.jsx";
import ProductPagination from "../product-pagination/ProductPagination.jsx";

const tableKeys = [
    {name: '№', sorting: false},
    {name: 'Код', sorting: true},
    {name: 'Име', sorting: true},
    {name: 'Цена', sorting: true},
    {name: 'Брой', sorting: true},
    {name: 'Активен', sorting: true},
    {name: 'Детайли', sorting: false},
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
            <div className={style.ProductList}>
                <div className={style.header}>
                    <div className={style.row}>
                        {tableKeys.map((key, index) => (
                            <div key={index} className={style.column}>
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
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.body}>
                    {products.products.slice(startIndex, endIndex).map((product, index) => (
                        <ProductListItem rowNumb={index + startIndex + 1} {...product}
                                         detailModuleShowed={detailModuleShowed}
                                         key={product.id}
                        />
                    ))}
                </div>
                <ProductPagination
                    setStartIndex={setStartIndex}
                    setEndIndex={setEndIndex}
                    productLength={productLength}
                />
            </div>
        </>
    );
}