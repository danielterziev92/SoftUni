import {useEffect, useRef, useState} from "react";

import style from "./ProductFormUpdate.module.css";

import ProductForm from "../product-form/ProductForm.jsx";

import compareObjects from "../../utils/compareObjects.js";


export default function ProductFormUpdate({closeModalHandler}) {
    const [productChanged, setProductChanged] = useState(false);
    const formRef = useRef();


    useEffect(() => {
    }, []);

    const updateProductChanged = (newValue) => setProductChanged(newValue);

    const onSubmitFormHandler = async (productData) => {
        formRef.current.requestSubmit();
        const {selectedGroup, groups, ...data} = productData;
        let result;

        if (compareObjects(data, result)) {
            setProductChanged(true);
        } else {
        }
    }

    const deleteProductClickHandler = (productData) => {
        try {
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
            <ProductForm/>
        </div>
    );
}