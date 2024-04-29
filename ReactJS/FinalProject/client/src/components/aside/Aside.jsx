import {useContext} from "react";

import clipboard from 'clipboard-copy';

import asideStyle from './Aside.module.css';

import NavigationGroups from "../navigation-groups/NavigationGroups.jsx";

import {sections} from "./asideSections.js";
import {MessageContext} from "../../contexts/MessageContext.jsx";


export default function Aside() {
    const {updateMessage, updateStatus} = useContext(MessageContext);


    const copyEmailOnClickHandler = async () => {
        try {
            await clipboard('');
            updateMessage(`Имейл адрес:${''} беше копиран в клипборда`);
            updateStatus('success');
        } catch (error) {
            updateMessage('Грешка при копирането в клипборда');
            updateStatus('error');
        }
    }

    return (
        <aside className={asideStyle.Aside}>

            <div className={asideStyle.profile}>
                {/*<p>{userDetails.first_name} {userDetails.last_name}</p>*/}
                {/*<div className={asideStyle.profileEmail}>*/}
                {/*    {user.email}*/}
                {/*    <span onClick={copyEmailOnClickHandler}>*/}
                {/*        <i className="fa-solid fa-copy">*/}
                {/*            <span className={asideStyle.tooltip}>Copy email</span>*/}
                {/*        </i>*/}
                {/*    </span>*/}
                {/*</div>*/}
            </div>
            <div className={asideStyle.verticalNavGroupItems}>
                {sections.map((section, index) =>
                    <NavigationGroups key={index} {...section}/>)
                }
            </div>
        </aside>
    );
}