import clipboard from 'clipboard-copy';
import NavigationGroups from "./NavigationGroups.jsx";
import {Link} from "react-router-dom";

const sections = [
    {
        name: 'Табло',
        listItems: [
            {
                itemTitle: "Продукти",
                itemHREF: "/products",
                itemIClassName: "fa-solid fa-box-open"
            },
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
    const profileEmail = 'brian.hughes@company.com'

    const handleEmail = async () => {
        try {
            await clipboard(profileEmail);
            alert(`${profileEmail} is copied to clipboard`);
        } catch (error) {
            console.log('Copied failed:', error);
            alert('Copy failed. Please try again.');
        }
    }

    return (
        <aside>
            <ul className="navigation-bar">
                <li className="logo">
                    <Link to={"/"}>
                        <img src="../assets/logo.png" alt="Logo"/>
                    </Link>
                </li>
                <li className="notification"><i className="fa-solid fa-bell"></i><span>3</span></li>
                <li className="profile"><i className="fa-solid fa-user"></i></li>
            </ul>
            <div className="profile">
                <figure>
                    <img
                        src="../assets/close-up-confident-male-employee-white-collar-shirt-smiling-camera-standing-self-assured-against-studio-background.jpg"
                        alt="User Prifile Picture"/>
                </figure>
                <p>Brian Hughes</p>
                <div className="profile-email">
                    {profileEmail}
                    <span onClick={handleEmail}>
                        <i className="fa-solid fa-copy">
                            <span className="tooltip">Copy email</span>
                        </i>
                    </span>
                </div>
            </div>
            {sections.map((section, index) =>
                <NavigationGroups key={index} {...section}/>)}
        </aside>
    );
}