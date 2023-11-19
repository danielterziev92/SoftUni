import ProductListNavigationTabs from "../product-detail-navigation-tabs/ProductDetailNavigationTabs.jsx";
import formStyle from "./ProductForm.module.css";
import {ProductContext} from "../../contexts/ProductContext.js";
import {useProductContext} from "../../hooks/useProductContext.js";
import {useContext, useEffect, useState} from "react";
import {getProductById} from "../../services/productService.js";
import {MessageContext} from "../../contexts/MessageContext.js";
import useEscapeKeyHook from "../../hooks/useEscapeKeyHook.js";
import useForm from "../../hooks/useForm.js";
import useLoadAllGroups from "../../hooks/useLoadAllGroups.js";

function AllGroupsElement({groups, changeHandler, selectedId}) {
    if (!groups || groups.length === 0) {
        return (<></>);
    }

    return (
        <ul>
            {groups.map((item) => (
                <li key={item.id}>
                    <div>
                        <input id={item.id} type="radio" name="group"
                               checked={selectedId === item.id} onChange={changeHandler}/>
                        <label htmlFor={item.id}>{item.name}</label>
                    </div>
                    {item.children.length > 0 && (
                        <AllGroupsElement
                            groups={item.children}
                            changeHandler={changeHandler}
                            selectedId={selectedId}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
}

const initialProductData = {
    name: '',
    code: '',
    barcode: '',
    quantity: 0,
    price: 0,
    group: 0,
    is_active: false,
    groups: [],
    selectedGroup: 0,
};


export default function ProductForm({productId, closeModalHandler, formRef}) {
    const {updateMessage, updateStatus} = useContext(MessageContext);
    const {
        productData,
        updateProductData,
        updateProductDataByKey,
        ...productContext
    } = useProductContext(initialProductData);
    const [showRemoveButton, setShowRemoveButton] = useState(false);
    const {formValue, setFormValue, changeDataHandler} = useForm(productData);
    const groups = useLoadAllGroups();


    useEffect(() => {
        if (productId === null) {
            updateProductData(initialProductData);
            return;
        }

        getProductById(productId)
            .then(updateProductData)
            .catch(e => {
                updateMessage(e);
                updateStatus('error');
            });
        setShowRemoveButton(true);
    }, []);

    useEffect(() => {
        updateProductDataByKey('groups', groups)
    }, [groups]);

    useEscapeKeyHook(closeModalHandler);

    const changeSelectedGroupClickHandler = (e) => {
        updateProductData(state => ({
            ...state,
            selectedGroup: Number(e.target.id),
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('Submit changes');
    }

    const removeProductHandler = () => {
        console.log('Remove product');
    };


    return (
        <ProductContext.Provider value={{...productContext}}>
            <form ref={formRef} onSubmit={submitHandler} className={formStyle.Form}>
                <div className={formStyle.name}>
                    <label htmlFor="name">Име:</label>
                    <input id="name" type="text" name="name" value={productData.name}
                           onChange={changeDataHandler}/>
                </div>
                <div className={formStyle.code}>
                    <label htmlFor="code">Код:</label>
                    <input id="code" type="text" name="code" value={productData.code}
                           onChange={changeDataHandler}/>
                </div>
                <div className={formStyle.barcode}>
                    <label htmlFor="barcode">Баркод:</label>
                    <input id="barcode" type="text" name="name" value={productData.barcode}
                           onChange={changeDataHandler}/>
                </div>
                <div className={formStyle.price}>
                    <label htmlFor="price">Цена:</label>
                    <input id="price" type="number" step="0.01" name="price" value={productData.price}
                           onChange={changeDataHandler}/>
                </div>
                <div className={formStyle.quantity}>
                    <label htmlFor="quantity">Количество:</label>
                    <input id="quantity" type="number" step="1" name="quantity" value={productData.quantity}
                           onChange={changeDataHandler}/>
                </div>
                <div className={formStyle.active}>
                    <label htmlFor="is_active">Активен:</label>
                    <input id="is_active" type="checkbox" name="is_active" checked={productData.is_active}
                           onChange={changeDataHandler}/>
                </div>
                <div className={formStyle.groups}>
                    <span>Групи:</span>
                    <AllGroupsElement
                        groups={productData.groups}
                        changeHandler={changeSelectedGroupClickHandler}
                        selectedId={productData.selectedGroup}/>
                </div>
                <div className={formStyle.buttons}>
                    {showRemoveButton &&
                        <>
                            <button type="button" onClick={removeProductHandler} className={formStyle.delete}>
                                <i className="fa-solid fa-trash"></i> Изтрий
                            </button>
                            <button className={formStyle.save}>
                                <i className="fa-solid fa-floppy-disk"></i> Запази
                            </button>

                            <button type="button" onClick={closeModalHandler} className={formStyle.cancel}>
                                <i className="fas fa-times-circle"></i> Отказ
                            </button>
                        </>
                    }
                </div>
            </form>
        </ProductContext.Provider>
    );
}