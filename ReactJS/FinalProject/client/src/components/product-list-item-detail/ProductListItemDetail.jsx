import style from './ProductListItemDetail.module.css';
import {useEffect, useState} from "react";
import Spinner from "../spinner/Spinner.jsx";
import {getProductById} from "../../services/productService.js";

export default function ProductListItemDetail({id}) {

    const [productData, setProductData] = useState({});
    const [isSpinnerShow, setIsSpinnerShow] = useState(true);


    useEffect(() => {
        // setProductData()
        getProductById(id).then(setProductData);
    }, []);

    console.log(productData);

    return (
        <tr className={style.detail}>
            {isSpinnerShow && <Spinner/>}
            <form>

            </form>
        </tr>
    );
}