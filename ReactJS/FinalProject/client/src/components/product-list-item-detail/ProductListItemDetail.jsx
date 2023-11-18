import style from './ProductListItemDetail.module.css';
import {useContext, useEffect, useState} from "react";
import Spinner from "../spinner/Spinner.jsx";
import {getProductById} from "../../services/productService.js";
import ProductDetailBaseInfo from "../product-detail-base-info/ProductDetailBaseInfo.jsx";
import ProductListNavigationTabs from "../product-list-navigation-tabs/ProductListNavigationTabs.jsx";
import MessageBoxModal from "../message-box-modal/MessageBoxModal.jsx";
import {ProductsContext} from "../../contexts/ProductsContext.js";
import useEscapeKeyHook from "../../hooks/useEscapeKeyHook.jsx";

const initialMessageModalData = {
    showModal: false,
    title: '',
    message: '',
    successButtonMessage: '',
    errorButtonMessage: '',
    successButtonHandler: null,
    errorButtonHandler: null,
}


export default function ProductListItemDetail({id, setShowDetail}) {
    const {allProducts, setAllProducts} = useContext(ProductsContext)
    const [productData, setProductData] = useState({});
    const [isSpinnerShow, setIsSpinnerShow] = useState(true);
    const [activeTab, setActiveTab] = useState('base-info');
    const [messageModalData, setMessageModalData] = useState(initialMessageModalData);
    const [productRemoveMessage, setProductRemoveMessage] = useState('');

    useEffect(() => {
        setAllProducts(allProducts.map(item => item.id === productData.id ? productData : item));
    }, [productData]);

    useEffect(() => {
        getProductById(id).then(data => {
            setProductData(data);
            setIsSpinnerShow(false);
        }).catch(e => {
            console.log(e);
        });
    }, []);

    const closeShowDetailClickHandler = () => {
        setShowDetail(false);
    }

    const closeMessageModal = () => {
        setMessageModalData(initialMessageModalData);
    }

    const removeProduct = () => {
        deleteProductById(id).then(setProductRemoveMessage);
    }

    useEscapeKeyHook(closeShowDetailClickHandler);

    return (
        <div className={style.detail}>
            {isSpinnerShow && <Spinner/>}
            {!isSpinnerShow &&
                <>
                    {messageModalData.showModal && <MessageBoxModal
                        {...messageModalData}
                        setMessageModalData={setMessageModalData}
                        closeModalHanlder={closeShowDetailClickHandler}
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

