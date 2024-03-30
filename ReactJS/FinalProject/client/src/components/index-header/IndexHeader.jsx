import {useEffect, useState} from "react";

import style from './IndexHeader.module.css'

export default function IndexHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('+359888123456')
    const [email, setEmail] = useState('support@website.com')

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Define a threshold to determine when to hide the element
            const threshold = 100; // Adjust as needed

            if (scrollPosition > threshold) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {!isScrolled && (
                <div className={style.topHeader}>
                    <div className={style.phoneNumberHeader}>
                        <i className="fa-solid fa-phone"></i>
                        <a href={"tel:" + phoneNumber}>{phoneNumber}</a>
                    </div>
                    <div className={style.emailsHeader}>
                        <i className="fa-solid fa-envelope"></i>
                        <a href={"email:" + email}>{email}</a>
                    </div>
                </div>
            )}
            <div className={style.mainHeader}>

            </div>
        </>
    );
}