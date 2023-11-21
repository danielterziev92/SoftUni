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
                    <div>
                        {text}
                        <i className="fas fa-times" onClick={closeMessageBoxDialog}></i>
                    </div>
                </div>
            }
        </>
    );
}