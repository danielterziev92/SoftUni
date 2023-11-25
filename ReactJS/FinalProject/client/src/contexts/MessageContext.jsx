import {createContext, useState} from "react";

const initialState = {
    message: '',
    status: '',
}

export const MessageContext = createContext(initialState);
MessageContext.displayName = 'MessageContext';

export default function MessageProvider({children}) {
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

    const messageContextValues = {
        message,
        updateMessage,
        updateStatus,
        isMessageBoxShow,
        closeMessageBoxDialog,
    }

    return (
        <MessageContext.Provider value={{...messageContextValues}}>
            {children}
        </MessageContext.Provider>
    );
}