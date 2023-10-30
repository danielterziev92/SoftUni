import clipboard from 'clipboard-copy';
import VerticalNavigationGroupItem from "./VerticalNavigationGroupItem.jsx";
import VerticalNavigationItem from "./VerticalNavigationItem.jsx";

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
                <li className="logo"><img src="../../src/assets/logo.png" alt="Logo"/></li>
                <li className="notification"><i className="fa-solid fa-bell"></i><span>3</span></li>
                <li className="profile"><i className="fa-solid fa-user"></i></li>
            </ul>
            <div className="profile">
                <figure>
                    <img
                        src="../../src/assets/close-up-confident-male-employee-white-collar-shirt-smiling-camera-standing-self-assured-against-studio-background.jpg"
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
            <VerticalNavigationGroupItem name="Табло"
                                         items={[
                                             {
                                                 itemTitle: "Контакти",
                                                 itemHREF: "#",
                                                 itemIClassName: "fa-solid fa-address-book"
                                             },
                                             {
                                                 itemTitle: "Чат",
                                                 itemHREF: "#",
                                                 itemIClassName: "fa-solid fa-comments"
                                             },
                                             {
                                                 itemTitle: "Задачи",
                                                 itemHREF: "#",
                                                 itemIClassName: "fa-regular fa-calendar-days"
                                             },
                                             {
                                                 itemTitle: "Профил",
                                                 itemHREF: "#",
                                                 itemIClassName: "fa-regular fa-calendar-days"
                                             },
                                         ]}/>

        </aside>
    );
}