import style from "./ProductDetailNavigationTabs.module.css";
import {useContext, useEffect} from "react";
import {SingleProductContext} from "../../contexts/SingleProductContext.js";
import {FormContext} from "../../contexts/FormContext.js";

export default function ProductListNavigationTabs({closeFormDialogSet}) {
    const {activeTab, updateActiveTab, closeFormDialog} = useContext(SingleProductContext);
    const {haveButtons, closeModalHandler} = useContext(FormContext);

    const changeActiveTabHandler = (e) => {
        updateActiveTab(e.target.id);
    }

    const navigationTabs = [
        {
            liName: 'base-info',
            onClickHandler: changeActiveTabHandler,
            textContent: 'Основни данни',
        },
        {
            liName: 'addit-info',
            onClickHandler: changeActiveTabHandler,
            textContent: 'Допълнителни данни',
        },
        {
            liName: 'barcodes',
            onClickHandler: changeActiveTabHandler,
            textContent: 'Баркодове',
        },
    ]

    return (
        <div className={style.navigationTabs}>
            <ul>
                {navigationTabs.map((tab, index) => (
                    <li key={index} id={tab.liName} onClick={tab.onClickHandler}
                        className={activeTab === tab.liName ? style.active : ''}>
                        {tab.textContent}
                    </li>
                ))}
            </ul>
            {haveButtons &&
                <div className={style.closeButton} onClick={closeModalHandler}>
                    <i className="fa-regular fa-circle-xmark"></i>
                </div>
            }
        </div>
    );
}