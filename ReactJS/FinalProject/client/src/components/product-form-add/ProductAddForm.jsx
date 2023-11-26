import {useContext, useRef} from "react";

import MessageBoxModal from "../message-box-modal/MessageBoxModal.jsx";
import ProductForm, {initialProductData} from "../product-form/ProductForm.jsx";

import {createProduct} from '../../services/productService.js'

import {MessageContext} from "../../contexts/MessageContext.jsx";
import {SingleProductContext} from "../../contexts/SingleProductContext.js";
import {FormContext} from "../../contexts/FormContext.js";
import {ProductsContext} from "../../contexts/ProductsContext.jsx";
import {validationFormRules} from "../product-form-base-info/validationFormRules.js";

import useFormValidation from "../../hooks/useFormValidation.js";
import {ProductFormContext} from "../../contexts/ProductFormContext.js";

function areAllFalsyExceptField(obj) {
    return Object.values(obj).every(value => !value);
}

export default function ProductAddForm({closeModalHandler}) {
    const {updateMessage, updateStatus} = useContext(MessageContext);
    const {addToAllProducts} = useContext(ProductsContext)
    const formRef = useRef();
    const {validateForm} = useFormValidation(validationFormRules);

    const onSubmitFormHandler = async (data) => {
        formRef.current.requestSubmit();
        if (!data) {
            return;
        }

        const {groups, selectedGroup, ...productData} = data;
        productData.group = selectedGroup;

        const result = Object.entries(productData).map(([filed, value]) => {
            if (filed === 'is_active') {
                return;
            }
            validateForm(filed, value)
        })

        if (!areAllFalsyExceptField(result)) {
            updateMessage('Моля попълнете всички полета');
            updateStatus('error');
            return;
        }

        try {
            const result = await createProduct({...productData});
            addToAllProducts(result);
            updateMessage('Успешно добавихте продукт');
            updateStatus('success');
            closeModalHandler();
        } catch (e) {
            const messages = Object.values(e)
            updateMessage(messages)
            updateStatus('error');
        }

    }

    const product = initialProductData;

    const singleProductContextValue = {
        product,
        productDetailData: {},
        updateProductDetailData: null,
    }

    const productFormContextValue = {
        productChanged: false,
        updateProductChanged: () => {
        },
        onSubmitFormHandler,
        haveButtons: false,
        deleteProductClickHandler: null,
        formRef,
        closeModalHandler,
    };

    return (
        <MessageBoxModal
            title={'Добавяне на продукт'}
            body={
                <SingleProductContext.Provider value={{...singleProductContextValue}}>
                    <ProductFormContext.Provider value={{...productFormContextValue}}>
                        <ProductForm/>
                    </ProductFormContext.Provider>
                </SingleProductContext.Provider>
            }
            successButtonMessage={'Добави'}
            errorButtonMessage={'Отказ'}
            successButtonHandler={() => onSubmitFormHandler(null)}
            errorButtonHandler={closeModalHandler}
            closeModalHanlder={closeModalHandler}
        />
    );
}