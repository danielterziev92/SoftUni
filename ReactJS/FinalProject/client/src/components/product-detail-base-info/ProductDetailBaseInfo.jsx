import {useEffect, useState} from "react";
import {getAllGroups, updateProductById} from "../../services/productService.js";

import style from './ProductDetailBaseInfo.module.css';

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

    const [dataToChange, setDataToChange] = useState(initialFilledData);

    useEffect(() => {
        setDataToChange(state => ({
            ...state,
            ...productData,
            selectedGroup: productData.group
        }));
        getAllGroups().then(data => sortGroup(data));
    }, []);

    const changeProductDataSubmitHandler = (e) => {
        e.preventDefault();

        const newData = {...dataToChange, group: dataToChange.selectedGroup};
        delete newData.selectedGroup;
        delete newData.groups;
        updateProductById(id, newData).then(data => setProductData(data));
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

        setDataToChange(state => ({
            ...state,
            groups: result,
        }));

    };


    return (
        <></>
    );
}