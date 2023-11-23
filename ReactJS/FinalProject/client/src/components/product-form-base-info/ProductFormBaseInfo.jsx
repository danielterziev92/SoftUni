import {useContext, useEffect} from "react";

import formStyle from "./ProductFormBaseInfo.module.css";

import useForm from "../../hooks/useForm.js";
import useFormValidation from "../../hooks/useFormValidation.js";


import {ProductFormContext} from "../../contexts/ProductFormContext.js";
import {FormContext} from "../../contexts/FormContext.js";
import {initialProductData} from "../product-form/ProductForm.jsx";
import {validationFormRules} from "./validationFormRules.js";

import compareObjects from "../../utils/compareObjects.js";
import {MessageContext} from "../../contexts/MessageContext.js";

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
}

export default function ProductFormBaseInfo({showModalClickHandler}) {
    const {haveButtons, closeModalHandler, formRef} = useContext(FormContext);
    const {updateMessage, updateStatus} = useContext(MessageContext);
    const {productData} = useContext(ProductFormContext);
    const {
        formValue,
        updateFormValue,
        updateFormValueByKeyAndValue,
        changeDataHandler,
        onSubmitForm
    } = useForm(initialProductData);
    const {validationErrors, validateForm} = useFormValidation(validationFormRules);

    useEffect(() => {
        updateMessage(Object.values(validationErrors));
        updateStatus('error');
        // console.log(validationErrors)
        // Object.keys(validationErrors).forEach(key => {
        //     if (validationErrors[key].length > 0) {
        //         updateMessage(validationErrors[key]);
        //         updateStatus('error');
        //     }
        // });
    }, [validationErrors]);

    useEffect(() => {
        updateFormValue(productData);
    }, [productData]);

    const inputChangeHandler = (e) => {
        // console.log(e.target)
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
                <input id={FormKey.Price} type="number" step="0.01" name={FormKey.Price}
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
    );
}