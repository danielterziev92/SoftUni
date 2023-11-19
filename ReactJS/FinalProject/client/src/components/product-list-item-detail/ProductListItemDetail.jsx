import style from './ProductListItemDetail.module.css';
import {useContext, useState} from "react";
import Spinner from "../spinner/Spinner.jsx";
import {ProductsContext} from "../../contexts/ProductsContext.js";
import ProductFormUpdate from "../product-form-update/ProductFormUpdate.jsx";

const initialMessageModalData = {
    showModal: false,
    title: '',
    message: '',
    successButtonMessage: '',
    errorButtonMessage: '',
    successButtonHandler: null,
    errorButtonHandler: null,
}


export default function ProductListItemDetail({id, setShowDetail}) {
    const {updateAllProduct} = useContext(ProductsContext)
    const [isSpinnerShow, setIsSpinnerShow] = useState(true);

    return (
        <div className={style.detail}>
            {isSpinnerShow && <Spinner/>}
            {!isSpinnerShow &&
                <ProductFormUpdate/>
            }
        </div>
    );
}