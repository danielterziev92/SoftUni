import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {toast, Toaster} from 'react-hot-toast';

import style from './MessageBoxDialog.module.css';

import useAutoDisappear from "../../hooks/useAutoDisappear.js";


const statusIcons = {
    success: <i className="fas fa-check-circle"></i>,
    error: <i className="fas fa-exclamation-circle"></i>,
    warning: <i className="fas fa-exclamation-triangle"></i>,
    info: <i className="fas fa-info-circle"></i>,
}

export default function MessageBoxDialog() {
    const allMessages = useSelector(state => state.notification.messages);

    const [showMessageDialog, setShowMessageDialog] = useState(false);

    const notify = () => toast.success('Here is your toast.', {duration: 4000,});

    // const {isVisible} = useAutoDisappear(5000, text);
    useEffect(() => {
        allMessages.forEach(messageData => {
            const {message, status} = messageData;
            const statusStyle = getStatusStyle(status);

            // Show toast based on message status
            // switch (status) {
            //     case 'success':
            //         toast.success(message, {duration: 5000, icon: <SuccessIcon/>});
            //         break;
            //     case 'warning':
            //         toast(message, {duration: 5000, icon: <WarningIcon/>});
            //         break;
            //     case 'error':
            //         toast.error(message, {duration: 5000, icon: <ErrorIcon/>});
            //         break;
            //     case 'info':
            //         toast(message, {duration: 5000, icon: <InfoIcon/>});
            //         break;
            //     default:
            //         toast(message);
            // }
        });
    }, [allMessages]);

    function getStatusStyle(statusCode) {
        if (statusCode >= 200 && statusCode < 300) return 'success';
        if (statusCode >= 300 && statusCode < 400) return 'warning';
        if (statusCode >= 400 && statusCode < 500) return 'error';
        if (statusCode >= 500 && statusCode < 600) return 'info';
    }

    return (
        <>
            <div>
                <button onClick={notify}>Make me a toast</button>
            </div>

        </>

        // <>
        //
        // <div className={`${style.MessageBox}`}>
        // <div>
        // <Toaster/>
        // {/*{allMessages.map((messageData, index) => {*/}
        // {/*    let {message, status} = messageData;*/}
        // {/*    status = getStatusStyle(status);*/}
        // {/*    return (*/}
        // {/*        <div className={style[status]} key={index}>*/}
        // {/*            <div className={`${style.icon} ${style[status]}}`}>*/}
        // {/*                {statusIcons[status]}*/}
        // {/*            </div>*/}
        // {/*            <div>*/}
        // {/*                {message}*/}
        // {/*            </div>*/}
        // {/*            <i className="fas fa-times-circle" onClick={() => setShowMessageDialog(false)}></i>*/}
        // {/*        </div>*/}
        // {/*    );*/}
        // {/*})}*/}
        // </div>
        // </div>
        // </>
    );
}