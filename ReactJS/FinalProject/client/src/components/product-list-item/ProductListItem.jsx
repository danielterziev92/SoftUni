import {useEffect, useState} from "react";
import style from './ProductListItem.module.css';
import ProductListItemDetail from "../product-list-item-detail/ProductListItemDetail.jsx";

export default function ProductListItem({
                                            rowNumb,
                                            id,
                                            code,
                                            name,
                                            price,
                                            is_active,
                                            quantity,
                                            detailModuleShowed,
                                            setProductsState,
                                        }) {
    const [showDetail, setShowDetail] = useState(false);

    useEffect(() => {
        if (showDetail) {
            detailModuleShowed.current = !detailModuleShowed.current;
        }
    }, [showDetail, detailModuleShowed]);

    return (
        <>
            <div className={style.ListItem}>
                <div>{rowNumb}</div>
                <div>{code}</div>
                <div>{name}</div>
                <div>{Number(price).toFixed(2)} лв.</div>
                <div><span>{quantity}</span></div>
                <div>
                    {is_active
                        ? <i className={`fa-solid fa-circle-check ${style.inStock}`}></i>
                        : <i className={`fa-solid fa-circle-xmark ${style.outStock}`}></i>
                    }
                </div>
                <div className={showDetail ? style.active : ''}>
                    {showDetail
                        ? <i className={`fa-solid fa-angle-up ${style.detail}`}
                             onClick={() => setShowDetail(false)}></i>
                        : <i className={`fa-solid fa-angle-down ${style.detail}`}
                             onClick={() => setShowDetail(true)}></i>
                    }
                </div>
            </div>
            {showDetail &&
                <ProductListItemDetail
                    id={id}
                    setShowDetail={setShowDetail}
                    setProductsState={setProductsState}
                />}
        </>
    );
}