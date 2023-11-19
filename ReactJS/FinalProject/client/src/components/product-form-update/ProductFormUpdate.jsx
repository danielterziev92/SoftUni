import {useContext, useEffect, useRef} from "react";
import style from "./ProductFormUpdate.module.css";
import {ProductsContext} from "../../contexts/ProductsContext.js";
import ProductForm from "../product-form/ProductForm.jsx";
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

    const onSubmitFormHandler = () => {
        formRef.current.requestSubmit();
        console.log('Submit From Product Update Form')
        updateMessage('Успено добавихте продукт');
        updateStatus('success');
    }


    // const closeDetailClickHandler = () => setIsSpinnerShow(false);
    // const updateActiveTab = (value) => setActiveTab(value);
    //
    const deleteClickHandler = () => {
        console.log('delete product')
        // deleteProductById(id).then(setProductRemoveMessage);
    }

    const haveButtons = true;

    return (
        <div className={style.detail}>
            <FormContext.Provider
                value={{haveButtons, closeModalHandler, formRef, onSubmitFormHandler, deleteClickHandler}}>
                <ProductForm/>
            </FormContext.Provider>
        </div>
    );
}