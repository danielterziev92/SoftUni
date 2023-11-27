import {useContext} from "react";

import style from './MessageBoxDialog.module.css';

import {MessageContext} from "../../contexts/MessageContext.jsx";

import useAutoDisappear from "../../hooks/useAutoDisappear.js";

const statusIcons = {
    success: <i className="fas fa-check-circle"></i>,
    error: <i className="fas fa-exclamation-circle"></i>,
    warning: <i className="fas fa-exclamation-triangle"></i>,
    info: <i className="fas fa-info-circle"></i>,
}
export default function MessageBoxDialog() {
    const {message: {text, status}, closeMessageBoxDialog} = useContext(MessageContext);

    const {isVisible} = useAutoDisappear(5000, text);

    return (
        <>
            {isVisible && (
                <div className={`${style.MessageBox}`}>
                    <div>
                        <div className={style[status]}>
                            <div className={`${style.icon} ${style[status]}`}>
                                {statusIcons[status]}
                            </div>
                            <div>
                                {text}
                            </div>
                            <i className="fas fa-times-circle" onClick={closeMessageBoxDialog}></i>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}