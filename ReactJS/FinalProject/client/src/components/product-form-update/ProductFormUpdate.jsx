import {useContext, useEffect, useRef, useState} from "react";

import style from "./ProductFormUpdate.module.css";

import ProductForm from "../product-form/ProductForm.jsx";

import {ProductsContext} from "../../contexts/ProductsContext.js";
import {SingleProductContext} from "../../contexts/SingleProductContext.js";
import {FormContext} from "../../contexts/FormContext.js";
import {MessageContext} from "../../contexts/MessageContext.js";
import compareObjects from "../../utils/compareObjects.js";


export default function ProductFormUpdate({closeModalHandler}) {
    const [newProductData, setNewProductData] = useState({});

    const {updateMessage, updateStatus} = useContext(MessageContext);
    const {allProducts, updateAllProduct} = useContext(ProductsContext);
    const {product, productDetailData} = useContext(SingleProductContext);
    const formRef = useRef();


    useEffect(() => {
        updateAllProduct(allProducts.map(item => item.id === product.id ? product : item));
    }, [product]);

    const updateNewProductData = (newData) => setNewProductData(newData);

    const onSubmitFormHandler = (productData) => {
        formRef.current.requestSubmit();
        const data = getPureData(productData)
        const oldData = getPureData(productDetailData)


        function getPureData(obj) {
            const {selectedGroup, groups, ...data} = obj;
            return data;
        }
    }

    const deleteProductClickHandler = (productData) => {
        console.log(productData)
        updateMessage(`Успешно изтрихте пордукт ${productData.name}`);
        updateStatus('success');
    }


    const contextValue = {
        newProductData,
        updateNewProductData,
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