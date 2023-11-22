import {useContext, useEffect, useRef, useState} from "react";

import style from "./ProductFormUpdate.module.css";

import ProductForm from "../product-form/ProductForm.jsx";

import {ProductsContext} from "../../contexts/ProductsContext.js";
import {SingleProductContext} from "../../contexts/SingleProductContext.js";
import {FormContext} from "../../contexts/FormContext.js";
import {MessageContext} from "../../contexts/MessageContext.js";

import {updateProductById} from "../../services/productService.js";

import compareObjects from "../../utils/compareObjects.js";


export default function ProductFormUpdate({closeModalHandler}) {

    const {updateMessage, updateStatus} = useContext(MessageContext);
    const {allProducts, updateAllProducts, updateExistedProducts} = useContext(ProductsContext);
    const {product} = useContext(SingleProductContext);
    const [productChanged, setProductChanged] = useState(false);
    const formRef = useRef();


    useEffect(() => {
        updateAllProducts(allProducts.map(item => item.id === product.id ? product : item));
    }, [product]);

    const updateProductChanged = (newValue) => setProductChanged(newValue);

    const onSubmitFormHandler = async (productData) => {
        formRef.current.requestSubmit();
        const {selectedGroup, groups, ...data} = productData;

        const result = await updateProductById(data.id, data);
        if (compareObjects(data, result)) {
            updateMessage(`Успешно променихте продукт ${data.name}`);
            updateStatus('success');
            setProductChanged(true);
            updateExistedProducts(result);
        } else {
            updateMessage('Нещо се обърка. Моля опитайте по-късно или се свържете с наш представител');
            updateStatus('error');
        }
    }

    const deleteProductClickHandler = (productData) => {
        console.log(productData)
        updateMessage(`Успешно изтрихте пордукт ${productData.name}`);
        updateStatus('success');
    }


    const contextValue = {
        productChanged,
        updateProductChanged,
        onSubmitFormHandler,
        haveButtons: true,
        deleteProductClickHandler,
        formRef,
        closeModalHandler,
    }

    return (
        <div className={style.detail}>
            <FormContext.Provider value={{...contextValue}}>
                <ProductForm/>
            </FormContext.Provider>
        </div>
    );
}