import ProductListNavigationTabs from "../product-detail-navigation-tabs/ProductDetailNavigationTabs.jsx";
import {ProductContext} from "../../contexts/ProductContext.js";
import {useContext, useEffect, useState} from "react";
import {getProductById} from "../../services/productService.js";
import useEscapeKeyHook from "../../hooks/useEscapeKeyHook.js";
import useForm from "../../hooks/useForm.js";
import useLoadAllGroups from "../../hooks/useLoadAllGroups.js";
import ProductFormBaseInfo from "../product-form-base-info/ProductFormBaseInfo.jsx";
import {MessageContext} from "../../contexts/MessageContext.js";

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

const initialErrorMessages = {
    name: '',
    code: '',
    quantity: '',
    price: '',
    selectedGroup: ''
}

export default function ProductForm({productId, closeModalHandler, formRef}) {

    const [activeTab, setActiveTab] = useState('base-info');
    const [productData, setProductData] = useState(initialProductData);
    const [showRemoveButton, setShowRemoveButton] = useState(false);


    const {updateMessage, updateStatus} = useContext(MessageContext);
    const {formValue, updateFormValueByKeyAndValue,} = useForm(productData);
    const groups = useLoadAllGroups();


    useEffect(() => {
        if (productId === null) {
            updateProductData(initialProductData);
            return;
        }

        getProductById(productId)
            .then(updateProductData)
            .catch(e => {
                updateMessage(e);
                updateStatus('error');
            });
        setShowRemoveButton(true);
    }, []);

    useEffect(() => {
        updateProductDataByKey('groups', groups);
        updateFormValueByKeyAndValue('groups', groups);
    }, [groups]);

    useEscapeKeyHook(closeModalHandler);

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

    const submitHandler = async (e) => {
        e.preventDefault();

        const data = {...productData, group: productData.selectedGroup}
        delete data.groups;
        delete data.selectedGroup;

        console.log('Submit')
    };

    const removeProductHandler = () => {
        console.log('Remove product');
    };

    const productContext = {
        formRef,
        activeTab,
        updateActiveTab,
        productData,
        updateProductData,
        updateProductDataByKey,
    }


    return (
        <ProductContext.Provider value={productContext}>
            <ProductListNavigationTabs closeFormDialogSet={false}/>
            {activeTab === 'base-info' &&
                <ProductFormBaseInfo
                    submitHandler={submitHandler}
                    removeProductHandler={removeProductHandler}
                    closeModalHandler={closeModalHandler}
                    showRemoveButto={showRemoveButton}
                />
            }
        </ProductContext.Provider>
    );
}