import style from './ProductListItemDetail.module.css';
import {useEffect, useState} from "react";
import Spinner from "../spinner/Spinner.jsx";
import {getProductById} from "../../services/productService.js";
import ProductListItemDetailBaseInfo from "../product-list-item-detail-base-info/ProductListItemDetailBaseInfo.jsx";

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
                    <div>
                        <ul>
                            <li name="base-info" onClick={changeActiveTabHandler}>Основни данни</li>
                            <li>Допълнителни данни</li>
                            <li>Баркодове</li>
                        </ul>
                    </div>
                    {activeTab === 'base-info' &&
                        <ProductListItemDetailBaseInfo
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

