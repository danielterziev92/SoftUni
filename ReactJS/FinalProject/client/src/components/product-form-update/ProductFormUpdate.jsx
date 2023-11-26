import {useContext, useEffect, useRef, useState} from "react";

import style from "./ProductFormUpdate.module.css";

import ProductForm from "../product-form/ProductForm.jsx";

import {ProductsContext} from "../../contexts/ProductsContext.jsx";
import {SingleProductContext} from "../../contexts/SingleProductContext.js";
import {MessageContext} from "../../contexts/MessageContext.jsx";
import {ProductFormContext} from '../../contexts/ProductFormContext.js'

import {deleteProductById, updateProductById} from "../../services/productService.js";

import compareObjects from "../../utils/compareObjects.js";


export default function ProductFormUpdate({closeModalHandler}) {
    const {updateMessage, updateStatus} = useContext(MessageContext);
    const {allProducts, updateAllProducts, updateExistedProducts, deleteExistedProduct} = useContext(ProductsContext);
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
        let result;
        try {
            result = await updateProductById(data.id, data);
        } catch (e) {
            const messages = Object.values(e)
            updateMessage(messages);
            updateStatus('error');
            return;
        }

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
        try {
            deleteProductById(productData.id);
            deleteExistedProduct(productData);
            updateMessage(`Успешно изтрихте пордукт ${productData.name}`);
            updateStatus('success');
            closeModalHandler();
        } catch (e) {
            console.log(e);
        }
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
            <ProductFormContext.Provider value={{...contextValue}}>
                <ProductForm/>
            </ProductFormContext.Provider>
        </div>
    );
}