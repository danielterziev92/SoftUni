import {useContext, useRef} from "react";

import MessageBoxModal from "../message-box-modal/MessageBoxModal.jsx";
import ProductForm, {initialProductData} from "../product-form/ProductForm.jsx";

import {createProduct} from '../../services/productService.js'

import {MessageContext} from "../../contexts/MessageContext.js";
import {SingleProductContext} from "../../contexts/SingleProductContext.js";
import {FormContext} from "../../contexts/FormContext.js";
import {ProductsContext} from "../../contexts/ProductsContext.js";

export default function ProductAddForm({closeModalHandler}) {
    const {message, updateMessage, updateStatus} = useContext(MessageContext);
    const {updateProducts} = useContext(ProductsContext)
    const formRef = useRef(null);

    const onSubmitFormHandler = async (data) => {
        formRef.current.requestSubmit();

        console.log(data)
        // const result = await createProduct()

        console.log('Submit From Product Add Form')
        updateMessage('Успешно добавихте продукт');
        updateStatus('success');
    }

    const product = initialProductData;

    const singleProductContextValue = {
        product,
        productDetailData: {},
        updateProductDetailData: null,
    }

    const formContextValue = {
        newProductData: null,
        updateNewProductData: null,
        deleteClickHandler: null,
        haveButtons: false,
        formRef,
        onSubmitFormHandler,
        deleteProductClickHandler: null,
        closeModalHandler,
    };

    return (
        <MessageBoxModal
            title={'Добавяне на продукт'}
            body={
                <SingleProductContext.Provider value={{...singleProductContextValue}}>
                    <FormContext.Provider value={{formContextValue}}>
                        <ProductForm/>
                    </FormContext.Provider>
                </SingleProductContext.Provider>
            }
            successButtonMessage={'Добави'}
            errorButtonMessage={'Отказ'}
            successButtonHandler={onSubmitFormHandler}
            errorButtonHandler={closeModalHandler}
            closeModalHanlder={closeModalHandler}
        />
    );
}