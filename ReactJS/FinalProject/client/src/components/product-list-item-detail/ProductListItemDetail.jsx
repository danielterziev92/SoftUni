import style from './ProductListItemDetail.module.css';
import {useEffect, useState} from "react";
import Spinner from "../spinner/Spinner.jsx";
import {getProductById} from "../../services/productService.js";
import ProductDetailBaseInfo from "../product-detail-base-info/ProductDetailBaseInfo.jsx";
import ProductListNavigationTabs from "../product-list-navigation-tabs/ProductListNavigationTabs.jsx";
import ProductDetailMessageBox from "../product-detail-message-box/ProductDetailMessageBox.jsx";

const initialMessageModalData = {
    showModal: false,
    title: '',
    message: '',
    successButtonMessage: '',
    errorButtonMessage: '',
    successButtonHandler: null,
    errorButtonHandler: null,
}


export default function ProductListItemDetail({id, setShowDetail, setProductsState}) {

    const [productData, setProductData] = useState({});
    const [isSpinnerShow, setIsSpinnerShow] = useState(true);
    const [activeTab, setActiveTab] = useState('base-info');
    const [messageModalData, setMessageModalData] = useState(initialMessageModalData);
    const [productRemoveMessage, setProductRemoveMessage] = useState('');

    const closeShowDetailClickHandler = () => {
        setShowDetail(false);
    }

    const closeMessageModal = () => {
        setMessageModalData(initialMessageModalData);
    }

    const removeProduct = () => {
        deleteProductById(id).then(setProductRemoveMessage);
    }

    useEffect(() => {
        setProductsState(state => ({
            ...state,
            data: state.data.map(item => item.id === productData.id ? productData : item),
        }));
    }, [productData]);

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
                    {messageModalData.showModal && <ProductDetailMessageBox
                        {...messageModalData}
                        setMessageModalData={setMessageModalData}
                    />}
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
                            setMessageModalData={setMessageModalData}
                            removeProduct={removeProduct}
                            closeMessageModal={closeMessageModal}
                        />
                    }
                </>
            }
        </div>
    );
}

