import {useContext} from "react";

import style from './MessageBoxDialog.module.css';

import {MessageContext} from "../../contexts/MessageContext.js";
import useAutoDisappear from "../../hooks/useAutoDisappear.js";


export default function MessageBoxDialog() {
    const isVisible = useAutoDisappear(5000);
    const {message: {text, status}, closeMessageBoxDialog} = useContext(MessageContext);


    return (
        <>
            {isVisible &&
                <div className={`${style.MessageBox} ${style[status]}`}>
                    <div className={`${style.icon} ${style[status]}`}>
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <div>
                        {text}
                        <i className="fas fa-times-circle" onClick={closeMessageBoxDialog}></i>
                    </div>
                </div>
            }
        </>
    );
}