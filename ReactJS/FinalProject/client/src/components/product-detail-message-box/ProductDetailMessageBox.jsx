import style from './ProductDetailMessageBox.module.css';

export default function ProductDetailMessageBox({
                                                    showModal,
                                                    title,
                                                    message,
                                                    setMessageModalData,
                                                }) {

    const closeModalClickHandler = () => {
        setMessageModalData(state => ({
            ...state,
            showModal: false,
        }))
    }

    return (
        <div className={style.overlay}>
            <div>
                <i className={`fas fa-times-circle ${style.close}`} onClick={closeModalClickHandler}></i>
                <div className={style.modal}>
                    <div className={style.title}>{title}</div>
                    <div className={style.body}>{message}</div>
                    <div className={style.buttons}>
                        <button className={style.success}>Да</button>
                        <button className={style.error}>Не</button>
                    </div>
                </div>
            </div>
        </div>
    );
}