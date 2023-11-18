import {createContext} from "react";

const initialState = {
    message: '',
    status: '',
}

export const MessageContext = createContext(initialState);