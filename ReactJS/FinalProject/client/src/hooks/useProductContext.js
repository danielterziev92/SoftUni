import {useState} from "react";

export const useProductContext = (initialProductState) => {
    const [activeTab, setActiveTab] = useState('base-info');
    const [productData, setProductData] = useState(initialProductState);
    const [isFormShow, setIsFormShow] = useState(false);

    const updateActiveTab = (newValue) => {
        setActiveTab(newValue);
    };

    const updateProductData = (newData) => {
        setProductData(newData);
    };

    const updateProductDataByKey = (key, newValue) => {
        setProductData(state => ({
            ...state,
            [key]: newValue,
        }))
    }

    const closeFormDialog = () => {
        setIsFormShow(false);
    }

    const showFormDialog = () => {
        setIsFormShow(true);
    }


    return {
        activeTab,
        updateActiveTab,
        productData,
        updateProductData,
        closeFormDialog,
        showFormDialog,
        updateProductDataByKey
    }
}