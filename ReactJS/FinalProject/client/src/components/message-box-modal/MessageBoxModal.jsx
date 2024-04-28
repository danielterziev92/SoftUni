import {useLayoutEffect, useState} from "react";

import style from './MessageBoxModal.module.css';
import './MessageBoxModel.css';
import mainStyle from '../../components/Main.module.css';

import useEscapeKey from "../../hooks/useEscapeKey.js";

export default function MessageBoxModal({contentStyleSize, title, body, footer, closeModalHanlder,}) {
    const [topScrolledY, setTopScrolledY] = useState(0);

    useEscapeKey(closeModalHanlder);

    useLayoutEffect(() => {
        const mainElement = document.querySelector(`.${mainStyle.MainContent}`);
        if (mainElement) {
            mainElement.classList.add('overflow-hidden');
        }

        setTopScrolledY(mainElement.scrollTop);

        return () => {
            if (mainElement) {
                mainElement.classList.remove('overflow-hidden');
            }
        };
    }, []);

    return (
        <div className={style.overlay} style={{top: topScrolledY}}>
            <div className={style.ModalDialog}>
                <div className={`${style.Content} ${contentStyleSize}`}>
                    <div className={style.Header}>
                        <span>{title}</span>
                        <i className={`fa-regular fa-circle-xmark ${style.CloseButton}`}
                           onClick={closeModalHanlder}
                        ></i>
                    </div>
                    <div className={style.Body}>{body}</div>
                    <div className={style.Footer}>{footer()}</div>
                </div>
            </div>
        </div>
    );
}