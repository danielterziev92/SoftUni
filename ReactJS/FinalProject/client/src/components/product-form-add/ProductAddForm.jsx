import {useContext, useRef} from "react";
import MessageBoxModal from "../message-box-modal/MessageBoxModal.jsx";
import {MessageContext} from "../../contexts/MessageContext.js";
import ProductForm from "../product-form/ProductForm.jsx";

export default function ProductAddForm({closeProductForm}) {
    const {message, updateMessage, updateStatus} = useContext(MessageContext);
    const formRef = useRef(null);

    const successfullyAddProductHandler = () => {
        formRef.current.requestSubmit();
        updateMessage('Успено добавихте продукт');
        updateStatus('success');
    }

    return (
        <MessageBoxModal
            title={'Добавяне на продукт'}
            body={<ProductForm productId={null} closeModalHandler={closeProductForm} formRef={formRef}/>}
            successButtonMessage={'Добави'}
            errorButtonMessage={'Отказ'}
            successButtonHandler={successfullyAddProductHandler}
            errorButtonHandler={closeProductForm}
            closeModalHanlder={closeProductForm}
        />
    );
}