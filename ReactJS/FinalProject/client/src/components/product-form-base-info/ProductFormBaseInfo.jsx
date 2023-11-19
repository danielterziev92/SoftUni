import formStyle from "./ProductFormBaseInfo.module.css";
import useForm from "../../hooks/useForm.js";
import {useContext, useEffect} from "react";
import {ProductFormContext} from "../../contexts/ProductFormContext.js";
import {FormContext} from "../../contexts/FormContext.js";

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

export default function ProductFormBaseInfo({submitHandler, removeProductHandler,}) {
    const {productData, updateProductData} = useContext(ProductFormContext);
    const {haveButtons, closeModalHandler, formRef} = useContext(FormContext);
    const {formValue, updateFormValue, changeDataHandler} = useForm();

    useEffect(() => {
        updateProductData(state => ({
            ...state,
            ...formValue,
        }));
    }, [formValue]);

    const changeSelectedGroupClickHandler = (e) => {
        updateFormValue(state => ({
            ...state,
            selectedGroup: Number(e.target.id),
        }));
    };

    return (
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
                <div className="error-message">{}</div>
            </div>
            <div className={formStyle.barcode}>
                <label htmlFor="barcode">Баркод:</label>
                <input id="barcode" type="text" name="barcode" value={productData.barcode}
                       onChange={changeDataHandler}/>
            </div>
            <div className={formStyle.quantity}>
                <label htmlFor="quantity">Количество:</label>
                <input id="quantity" type="number" step="1" name="quantity" value={productData.quantity}
                       onChange={changeDataHandler}/>
            </div>
            <div className={formStyle.price}>
                <label htmlFor="price">Цена:</label>
                <input id="price" type="number" step="0.01" name="price" value={productData.price}
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
                {haveButtons &&
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
    );

}