import style from './ProductListItemDetail.module.css';
import {useContext, useEffect, useState} from "react";
import Spinner from "../spinner/Spinner.jsx";
import {getProductById} from "../../services/productService.js";
import ProductDetailBaseInfo from "../product-detail-base-info/ProductDetailBaseInfo.jsx";
import MessageBoxModal from "../message-box-modal/MessageBoxModal.jsx";
import {ProductsContext} from "../../contexts/ProductsContext.js";

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
    const {allProducts, updateAllProduct} = useContext(ProductsContext)
    const [productData, setProductData] = useState({});
    const [isSpinnerShow, setIsSpinnerShow] = useState(true);
    const [activeTab, setActiveTab] = useState('base-info');
    const [messageModalData, setMessageModalData] = useState(initialMessageModalData);
    const [productRemoveMessage, setProductRemoveMessage] = useState('');

    useEffect(() => {
        updateAllProduct(allProducts.map(item => item.id === productData.id ? productData : item));
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
        setMessageModalData(state => ({...state, showModal: false}));
    }

    const removeProduct = () => {
        console.log('delete product')
        // deleteProductById(id).then(setProductRemoveMessage);
    }

    return (
        <div className={style.detail}>
            {isSpinnerShow && <Spinner/>}
            {!isSpinnerShow &&
                <>
                    {messageModalData.showModal && <MessageBoxModal
                        {...messageModalData}
                        setMessageModalData={setMessageModalData}
                        closeModalHanlder={closeMessageModal}
                    />}
                    {/*<ProductListNavigationTabs closeShowDetailClickHandler={closeShowDetailClickHandler}*/}
                    {/*                           setActiveTab={setActiveTab}*/}
                    {/*                           activeTab={activeTab}*/}
                    {/*/>*/}
                    {activeTab === 'base-info' &&
                        <ProductDetailBaseInfo
                            id={id}
                            productData={productData}
                            setProductData={setProductData}
                            closeShowDetailClickHandler={closeShowDetailClickHandler}
                            setIsSpinnerShow={setIsSpinnerShow}
                            setMessageModalData={setMessageModalData}
                            removeProduct={removeProduct}
                            closeMessageModal={closeShowDetailClickHandler}
                        />
                    }
                </>
            }
        </div>
    );
}