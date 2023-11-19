import {useContext, useRef} from "react";
import MessageBoxModal from "../message-box-modal/MessageBoxModal.jsx";
import ProductForm, {initialProductData} from "../product-form/ProductForm.jsx";

import {MessageContext} from "../../contexts/MessageContext.js";
import {SingleProductContext} from "../../contexts/SingleProductContext.js";
import {FormContext} from "../../contexts/FormContext.js";

export default function ProductAddForm({closeModalHandler}) {
    const {message, updateMessage, updateStatus} = useContext(MessageContext);
    const formRef = useRef(null);

    const onSubmitFormHandler = () => {
        formRef.current.requestSubmit();
        console.log('Submit From Product Add Form')
        updateMessage('Успено добавихте продукт');
        updateStatus('success');
    }

    const deleteClickHandler = null;

    const haveButtons = false;
    const product = initialProductData;

    return (
        <MessageBoxModal
            title={'Добавяне на продукт'}
            body={
                <SingleProductContext.Provider value={{product}}>
                    <FormContext.Provider
                        value={{haveButtons, closeModalHandler, formRef, onSubmitFormHandler, deleteClickHandler}}>
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