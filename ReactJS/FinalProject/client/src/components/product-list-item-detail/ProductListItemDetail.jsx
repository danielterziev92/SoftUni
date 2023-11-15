import style from './ProductListItemDetail.module.css';
import {useEffect, useState} from "react";
import Spinner from "../spinner/Spinner.jsx";
import {getProductById} from "../../services/productService.js";
import ProductDetailBaseInfo from "../product-detail-base-info/ProductDetailBaseInfo.jsx";

export default function ProductListItemDetail({id, setShowDetail}) {

    const [productData, setProductData] = useState({});
    const [isSpinnerShow, setIsSpinnerShow] = useState(true);
    const [activeTab, setActiveTab] = useState('base-info');

    const changeActiveTabHandler = (e) => {
        console.log(e.target.name)
        setActiveTab(e.target.name);
    }


    const closeShowDetailClickHandler = () => {
        setShowDetail(false);
    }

    useEffect(() => {
        getProductById(id).then(data => {
            setProductData(data);
            setIsSpinnerShow(false);
        }).catch(e => {
            console.log(e);
        });
    }, []);

    return (
        <div className={style.detail}>
            {isSpinnerShow && <Spinner/>}
            {!isSpinnerShow &&
                <>
                    <div className={style.navigationTabs}>
                        <ul>
                            <li name="base-info" onClick={changeActiveTabHandler}>Основни данни</li>
                            <li name="addit-info" onClick={changeActiveTabHandler}>Допълнителни данни</li>
                            <li name="barcodes" onClick={changeActiveTabHandler}>Баркодове</li>
                        </ul>
                        <div className={style.closeButton} onClick={closeShowDetailClickHandler}>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                    </div>
                    {activeTab === 'base-info' &&
                        <ProductDetailBaseInfo
                            id={id}
                            productData={productData}
                            setProductData={setProductData}
                            closeShowDetailClickHandler={closeShowDetailClickHandler}
                            setIsSpinnerShow={setIsSpinnerShow}
                        />
                    }
                </>
            }
        </div>
    );
}

