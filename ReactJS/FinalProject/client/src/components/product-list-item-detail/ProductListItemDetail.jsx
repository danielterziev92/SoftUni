import style from './ProductListItemDetail.module.css';
import {useEffect, useState} from "react";
import Spinner from "../spinner/Spinner.jsx";
import {getProductById} from "../../services/productService.js";


const initialProductData = {
    id: 0,
    code: '',
    name: '',
    barcode: '',
    price: 0,
    quantity: 0,
    group: 0,
    group_name: '',
    is_active: false,
}

export default function ProductListItemDetail({id, setShowDetail}) {

    const [productData, setProductData] = useState(initialProductData);
    const [isSpinnerShow, setIsSpinnerShow] = useState(true);

    const changeHandler = (e) => {
        let {name, value} = e.target;

        if (name === 'price' || name === 'quantity' || name === 'group') {
            value = Number(value);
        }

        setProductData(state => ({
            ...state,
            [name]: value,
        }));
    };

    const changeProductDataSubmitHandler = (e) => {
        e.preventDefault();
        console.log('form was submitted');
    }

    const updateProductDataClickHandler = () => {

    }

    const closeShowDetailClickHandler = () => {
        setShowDetail(false);
    }

    useEffect(() => {
        getProductById(id).then(data => {
            setProductData(data);
            setIsSpinnerShow(false);
        }).catch(e => {
            console.log(e);
        });
    }, []);

    return (
        <div className={style.detail}>
            {isSpinnerShow && <Spinner/>}
            {!isSpinnerShow &&
                <form onSubmit={changeProductDataSubmitHandler}>
                    <label htmlFor="name">
                        Име:
                        <input type="text" name="name" value={productData.name} onChange={changeHandler}/>
                    </label>
                    <label htmlFor="code">
                        Код:
                        <input type="text" name="code" value={productData.code} onChange={changeHandler}/>
                    </label>
                    <label htmlFor="barcode">
                        Баркод:
                        <input type="text" name="name" value={productData.barcode} onChange={changeHandler}/>
                    </label>
                    <label htmlFor="price">
                        Цена:
                        <input type="number" name="price" value={productData.price} onChange={changeHandler}/>
                    </label>
                    <label htmlFor="quantity">
                        Количество:
                        <input type="number" name="quantity" value={productData.quantity} onChange={changeHandler}/>
                    </label>
                    <label htmlFor="is_active">
                        Активен:
                        <input type="checkbox" name="is_active" checked={productData.is_active}
                               onChange={changeHandler}/>
                    </label>

                    <button onClick={updateProductDataClickHandler}>Промени</button>
                    <button type="button" onClick={closeShowDetailClickHandler}>Отказ</button>
                </form>
            }
        </div>
    );
}

