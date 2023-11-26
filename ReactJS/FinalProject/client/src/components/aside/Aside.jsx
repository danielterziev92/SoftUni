import clipboard from 'clipboard-copy';

import {Link} from "react-router-dom";

import NavigationGroups from "../navigation-groups/NavigationGroups.jsx";

import {sections} from "./asideSections.js";

import asideStyle from './Aside.module.css';
import {useContext} from "react";
import {MessageContext} from "../../contexts/MessageContext.jsx";
import {AuthenticationContext} from "../../contexts/AuthenticationContext.jsx";


export default function Aside() {
    const {user} = useContext(AuthenticationContext);
    const {updateMessage, updateStatus} = useContext(MessageContext);

    const userEmail = 'brian.hughes@company.com'

    const copyEmailOnClickHandler = async () => {
        try {
            await clipboard(user.email);
            updateMessage(`Имейл адрес:${user.email} беше копиран в клипборда`);
            updateStatus('success');
        } catch (error) {
            updateMessage('Грешка при копирането в клипборда');
            updateStatus('error');
        }
    }

    return (
        <aside className={asideStyle.Aside}>
            <div className={asideStyle.Logo}>
                <figure>
                    <img src="/public/logo.png" alt="Logo"/>
                </figure>
            </div>
            <div className={asideStyle.profile}>
                <figure>
                    <img
                        src="/public/close-up-confident-male-employee-white-collar-shirt-smiling-camera-standing-self-assured-against-studio-background.jpg"
                        alt="User Prifile Picture"/>
                </figure>
                <p>Brian Hughes</p>
                <div className={asideStyle.profileEmail}>
                    {user.email}
                    <span onClick={copyEmailOnClickHandler}>
                        <i className="fa-solid fa-copy">
                            <span className={asideStyle.tooltip}>Copy email</span>
                        </i>
                    </span>
                </div>
            </div>
            <div className={asideStyle.verticalNavGroupItems}>
                {sections.map((section, index) =>
                    <NavigationGroups key={index} {...section}/>)
                }
            </div>
        </aside>
    );
}