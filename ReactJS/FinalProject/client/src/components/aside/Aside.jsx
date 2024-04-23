import {useContext} from "react";
import {useSelector} from "react-redux";

import clipboard from 'clipboard-copy';

import asideStyle from './Aside.module.css';


// import {selectUser} from "../../features/user/userSlice.js";

import NavigationGroups from "../navigation-groups/NavigationGroups.jsx";

import {sections} from "./asideSections.js";
import {MessageContext} from "../../contexts/MessageContext.jsx";


export default function Aside() {
    const user = useSelector(state => state.user.data);
    const {updateMessage, updateStatus} = useContext(MessageContext);


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
                    <img src={user.picture_url} alt="User Prifile Picture"/>
                </figure>
                {/*<p>{userDetails.first_name} {userDetails.last_name}</p>*/}
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