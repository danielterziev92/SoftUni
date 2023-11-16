import {useEffect, useState} from "react";
import {getAllGroups, patchProductById} from "../../services/productService.js";

import style from './ProductDetailBaseInfo.module.css';
import Spinner from "../spinner/Spinner.jsx";
import useEscapeKeyHook from "../../hooks/useEscapeKeyHook.jsx";
import ProductForm from "../product-form/ProductForm.jsx";

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

    const changeProductDataSubmitHandler = (e) => {
        e.preventDefault();
        patchProductById(id, dataToChange).then(data => setProductData(data));
    }

    const messageBoxBodyDeleteProduct = () => {
        return (
            <div>
                <span>Сигурни ли сте че желаете да изтриете </span>
                <span className={style.productTitle}>{productData.name}</span> ?
            </div>
        );
    };

    const deleteProductClickHandler = () => {
        setMessageModalData(state => ({
            ...state,
            showModal: true,
            title: 'Изтриване на продукт',
            message: messageBoxBodyDeleteProduct(),
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

    useEscapeKeyHook(closeShowDetailClickHandler);

    useEffect(() => {
        setDataLoaded(true);
    }, [groups]);


    return (
        <>
            {!setDataLoaded && <Spinner/>}
            {setDataLoaded &&
                <ProductForm
                    productData={productData}
                    submitHandler={changeProductDataSubmitHandler}
                    removeProduct={true}
                    removeProductHandler={deleteProductClickHandler}
                    closeModalHandler={closeMessageModal}
                />
            }
        </>
    );
}