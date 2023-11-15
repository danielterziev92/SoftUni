import { useState} from "react";
import {patchProductById} from "../../services/productService.js";

export default function ProductDetailBaseInfo({
                                                  id,
                                                  productData,
                                                  setProductData,
                                                  closeShowDetailClickHandler,
                                                  setIsSpinnerShow
                                              }) {

    const [dataToChange, setDataToChange] = useState({});

    const changeHandler = (e) => {
        let {name, value} = e.target;

        if (name === 'price' || name === 'quantity' || name === 'group') {
            value = Number(value);
        }

        setDataToChange(state => ({
            ...state,
            [name]: value,
        }));
    };

    const changeProductDataSubmitHandler = (e) => {
        e.preventDefault();
        patchProductById(id, dataToChange).then(setProductData);
    }

    return (
        <form onSubmit={changeProductDataSubmitHandler}>
            <label htmlFor="name">
                Име:
                <input type="text" name="name"
                       value={dataToChange.name || productData.name}
                       onChange={changeHandler}/>
            </label>
            <label htmlFor="code">
                Код:
                <input type="text" name="code"
                       value={dataToChange.code || productData.code}
                       onChange={changeHandler}/>
            </label>
            <label htmlFor="barcode">
                Баркод:
                <input type="text" name="name"
                       value={dataToChange.barcode || productData.barcode}
                       onChange={changeHandler}/>
            </label>
            <label htmlFor="price">
                Цена:
                <input type="number" step="0.01" name="price"
                       value={dataToChange.price || productData.price}
                       onChange={changeHandler}/>
            </label>
            <label htmlFor="quantity">
                Количество:
                <input type="number" step="1" name="quantity"
                       value={dataToChange.quantity || productData.quantity}
                       onChange={changeHandler}/>
            </label>
            <label htmlFor="is_active">
                Активен:
                <input type="checkbox" name="is_active"
                       checked={dataToChange.is_active || productData.is_active}
                       onChange={changeHandler}/>
            </label>

            <button>Промени</button>
            <button type="button" onClick={closeShowDetailClickHandler}>Отказ</button>
        </form>
    );
}