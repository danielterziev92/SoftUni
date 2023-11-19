import {useContext, useEffect, useState} from "react";

import ProductListNavigationTabs from "../product-detail-navigation-tabs/ProductDetailNavigationTabs.jsx";
import useEscapeKeyHook from "../../hooks/useEscapeKeyHook.js";
import useLoadAllGroups from "../../hooks/useLoadAllGroups.js";
import ProductFormBaseInfo from "../product-form-base-info/ProductFormBaseInfo.jsx";

import {SingleProductContext} from "../../contexts/SingleProductContext.js";
import {MessageContext} from "../../contexts/MessageContext.js";
import {FormContext} from "../../contexts/FormContext.js";
import {getProductById} from "../../services/productService.js";
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

    const {product,} = useContext(SingleProductContext)
    const {closeModalHandler, onSubmitFormHandler} = useContext(FormContext);
    const {updateMessage, updateStatus} = useContext(MessageContext);
    const groups = useLoadAllGroups();

    useEffect(() => {
        updateProductDataByKey('selectedGroup', productData.group);
    }, [productData.group]);

    useEffect(() => {
        if (product.id === undefined) {
            return;
        }

        getProductById(product.id)
            .then(updateProductData)
            .catch(e => console.log(e));
    }, []);

    useEffect(() => {
        updateProductDataByKey('groups', groups);
    }, [groups]);

    useEscapeKeyHook(closeModalHandler);

    const updateActiveTab = (newValue) => {
        setActiveTab(newValue);
    };

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

    const submitHandler = async (e) => {
        e.preventDefault();

        onSubmitFormHandler();

        // const data = {...productData, group: productData.selectedGroup}
        // delete data.groups;
        // delete data.selectedGroup;
        //
        // console.log('Submit')
    };

    const removeProductHandler = () => {
        console.log('Remove product');
    };

    const formProductContext = {
        activeTab,
        updateActiveTab,
        productData,
        updateProductData,
        updateProductDataByKey,
    }


    return (
        <ProductFormContext.Provider value={{...formProductContext}}>
            <ProductListNavigationTabs closeFormDialogSet={true}/>
            {activeTab === 'base-info' &&
                <ProductFormBaseInfo submitHandler={submitHandler} removeProductHandler={removeProductHandler}/>
            }
        </ProductFormContext.Provider>
    );
}