import Spinner from "../spinner/Spinner.jsx";
import {useContext, useEffect, useState} from "react";
import style from "./ProductFormUpdate.module.css";
import {ProductsContext} from "../../contexts/ProductsContext.js";
import {getProductById} from "../../services/productService.js";
import ProductForm from "../product-form/ProductForm.jsx";


export default function ProductFormUpdate({productId}) {
    const {allProducts, updateAllProduct} = useContext(ProductsContext);
    const [productData, setProductData] = useState({});
    const [isSpinnerShow, setIsSpinnerShow] = useState(true);


    useEffect(() => {
        updateAllProduct(allProducts.map(item => item.id === productData.id ? productData : item));
    }, [productData]);

    useEffect(() => {
        getProductById(productId).then(data => {
            setProductData(data);
            setIsSpinnerShow(false);
        }).catch(e => console.log(e));
    }, []);

    const closeDetailClickHandler = () => setIsSpinnerShow(false);
    const updateActiveTab = (value) => setActiveTab(value);

    const removeProduct = () => {
        console.log('delete product')
        // deleteProductById(id).then(setProductRemoveMessage);
    }


    return (
        <div className={style.detail}>
            {isSpinnerShow && <Spinner/>}
            {!isSpinnerShow &&
                <ProductForm
                    productId={productId}
                    formRef={null}
                    closeModalHandler={null}
                />
            }
        </div>
    );
}