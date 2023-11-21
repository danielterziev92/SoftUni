import {useContext, useEffect, useRef, useState} from "react";

import styleForm from './ProductForm.module.css';

import ProductListNavigationTabs from "../product-detail-navigation-tabs/ProductDetailNavigationTabs.jsx";
import useEscapeKey from "../../hooks/useEscapeKey.js";
import useLoadAllGroups from "../../hooks/useLoadAllGroups.js";
import ProductFormBaseInfo from "../product-form-base-info/ProductFormBaseInfo.jsx";
import MessageBoxModal from "../message-box-modal/MessageBoxModal.jsx";

import {getProductById} from "../../services/productService.js";

import {SingleProductContext} from "../../contexts/SingleProductContext.js";
import {FormContext} from "../../contexts/FormContext.js";
import {ProductFormContext} from "../../contexts/ProductFormContext.js";

export const initialProductData = {
    name: '',
    code: '',
    barcode: '',
    quantity: 0,
    price: 0,
    group: 0,
    is_active: false,
    groups: [],
    selectedGroup: 0,
};

export default function ProductForm() {
    const [activeTab, setActiveTab] = useState('base-info');
    const [productData, setProductData] = useState(initialProductData);
    const [isDeleteModalShow, setIsDeleteModalShow] = useState(false);
    const isFirstRender = useRef(true);

    const {product} = useContext(SingleProductContext)
    const {
        closeModalHandler,
        deleteProductClickHandler,
        productChanged,
        updateProductChanged
    } = useContext(FormContext);
    const groups = useLoadAllGroups();

    useEffect(() => {
        if (product.id === undefined) {
            return;
        }

        getProductById(product.id)
            .then(data => {
                updateProductData(data);
            })
            .catch(e => console.log(e));
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        getProductById(product.id)
            .then(data => {
                updateProductData(data);
            })
            .catch(e => console.log(e));

        updateProductChanged(false);
    }, [productChanged]);

    useEffect(() => {
        updateProductDataByKey('selectedGroup', productData.group);
    }, [productData.group]);

    useEffect(() => {
        updateProductDataByKey('groups', groups);
    }, [groups]);

    const updateActiveTab = (newValue) => setActiveTab(newValue);

    const updateProductData = (newState) => {
        setProductData(state => ({
            ...state,
            ...newState,
        }));
    };

    const updateProductDataByKey = (key, newValue) => {
        setProductData(state => ({
            ...state,
            [key]: newValue,
        }))
    }

    const deleteModalBody = (
        <div className={styleForm.deleteModalBody}>
            <p>Сигурни ли сте, че искате да изтриете <span className={styleForm.productTitle}>{product.name}</span></p>
            <p className={styleForm.attention}>Този процес е необратим.</p>
        </div>
    );

    const hideDeleteModalClickHandler = () => setIsDeleteModalShow(false);

    const showModalClickHandler = () => setIsDeleteModalShow(true);

    useEscapeKey(isDeleteModalShow ? hideDeleteModalClickHandler : closeModalHandler);

    const formProductContext = {
        activeTab,
        updateActiveTab,
        productData,
        updateProductData,
        updateProductDataByKey,
    };

    return (
        <ProductFormContext.Provider value={{...formProductContext}}>
            {isDeleteModalShow &&
                <MessageBoxModal
                    title={'Изтриване на продукт'}
                    body={deleteModalBody}
                    closeModalHanlder={hideDeleteModalClickHandler}
                    errorButtonMessage={'Отказ'}
                    errorButtonHandler={hideDeleteModalClickHandler}
                    successButtonMessage={'Да'}
                    successButtonHandler={() => {
                        deleteProductClickHandler(productData)
                    }
                    }
                />
            }
            <ProductListNavigationTabs closeFormDialogSet={true}/>
            {activeTab === 'base-info' &&
                <ProductFormBaseInfo showModalClickHandler={showModalClickHandler}/>
            }
        </ProductFormContext.Provider>
    );
}