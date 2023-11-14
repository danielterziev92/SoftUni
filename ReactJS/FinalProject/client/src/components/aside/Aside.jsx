import clipboard from 'clipboard-copy';

import {Link} from "react-router-dom";

import NavigationGroups from "../navigation-groups/NavigationGroups.jsx";

import {sections} from "./asideSections.js";

import asideStyle from './Aside.module.css';


export default function Aside() {
    const userEmail = 'brian.hughes@company.com'

    const handleEmail = async () => {
        try {
            await clipboard(userEmail);
            alert(`${userEmail} is copied to clipboard`);
        } catch (error) {
            alert('Copy failed. Please try again.');
        }
    }

    return (
        <aside className={asideStyle.Aside}>
            <ul className={asideStyle.navigationBar}>
                <li>
                    <Link to={"/"}>
                        <img src="/public/logo.png" alt="Logo"/>
                    </Link>
                </li>
                <li className={asideStyle.notification}><i className="fa-solid fa-bell"></i><span>3</span></li>
                <li className={asideStyle.profile}><i className="fa-solid fa-user"></i></li>
            </ul>
            <div className={asideStyle.profile}>
                <figure>
                    <img
                        src="/public/close-up-confident-male-employee-white-collar-shirt-smiling-camera-standing-self-assured-against-studio-background.jpg"
                        alt="User Prifile Picture"/>
                </figure>
                <p>Brian Hughes</p>
                <div className={asideStyle.profileEmail}>
                    {userEmail}
                    <span onClick={handleEmail}>
                        <i className="fa-solid fa-copy">
                            <span className={asideStyle.tooltip}>Copy email</span>
                        </i>
                    </span>
                </div>
            </div>
            {sections.map((section, index) =>
                <NavigationGroups key={index} {...section}/>)}
        </aside>
    );
}