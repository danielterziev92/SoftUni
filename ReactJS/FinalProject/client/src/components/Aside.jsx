import clipboard from 'clipboard-copy';
import NavigationGroups from "./NavigationGroups.jsx";
import {Link} from "react-router-dom";
import asideStyle from './Aside.module.css';

const sections = [
    {
        name: 'Табло',
        listItems: [
            {
                itemTitle: 'Продукти',
                itemHREF: '/products',
                itemIClassName: 'fa-solid fa-boxes-stacked',
            },
            {
                itemTitle: 'Продажба',
                itemHREF: '/sale',
                itemIClassName: 'fa-solid fa-cash-register',
            },
            {
                itemTitle: 'Продажба',
                itemHREF: '/sale',
                itemIClassName: 'fa-solid fa-truck-medical',
            }
            // {
            //     itemTitle: "Чат",
            //     itemHREF: "#",
            //     itemIClassName: "fa-solid fa-comments"
            // },
            // {
            //     itemTitle: "Задачи",
            //     itemHREF: "#",
            //     itemIClassName: "fa-regular fa-calendar-days"
            // },
            // {
            //     itemTitle: "Профил",
            //     itemHREF: "#",
            //     itemIClassName: "fa-regular fa-calendar-days"
            // },
        ]
    },
]

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
                        <img src="../assets/logo.png" alt="Logo"/>
                    </Link>
                </li>
                <li className={asideStyle.notification}><i className="fa-solid fa-bell"></i><span>3</span></li>
                <li className={asideStyle.profile}><i className="fa-solid fa-user"></i></li>
            </ul>
            <div className={asideStyle.profile}>
                <figure>
                    <img
                        src="../assets/close-up-confident-male-employee-white-collar-shirt-smiling-camera-standing-self-assured-against-studio-background.jpg"
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