import {useContext, useEffect, useRef} from "react";

import style from "./ProductFormUpdate.module.css";

import ProductForm from "../product-form/ProductForm.jsx";

import {ProductsContext} from "../../contexts/ProductsContext.js";
import {SingleProductContext} from "../../contexts/SingleProductContext.js";
import {FormContext} from "../../contexts/FormContext.js";
import {MessageContext} from "../../contexts/MessageContext.js";


export default function ProductFormUpdate({closeModalHandler}) {
    const {updateMessage, updateStatus} = useContext(MessageContext);
    const {allProducts, updateAllProduct} = useContext(ProductsContext);
    const {product} = useContext(SingleProductContext);
    const formRef = useRef();


    useEffect(() => {
        updateAllProduct(allProducts.map(item => item.id === product.id ? product : item));
    }, [product]);

    const onSubmitFormHandler = (data) => {
        formRef.current.requestSubmit();
        console.log('Submit From Product Update Form')
        console.log(data);
        updateMessage('Успено добавихте продукт');
        updateStatus('success');
    }

    const deleteProductClickHandler = (productData) => {
        console.log(productData)
        updateMessage(`Успешно изтрихте пордукт ${productData.name}`);
        updateStatus('success');
    }


    const contextValue = {
        haveButtons: true,
        closeModalHandler,
        formRef,
        onSubmitFormHandler,
        deleteProductClickHandler,
    }

    return (
        <div className={style.detail}>
            <FormContext.Provider value={{...contextValue}}>
                <ProductForm/>
            </FormContext.Provider>
        </div>
    );
}