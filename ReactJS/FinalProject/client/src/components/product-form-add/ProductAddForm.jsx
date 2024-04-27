import {useRef} from "react";

import MessageBoxModal from "../message-box-modal/MessageBoxModal.jsx";
import ProductForm, {initialProductData} from "../product-form/ProductForm.jsx";

import {validationFormRules} from "../product-form-base-info/validationFormRules.js";

import useFormValidation from "../../hooks/useFormValidation.js";

function areAllFalsyExceptField(obj) {
    return Object.values(obj).every(value => !value);
}

export default function ProductAddForm({closeModalHandler}) {
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
            return;
        }

        try {
            closeModalHandler();
        } catch (e) {
            const messages = Object.values(e)
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
                <ProductForm/>
            }
            errorButtonMessage={'Отказ'}
            errorButtonHandler={closeModalHandler}
            successButtonMessage={'Добави'}
            successButtonHandler={() => onSubmitFormHandler(null)}
            closeModalHanlder={closeModalHandler}
        />
    );
}