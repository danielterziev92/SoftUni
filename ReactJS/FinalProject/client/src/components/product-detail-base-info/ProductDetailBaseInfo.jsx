import {useEffect, useState} from "react";
import {getAllGroups, patchProductById} from "../../services/productService.js";

import style from './ProductDetailBaseInfo.module.css';
import ProductDetailBaseInfoGroups from "../product-detail-base-info-groups/ProductDetailBaseInfoGroups.jsx";
import Spinner from "../spinner/Spinner.jsx";

const initialData = {
    name: '',
    code: '',
    barcode: '',
    price: 0,
    quantity: 0,
    is_active: false,
    group: 0,
    group_name: '',
}


export default function ProductDetailBaseInfo({
                                                  id,
                                                  productData,
                                                  setProductData,
                                                  closeShowDetailClickHandler,
                                                  setIsSpinnerShow,
                                                  successButtonHandler,
                                                  errorButtonHandler,
                                                  setMessageModalData,
                                                  removeProduct,
                                                  closeMessageModal,
                                              }) {

    const [dataToChange, setDataToChange] = useState(initialData);
    const [groups, setGroups] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    const changeHandler = (e) => {
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

        setDataToChange(state => ({
            ...state,
            [name]: value,
        }));
    };

    const changeProductDataSubmitHandler = (e) => {
        e.preventDefault();
        patchProductById(id, dataToChange).then(data => setProductData(data));
    }

    const deleteProductClickHandler = () => {
        setMessageModalData(state => ({
            ...state,
            showModal: true,
            title: 'Изтриване на продукт',
            message: `Сигурни ли сте че желаете да изтриете "${productData.name}" ?`,
            successButtonMessage: 'Да',
            errorButtonMessage: 'Не',
            successButtonHandler: removeProduct,
            errorButtonHandler: closeMessageModal,
        }));
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
        setDataToChange(productData)
        getAllGroups().then(data => setGroups(sortGroup(data)));
    }, []);

    useEffect(() => {
        setDataLoaded(true);
    }, [groups]);

    return (
        <>
            {!setDataLoaded && <Spinner/>}
            {setDataLoaded &&
                <form onSubmit={changeProductDataSubmitHandler} className={style.baseInfoForm}>
                    <div className={style.name}>
                        <label htmlFor="name">Име:</label>
                        <input id="name" type="text" name="name" value={dataToChange.name}
                               onChange={changeHandler}/>
                    </div>
                    <div className={style.code}>
                        <label htmlFor="code">Код:</label>
                        <input id="code" type="text" name="code" value={dataToChange.code}
                               onChange={changeHandler}/>
                    </div>
                    <div className={style.barcode}>
                        <label htmlFor="barcode">Баркод:</label>
                        <input id="barcode" type="text" name="name" value={dataToChange.barcode}
                               onChange={changeHandler}/>
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
                        <span>Групи:</span>
                        <ProductDetailBaseInfoGroups
                            items={groups}
                            changeHandler={changeHandler}
                            selectedId={dataToChange.group}
                        />
                    </div>
                    <div className={style.buttons}>
                        <button type="button" onClick={deleteProductClickHandler} className={style.delete}>
                            <i className="fa-solid fa-trash"></i> Изтрий
                        </button>
                        <button className={style.save}>
                            <i className="fa-solid fa-floppy-disk"></i> Запази
                        </button>
                        <button type="button" onClick={deleteProductClickHandler} className={style.cancel}>
                            <i className="fas fa-times-circle"></i> Отказ
                        </button>
                    </div>
                </form>
            }
        </>
    );
}