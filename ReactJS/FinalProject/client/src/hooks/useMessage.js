import {useState} from "react";

export default function useMessage() {
    const [message, setMessage] = useState({text: '', status: ''});
    const [isMessageBoxShow, setIsMessageBoxShow] = useState(false);

    const updateMessage = (newMessage) => {
        setIsMessageBoxShow(true);
        setMessage(state => ({
            ...state,
            text: newMessage
        }));
    };

    const updateStatus = (newStatus) => {
        setMessage(state => ({
            ...state,
            status: newStatus
        }));
    };

    const closeMessageBoxDialog = () => setIsMessageBoxShow(false);


    return {
        message,
        isMessageBoxShow,
        updateMessage,
        updateStatus,
        closeMessageBoxDialog
    };
}