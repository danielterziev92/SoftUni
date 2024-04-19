import {useLayoutEffect} from "react";

import style from './MessageBoxModal.module.css';
import mainStyle from '../../components/Main.module.css';

import useEscapeKey from "../../hooks/useEscapeKey.js";

export default function MessageBoxModal({
                                            title,
                                            body,
                                            successButtonMessage,
                                            errorButtonMessage,
                                            successButtonHandler,
                                            errorButtonHandler,
                                            closeModalHanlder,
                                        }) {

    useEscapeKey(closeModalHanlder);

    useLayoutEffect(() => {
        const mainElement = document.querySelector(`.${mainStyle.MainContent}`);
        if (mainElement) {
            mainElement.classList.add('overflow-hidden');
        }

        return () => {
            if (mainElement) {
                mainElement.classList.remove('overflow-hidden');
            }
        };
    }, []);

    return (
        <div className={style.overlay}>
            <div>
                <i className={`fas fa-times-circle ${style.close}`} onClick={closeModalHanlder}></i>
                <div className={style.modal}>
                    <div className={style.title}>{title}</div>
                    <div className={style.body}>{body}</div>
                    <div className={style.buttons}>
                        <button className={style.success} onClick={successButtonHandler}>
                            {successButtonMessage}
                        </button>
                        <button className={style.error} onClick={errorButtonHandler}>
                            {errorButtonMessage}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}