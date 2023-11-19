import Spinner from "../spinner/Spinner.jsx";
import {useContext, useEffect, useState} from "react";
import style from "./ProductUpdateForm.module.css";
import ProductDetailMessageBox from "../product-detail-message-box/ProductDetailMessageBox.jsx";
import ProductListNavigationTabs from "../product-detail-navigation-tabs/ProductDetailNavigationTabs.jsx";
import {ProductsContext} from "../../contexts/ProductsContext.js";
import {getProductById} from "../../services/productService.js";
import OldProductForm from "../product-form/oldProductForm.jsx";


export default function ProductUpdateForm() {
    const {allProducts, updateAllProduct} = useContext(ProductsContext);
    const [productData, setProductData] = useState({});
    const [isSpinnerShow, setIsSpinnerShow] = useState(true);


    useEffect(() => {
        updateAllProduct(allProducts.map(item => item.id === productData.id ? productData : item));
    }, [productData]);

    useEffect(() => {
        getProductById(id).then(data => {
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
                <>
                    <ProductDetailMessageBox/>
                    <OldProductForm/>
                    {}
                </>
            }
        </div>
    );
}