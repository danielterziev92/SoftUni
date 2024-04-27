import {useEffect, useReducer, useRef, useState} from "react";

import styleForm from './ProductForm.module.css';

import useEscapeKey from "../../hooks/useEscapeKey.js";
import useLoadAllGroups from "../../hooks/useLoadAllGroups.js";
import ProductFormBaseInfo from "../product-form-base-info/ProductFormBaseInfo.jsx";
import MessageBoxModal from "../message-box-modal/MessageBoxModal.jsx";

export const initialProductData = {
    name: '',
    code: '',
    barcode: '',
    quantity: 0,
    price: 0,
    group: 0,
    is_active: true,
    groups: [],
    selectedGroup: 0,
    user: 0,
};

const productDataReducer = (state, action) => {
    switch (action.type) {
        case 'updateState':
            return {...state, ...action.payload};
        case 'updateByKey':
            return {...state, [action.key]: action.value};
        default:
            return state;
    }
}

export default function ProductForm() {
    const [productData, dispatch] = useReducer(productDataReducer, initialProductData);
    const [isDeleteModalShow, setIsDeleteModalShow] = useState(false);
    const isFirstRender = useRef(true);

    const groups = useLoadAllGroups();

    useEffect(() => {
        // if (product.id === undefined) {
        //     return;
        // }
        //
        // getProductById(product.id)
        //     .then(updateProductState)
        //     .catch(e => console.log(e));
    }, []);

    // useEffect(() => {
    //     if (isFirstRender.current) {
    //         isFirstRender.current = false;
    //         return;
    //     }
    //
    // updateProductState(product);
    // updateProductChanged(false);
    // }, [productChanged]);

    useEffect(() => {
        updateProductDataByKey('selectedGroup', productData.group);
    }, [productData.group]);

    useEffect(() => {
        updateProductDataByKey('groups', groups);
    }, [groups]);

    const updateProductState = (newState) => {
        dispatch({type: 'updateState', payload: newState});
    }

    const updateProductDataByKey = (key, newValue) => {
        dispatch({type: 'updateByKey', key: key, value: newValue});
    }

    const deleteModalBody = (
        <div className={styleForm.deleteModalBody}>
            {/*<p>Сигурни ли сте, че искате да изтриете <span className={styleForm.productTitle}>{product.name}</span></p>*/}
            <p className={styleForm.attention}>Този процес е необратим.</p>
        </div>
    );

    const hideDeleteModalClickHandler = () => setIsDeleteModalShow(false);

    const showModalClickHandler = () => setIsDeleteModalShow(true);

    // useEscapeKey(isDeleteModalShow ? hideDeleteModalClickHandler : closeModalHandler);


    return (
        <>
            {isDeleteModalShow &&
                <MessageBoxModal
                    title={'Изтриване на продукт'}
                    body={deleteModalBody}
                    closeModalHanlder={hideDeleteModalClickHandler}
                    errorButtonMessage={'Отказ'}
                    errorButtonHandler={hideDeleteModalClickHandler}
                    successButtonMessage={'Да'}
                    successButtonHandler={() => {
                        deleteProductClickHandler(productData)
                    }}
                />
            }
            <ProductFormBaseInfo showModalClickHandler={showModalClickHandler}/>
        </>
    );
}