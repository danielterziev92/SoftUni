import style from './MessageBoxModal.module.css';
import {useEffect} from "react";
import useEscapeKeyHook from "../../hooks/useEscapeKeyHook.jsx";

export default function MessageBoxModal({
                                            showModal,
                                            title,
                                            message,
                                            successButtonMessage,
                                            errorButtonMessage,
                                            successButtonHandler,
                                            errorButtonHandler,
                                            setMessageModalData,
                                        }) {

    const closeModalClickHandler = () => {
        setMessageModalData(state => ({
            ...state,
            showModal: false,
        }))
    }

    const successButtonClickHandler = () => {
        successButtonHandler();
    }

    const errorButtonClickHandler = () => {
        errorButtonHandler();
    }

    useEscapeKeyHook(closeModalClickHandler);

    return (
        <div className={style.overlay}>
            <div>
                <i className={`fas fa-times-circle ${style.close}`} onClick={closeModalClickHandler}></i>
                <div className={style.modal}>
                    <div className={style.title}>{title}</div>
                    <div className={style.body}>{message}</div>
                    <div className={style.buttons}>
                        <button className={style.success} onClick={successButtonClickHandler}>
                            {successButtonMessage}
                        </button>
                        <button className={style.error} onClick={errorButtonClickHandler}>
                            {errorButtonMessage}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}