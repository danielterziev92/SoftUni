import {useContext, useEffect, useState} from "react";
import style from './ProductListItem.module.css';
import ProductFormUpdate from "../product-form-update/ProductFormUpdate.jsx";
import {SingleProductContext} from "../../contexts/SingleProductContext.js";

export default function ProductListItem({rowNumb}) {
    const [showDetail, setShowDetail] = useState(false);
    const {product, detailModuleShowed} = useContext(SingleProductContext);

    useEffect(() => {
        if (showDetail) {
            detailModuleShowed.current = !detailModuleShowed.current;
        }
    }, [showDetail, detailModuleShowed]);

    const closeDetailHandler = () => {
        setShowDetail(false);
    }

    return (
        <>
            <div className={style.ListItem}>
                <div>{rowNumb}</div>
                <div>{product.code}</div>
                <div>{product.name}</div>
                <div>{Number(product.price).toFixed(2)} лв.</div>
                <div><span>{product.quantity}</span></div>
                <div>
                    {product.is_active
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
            {showDetail && <ProductFormUpdate closeModalHandler={closeDetailHandler}/>}
        </>
    );
}