import {useContext} from "react";

import style from './MessageBoxDialog.module.css';

import {MessageContext} from "../../contexts/MessageContext.js";

export default function MessageBoxDialog() {
    const {message: {text, status}} = useContext(MessageContext);

    return (
        <div className={style.MessageBox}>
            {text}
        </div>
    );
}