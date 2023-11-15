import style from './ProductListItemDetail.module.css';
import {useEffect, useState} from "react";
import Spinner from "../spinner/Spinner.jsx";
import {getProductById} from "../../services/productService.js";
import ProductDetailBaseInfo from "../product-detail-base-info/ProductDetailBaseInfo.jsx";
import ProductListNavigationTabs from "../product-list-navigation-tabs/ProductListNavigationTabs.jsx";

export default function ProductListItemDetail({id, setShowDetail}) {

    const [productData, setProductData] = useState({});
    const [isSpinnerShow, setIsSpinnerShow] = useState(true);
    const [activeTab, setActiveTab] = useState('base-info');

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
                    <ProductListNavigationTabs closeShowDetailClickHandler={closeShowDetailClickHandler}
                                               setActiveTab={setActiveTab}
                                               activeTab={activeTab}
                    />
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

