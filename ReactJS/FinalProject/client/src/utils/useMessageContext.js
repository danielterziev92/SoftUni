import {useContext} from "react";
import {MessageContext} from "../contexts/MessageContext.jsx";

export default function useMessageContext() {
    return useContext(MessageContext);
}