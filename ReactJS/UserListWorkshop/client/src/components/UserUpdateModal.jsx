import {useEffect, useState} from "react";

export const UserUpdateModal = ({
                                    userDetail,
                                    clickUpdateUserInfoHandler,
                                    closeModal,
                                }) => {
    const [firstName, setFirstName] = useState(userDetail.firstName);
    const [lastName, setLastName] = useState(userDetail.lastName);
    const [email, setEmail] = useState(userDetail.email);
    const [imageUrl, setImageUrl] = useState(userDetail.imageUrl);
    const [phoneNumber, setPhoneNumber] = useState(userDetail.phoneNumber);
    const [country, setCountry] = useState(userDetail.address.country);
    const [city, setCity] = useState(userDetail.address.city);
    const [street, setStreet] = useState(userDetail.address.street);
    const [streetNumber, setStreetNumber] = useState(userDetail.address.streetNumber);

    const changeFirstNameHandler = (e) => setFirstName(e.currentTarget.value);
    const changeLastNameHandler = (e) => setLastName(e.currentTarget.value);
    const changeEmailHandler = (e) => setEmail(e.currentTarget.value);
    const changeImageUrlHandler = (e) => setImageUrl(e.currentTarget.value);
    const changePhoneNumberHandler = (e) => setPhoneNumber(e.currentTarget.value);
    const changeCountryHandler = (e) => setCountry(e.currentTarget.value);
    const changeCityHandler = (e) => setCity(e.currentTarget.value);
    const changeStreetHandler = (e) => setStreet(e.currentTarget.value);
    const changeStreetNumberHandler = (e) => setStreetNumber(e.currentTarget.value);


    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleEscKey);

        return () => {
            window.removeEventListener('keydown', handleEscKey)
        }
    }, [closeModal]);

    return (
        <div className="overlay">
            <div className="backdrop" onClick={closeModal}></div>
            <div className="modal">
                <div className="user-container">
                    <header className="headers">
                        <h2>Edit User</h2>
                        <button className="btn close" onClick={closeModal}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                 className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 320 512">
                                <path fill="currentColor"
                                      d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <form onSubmit={clickUpdateUserInfoHandler}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input id="firstName" name="firstName" type="text" value={firstName}
                                           onChange={changeFirstNameHandler}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input id="lastName" name="lastName" type="text" value={lastName}
                                           onChange={changeLastNameHandler}/>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-envelope"></i></span>
                                    <input id="email" name="email" type="text" value={email}
                                           onChange={changeEmailHandler}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-phone"></i></span>
                                    <input id="phoneNumber" name="phoneNumber" type="text" value={phoneNumber}
                                           onChange={changePhoneNumberHandler}/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group long-line">
                            <label htmlFor="imageUrl">Image Url</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-image"></i></span>
                                <input id="imageUrl" name="imageUrl" type="text" value={imageUrl}
                                       onChange={changeImageUrlHandler}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input id="country" name="country" type="text" value={country}
                                           onChange={changeCountryHandler}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-city"></i></span>
                                    <input id="city" name="city" type="text" value={city} onChange={changeCityHandler}/>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input id="street" name="street" type="text" defaultValue={street}
                                           onChange={changeStreetHandler}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="streetNumber">Street number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-house-chimney"></i></span>
                                    <input id="streetNumber" name="streetNumber" type="text" value={streetNumber}
                                           onChange={changeStreetNumberHandler}/>
                                </div>
                            </div>
                        </div>
                        <div id="form-actions">
                            <button id="action-save" className="btn" type="submit">Save</button>
                            <button id="action-cancel" className="btn" type="button" defaultValue={closeModal}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};