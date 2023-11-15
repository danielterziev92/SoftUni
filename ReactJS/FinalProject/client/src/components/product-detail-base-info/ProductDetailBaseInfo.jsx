import {useEffect, useState} from "react";
import {getAllGroups, patchProductById} from "../../services/productService.js";

import style from './ProductDetailBaseInfo.module.css';

export default function ProductDetailBaseInfo({
                                                  id,
                                                  productData,
                                                  setProductData,
                                                  closeShowDetailClickHandler,
                                                  setIsSpinnerShow
                                              }) {

    const [dataToChange, setDataToChange] = useState({});
    const [groups, setGroups] = useState([]);

    const changeHandler = (e) => {
        let {type, name, value} = e.target;

        if (type === 'number') {
            value = Number(value);
        }

        if (type === 'checkbox') {
            value = e.target.checked
        }

        setDataToChange(state => ({
            ...state,
            [name]: value,
        }));
    };

    const changeProductDataSubmitHandler = (e) => {
        e.preventDefault();
        patchProductById(id, dataToChange).then(data => setProductData(data));

        // closeShowDetailClickHandler();
    }

    const sortGroup = (data) => {
        const grouped = {};
        const result = [];

        data.forEach(item => {
            const {parent_category, ...rest} = item;

            if (!parent_category) {
                result.push({...rest, children: []});
            } else {
                grouped[parent_category] = grouped[parent_category] || [];
                grouped[parent_category].push({...rest, children: []});
            }
        });

        result.forEach(parent => {
            parent.children = grouped[parent.id] || [];
        });

        return result;
    };

    useEffect(() => {
        console.log(groups)
    }, [groups]);

    useEffect(() => {
        setDataToChange(productData)
        getAllGroups().then(data => setGroups(sortGroup(data)));
    }, []);

    return (
        <form onSubmit={changeProductDataSubmitHandler} className={style.baseInfoForm}>
            <div className={style.name}>
                <label htmlFor="name">Име:</label>
                <input id="name" type="text" name="name" value={dataToChange.name} onChange={changeHandler}/>
            </div>
            <div className={style.code}>
                <label htmlFor="code">Код:</label>
                <input id="code" type="text" name="code" value={dataToChange.code} onChange={changeHandler}/>
            </div>
            <div className={style.barcode}>
                <label htmlFor="barcode">Баркод:</label>
                <input id="barcode" type="text" name="name" value={dataToChange.barcode} onChange={changeHandler}/>
            </div>
            <div className={style.price}>
                <label htmlFor="price">Цена:</label>
                <input id="price" type="number" step="0.01" name="price" value={dataToChange.price}
                       onChange={changeHandler}/>
            </div>
            <div className={style.quantity}>
                <label htmlFor="quantity">Количество:</label>
                <input id="quantity" type="number" step="1" name="quantity" value={dataToChange.quantity}
                       onChange={changeHandler}/>
            </div>
            <div className={style.active}>
                <label htmlFor="is_active">Активен:</label>
                <input id="is_active" type="checkbox" name="is_active" checked={dataToChange.is_active}
                       onChange={changeHandler}/>
            </div>
            <div className={style.groups}>

            </div>
            <div className={style.buttons}>
                <button>Нулирай</button>
                <button>Изтрий</button>
                <button>Промени</button>
                <button type="button" onClick={closeShowDetailClickHandler}>Отказ</button>
            </div>
        </form>
    );
}