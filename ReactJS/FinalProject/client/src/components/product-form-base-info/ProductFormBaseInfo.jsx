import {useContext, useEffect, useLayoutEffect, useState} from "react";

import {ProductFormContext} from "../../contexts/ProductFormContext.js";
import {initialProductData} from "../product-form/ProductForm.jsx";
import {validationFormRules} from "./validationFormRules.js";

import formStyle from "./ProductFormBaseInfo.module.css";

import useForm from "../../hooks/useForm.js";
import useFormValidation from "../../hooks/useFormValidation.js";

import compareObjects from "../../utils/compareObjects.js";
import ProductDataContext from "../../contexts/ProductDataContext.js";

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

const FormKey = {
    Name: 'name',
    Code: 'code',
    Barcode: 'barcode',
    Quantity: 'quantity',
    Price: 'price',
    IsActive: 'is_active',
    user: 0,
}

export default function ProductFormBaseInfo({showModalClickHandler}) {
    const {user} = {};
    const {formRef, onSubmitFormHandler, haveButtons, closeModalHandler} = useContext(ProductFormContext);
    const {productData} = useContext(ProductDataContext);
    const {
        formValue,
        updateFormValue,
        updateFormValueByKeyAndValue,
        changeDataHandler,
        onSubmitForm
    } = useForm(initialProductData, onSubmitFormHandler);
    const {validationErrors, validateForm} = useFormValidation(validationFormRules);
    const [errorMessages, setErrorMessages] = useState([]);

    useEffect(() => {
        setErrorMessages(Object.values(validationErrors).flat());
    }, [validationErrors]);

    useEffect(() => {
        updateFormValue(productData);
        updateFormValueByKeyAndValue('user', user.user_id);
    }, [productData]);

    const inputChangeHandler = (e) => {
        const typeHandlers = {
            'number': (target) => Number(target.value),
            'checkbox': (target) => target.checked,
            'radio': (target) => target.id,
        }

        let {type, name, value} = e.target;

        if (typeHandlers[type]) {
            value = typeHandlers[type](e.target);
        }

        changeDataHandler(e);
        validateForm(name, value);
    }

    const changeSelectedGroupClickHandler = (e) => {
        updateFormValueByKeyAndValue('selectedGroup', Number(e.target.id));
    };

    return (
        <>
            <form ref={formRef} onSubmit={onSubmitForm} className={formStyle.Form}>
                <div className={formStyle.name}>
                    <label htmlFor={FormKey.Name}>Име:</label>
                    <input id={FormKey.Name} type="text" name={FormKey.Name} value={formValue[FormKey.Name]}
                           onChange={inputChangeHandler}/>
                </div>
                <div className={formStyle.code}>
                    <label htmlFor={FormKey.Code}>Код:</label>
                    <input id={FormKey.Code} type="text" name={FormKey.Code} value={formValue[FormKey.Code]}
                           onChange={inputChangeHandler}/>
                </div>
                <div className={formStyle.barcode}>
                    <label htmlFor={FormKey.Barcode}>Баркод:</label>
                    <input id={FormKey.Barcode} type="text" name={FormKey.Barcode} value={formValue[FormKey.Barcode]}
                           onChange={inputChangeHandler}/>
                </div>
                <div className={formStyle.quantity}>
                    <label htmlFor={FormKey.Quantity}>Количество:</label>
                    <input id={FormKey.Quantity} type="number" step="1" name={FormKey.Quantity}
                           value={formValue[FormKey.Quantity]}
                           onChange={inputChangeHandler}/>
                </div>
                <div className={formStyle.price}>
                    <label htmlFor={FormKey.Price}>Цена:</label>
                    <input id={FormKey.Price} type="number" step="0.001" name={FormKey.Price}
                           value={formValue[FormKey.Price]}
                           onChange={inputChangeHandler}/>
                </div>
                <div className={formStyle.active}>
                    <label htmlFor={FormKey.IsActive}>Активен:</label>
                    <input id={FormKey.IsActive} type="checkbox" name={FormKey.IsActive}
                           checked={formValue[FormKey.IsActive]} onChange={changeDataHandler}/>
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
                            <button type="button" onClick={showModalClickHandler} className={formStyle.delete}
                                    disabled={!compareObjects(productData, formValue)}>
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
            <ul className={formStyle.errors}>
                {errorMessages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </>
    );
}