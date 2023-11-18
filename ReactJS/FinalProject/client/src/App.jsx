import {Route, Routes} from "react-router-dom";

import Aside from "./components/aside/Aside.jsx";
import Products from "./components/products/Products.jsx";

import mainStyle from "./components/Main.module.css";
import {MessageContext} from "./contexts/MessageContext.js";
import {useState} from "react";

export default function App() {
    const [message, setMessage] = useState({message: '', status: ''})

    const updateMessage = (newMessage) => setMessage(state => ({...state, message: newMessage}));

    const updateStatus = (newStatus) => setMessage(state => ({...state, status: newStatus}));

    return (
        <MessageContext.Provider value={{message, updateMessage, updateStatus}}>
            <Aside/>
            <main className={mainStyle.Main}>
                <Routes>
                    <Route path="/products/*" element={<Products/>}/>
                </Routes>
            </main>
        </MessageContext.Provider>
    );
}