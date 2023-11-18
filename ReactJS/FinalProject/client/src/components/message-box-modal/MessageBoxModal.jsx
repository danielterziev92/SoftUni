import style from './MessageBoxModal.module.css';
import useEscapeKeyHook from "../../hooks/useEscapeKeyHook.js";

export default function MessageBoxModal({
                                            title,
                                            message,
                                            successButtonMessage,
                                            errorButtonMessage,
                                            successButtonHandler,
                                            errorButtonHandler,
                                            closeModalHanlder,
                                        }) {

    const successButtonClickHandler = () => {
        successButtonHandler();
    }

    const errorButtonClickHandler = () => {
        errorButtonHandler();
    }

    useEscapeKeyHook(closeModalHanlder);

    return (
        <div className={style.overlay}>
            <div>
                <i className={`fas fa-times-circle ${style.close}`} onClick={closeModalHanlder}></i>
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