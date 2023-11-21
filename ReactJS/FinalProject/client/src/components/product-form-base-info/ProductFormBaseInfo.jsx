import {useContext, useEffect} from "react";

import useForm from "../../hooks/useForm.js";

import formStyle from "./ProductFormBaseInfo.module.css";

import {ProductFormContext} from "../../contexts/ProductFormContext.js";
import {FormContext} from "../../contexts/FormContext.js";
import {initialProductData} from "../product-form/ProductForm.jsx";

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

export default function ProductFormBaseInfo() {
    const {haveButtons, closeModalHandler, formRef, deleteProductClickHandler} = useContext(FormContext);
    const {productData} = useContext(ProductFormContext);
    const {
        formValue,
        updateFormValue,
        updateFormValueByKeyAndValue,
        changeDataHandler,
        onSubmitForm
    } = useForm(initialProductData);

    useEffect(() => {
        updateFormValue(productData)
    }, [productData]);

    const changeSelectedGroupClickHandler = (e) => {
        updateFormValueByKeyAndValue('selectedGroup', Number(e.target.id));
    };

    return (
        <form ref={formRef} onSubmit={onSubmitForm} className={formStyle.Form}>
            <div className={formStyle.name}>
                <label htmlFor="name">Име:</label>
                <input id="name" type="text" name="name" value={formValue.name}
                       onChange={changeDataHandler}/>
            </div>
            <div className={formStyle.code}>
                <label htmlFor="code">Код:</label>
                <input id="code" type="text" name="code" value={formValue.code}
                       onChange={changeDataHandler}/>
                <div className="error-message">{}</div>
            </div>
            <div className={formStyle.barcode}>
                <label htmlFor="barcode">Баркод:</label>
                <input id="barcode" type="text" name="barcode" value={formValue.barcode}
                       onChange={changeDataHandler}/>
            </div>
            <div className={formStyle.quantity}>
                <label htmlFor="quantity">Количество:</label>
                <input id="quantity" type="number" step="1" name="quantity" value={formValue.quantity}
                       onChange={changeDataHandler}/>
            </div>
            <div className={formStyle.price}>
                <label htmlFor="price">Цена:</label>
                <input id="price" type="number" step="0.01" name="price" value={formValue.price}
                       onChange={changeDataHandler}/>
            </div>
            <div className={formStyle.active}>
                <label htmlFor="is_active">Активен:</label>
                <input id="is_active" type="checkbox" name="is_active" checked={formValue.is_active}
                       onChange={changeDataHandler}/>
            </div>
            <div className={formStyle.groups}>
                <span>Групи:</span>
                <AllGroupsElement
                    groups={formValue.groups}
                    changeHandler={changeSelectedGroupClickHandler}
                    selectedId={formValue.selectedGroup}/>
            </div>
            <div className={formStyle.buttons}>
                {haveButtons &&
                    <>
                        <button type="button" onClick={() => {
                            deleteProductClickHandler(formValue)
                        }}
                                className={formStyle.delete}>
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
    );

}