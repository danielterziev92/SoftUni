import {useContext} from "react";

import style from './MessageBoxDialog.module.css';

import {MessageContext} from "../../contexts/MessageContext.js";

export default function MessageBoxDialog() {
    const {message: {text, status}, closeMessageBoxDialog} = useContext(MessageContext);

    return (
        <div className={`${style.MessageBox} ${style[status]}`}>
            <div>
                {text}
                <i className="fas fa-times" onClick={closeMessageBoxDialog}></i>
            </div>
        </div>
    );
}