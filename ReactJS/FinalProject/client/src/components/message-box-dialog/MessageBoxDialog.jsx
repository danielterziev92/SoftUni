import {useContext} from "react";

import style from './MessageBoxDialog.module.css';

import {MessageContext} from "../../contexts/MessageContext.js";

import useAutoDisappear from "../../hooks/useAutoDisappear.js";

const statusIcons = {
    success: <i className="fas fa-check-circle"></i>,
    error: <i className="fas fa-exclamation-circle"></i>,
    warning: <i className="fas fa-exclamation-triangle"></i>,
    info: <i className="fas fa-info-circle"></i>,
}
export default function MessageBoxDialog() {
    const {message: {text, status}, closeMessageBoxDialog} = useContext(MessageContext);

    // const isVisible = useAutoDisappear(5000, text);

    const MessageBody = ({message, status}) => {
        return (
            <div className={style[status]}>
                <div className={`${style.icon} ${style[status]}`}>
                    {statusIcons[status]}
                </div>
                <div>
                    {message}
                </div>
                <i className="fas fa-times-circle" onClick={closeMessageBoxDialog}></i>
            </div>
        );
    };
    ``

    const ShowSingleMessage = ({message, status}) => {
        return (
            <div className={`${style.MessageBox} ${style[status]}`}>
                <MessageBody message={message} status={status}/>
            </div>
        );
    };

    const ShowMultipleMessages = ({messages, status}) => {
        return (
            <div className={`${style.MessageBox}`}>
                {messages.map((message, index) => message.length > 0 &&
                    <MessageBody key={index} message={message} status={status}/>)}
            </div>
        );
    }


    return (
        <>
            {
                typeof text === 'string'
                    ? <ShowSingleMessage message={text} status={status}/>
                    : <ShowMultipleMessages messages={text} status={status}/>
            }
        </>
    );
}