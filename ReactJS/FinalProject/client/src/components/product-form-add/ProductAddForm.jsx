import {useContext, useRef} from "react";

import MessageBoxModal from "../message-box-modal/MessageBoxModal.jsx";
import ProductForm, {initialProductData} from "../product-form/ProductForm.jsx";

import {createProduct} from '../../services/productService.js'

import {MessageContext} from "../../contexts/MessageContext.js";
import {SingleProductContext} from "../../contexts/SingleProductContext.js";
import {FormContext} from "../../contexts/FormContext.js";
import {ProductsContext} from "../../contexts/ProductsContext.js";
import useFormValidation from "../../hooks/useFormValidation.js";
import {validationFormRules} from "../product-form-base-info/validationFormRules.js";

export default function ProductAddForm({closeModalHandler}) {
    const {updateMessage, updateStatus} = useContext(MessageContext);
    const {addToAllProducts} = useContext(ProductsContext)
    const formRef = useRef();
    const {validationErrors, validateForm} = useFormValidation(validationFormRules);

    const onSubmitFormHandler = async (data) => {
        formRef.current.requestSubmit();
        const {groups, selectedGroup, ...productData} = data;

        if (Object.entries(productData).map(([filed, value]) => {
            if (filed === 'is_active') {
                return;
            }
            validateForm(filed, value)
        })) {
            updateMessage('Моля попълнете всички полета');
            updateStatus('error');
            return;
        }

        // if (areAllFalsyExceptField(productData, 'is_active')) {
        //     updateMessage('Моля попълнете всички полета');
        //     updateStatus('error');
        //     return;
        // }

        // if (data === undefined) {
        //     console.log(data)
        //     return;
        // }

        console.log(productData)

        // try {
        //     const result = await createProduct({...productData, group: selectedGroup});
        //     console.log(result)
        //     addToAllProducts(result);
        //     updateMessage('Успешно добавихте продукт');
        //     updateStatus('success');
        //     closeModalHandler();
        // } catch (e) {
        //     updateMessage(e.message);
        //     updateStatus('error');
        // }

    }

    const product = initialProductData;

    const singleProductContextValue = {
        product,
        productDetailData: {},
        updateProductDetailData: null,
    }

    const formContextValue = {
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
                    <FormContext.Provider value={{...formContextValue}}>
                        <ProductForm/>
                    </FormContext.Provider>
                </SingleProductContext.Provider>
            }
            successButtonMessage={'Добави'}
            errorButtonMessage={'Отказ'}
            successButtonHandler={() => onSubmitFormHandler()}
            errorButtonHandler={closeModalHandler}
            closeModalHanlder={closeModalHandler}
        />
    );
}