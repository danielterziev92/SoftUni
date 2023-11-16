import formStyle from './ProductForm.module.css';
import {useEffect, useState} from "react";
import useEscapeKeyHook from "../../hooks/useEscapeKeyHook.jsx";

export const initialFilledData = {
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

function AllGroupsElement({groups, changeHandler, selectedId}) {
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
                            data={item.children}
                            changeHandler={changeHandler}
                            selectedId={selectedId}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
}

export default function ProductForm({
                                        productData,
                                        submitHandler,
                                        removeProduct,
                                        removeProductHandler,
                                        closeModalHandler,
                                    }) {
    const [data, setData] = useState(initialFilledData);

    const changeDataHandler = (e) => {
        let {type, name, value} = e.target;

        if (type === 'number') {
            value = Number(value);
        }

        if (type === 'checkbox') {
            value = e.target.checked;
        }

        if (type === 'radio') {
            value = Number(e.target.id);
        }

        setData(state => ({
            ...state,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (productData) {
            setData(productData);
        }

    }, []);

    useEscapeKeyHook(closeModalHandler);

    return (
        <form onSubmit={submitHandler} className={formStyle.Form}>
            <div className={formStyle.name}>
                <label htmlFor="name">Име:</label>
                <input id="name" type="text" name="name" value={data.name}
                       onChange={changeDataHandler}/>
            </div>
            <div className={formStyle.code}>
                <label htmlFor="code">Код:</label>
                <input id="code" type="text" name="code" value={data.code}
                       onChange={changeDataHandler}/>
            </div>
            <div className={formStyle.barcode}>
                <label htmlFor="barcode">Баркод:</label>
                <input id="barcode" type="text" name="name" value={data.barcode}
                       onChange={changeDataHandler}/>
            </div>
            <div className={formStyle.price}>
                <label htmlFor="price">Цена:</label>
                <input id="price" type="number" step="0.01" name="price" value={data.price}
                       onChange={changeDataHandler}/>
            </div>
            <div className={formStyle.quantity}>
                <label htmlFor="quantity">Количество:</label>
                <input id="quantity" type="number" step="1" name="quantity" value={data.quantity}
                       onChange={changeDataHandler}/>
            </div>
            <div className={formStyle.active}>
                <label htmlFor="is_active">Активен:</label>
                <input id="is_active" type="checkbox" name="is_active" checked={data.is_active}
                       onChange={changeDataHandler}/>
            </div>
            <div className={formStyle.groups}>
                <span>Групи:</span>
                <AllGroupsElement
                    groups={data.groups}
                    changeHandler={changeDataHandler}
                    selectedId={data.selectedGroup}/>
            </div>
            <div className={formStyle.buttons}>
                {removeProduct &&
                    <button type="button" onClick={removeProductHandler} className={formStyle.delete}>
                        <i className="fa-solid fa-trash"></i> Изтрий
                    </button>
                }
                <button className={formStyle.save}>
                    <i className="fa-solid fa-floppy-disk"></i> Запази
                </button>
                <button type="button" onClick={closeModalHandler} className={formStyle.cancel}>
                    <i className="fas fa-times-circle"></i> Отказ
                </button>
            </div>
        </form>
    );
}