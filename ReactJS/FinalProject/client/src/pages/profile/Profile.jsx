import {useSelector} from "react-redux";

import axios from "axios";

import _ from 'lodash';

import HeaderContent from "../../components/header-content/HeaderContent.jsx";

import {selectUser} from "../../features/user/userSlice.js";
import {updateUserDataAction} from "../../features/user/userActions.js";
import {addMessage} from "../../features/message/messageSlice.js";

import style from './Profile.module.css';

import useForm from "../../hooks/useForm.js";

import objectManager from "../../utils/compareObjects.js";
import Urls from "../../utils/Urls.js";
import CookieManager from "../../utils/cookieManager.js";
import DragAndDropBox from "../../components/drag-and-drop-box/DragAndDropBox.jsx";

const FormKey = {
    Email: 'email',
    droppedImage: 'image',
    FirstName: 'first_name',
    LastName: 'last_name',
    Phone: 'phone',
    CompanyId: 'company_id',
    PictureUrl: 'picture_url'
}

const keyToCheck = ['id', 'email', 'first_name', 'last_name', 'phone', 'picture_url'];
const keyToSend = ['first_name', 'last_name', 'phone', 'picture_url', 'image'];

export default function Profile() {
    const user = useSelector(selectUser);

    const {formValue, updateFormValue, updateFormValueByKeyAndValue, changeDataHandler, onSubmitForm,} = useForm(
        {
            ...Object.fromEntries(Object.keys(FormKey)
                .map(key => [FormKey[key], key === 'droppedImage' ? [] : ''])),
            ...user
        }
        , updateUserDataOnSubmit
    );

    function updateDroppedImageHandler(image) {
        updateFormValueByKeyAndValue(FormKey.droppedImage, image);
    }

    async function updateUserDataOnSubmit(data) {
        try {
            const axiosConfig = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'X-CSRFToken': CookieManager.getCookie('csrftoken'),
                },
                withCredentials: true,
            };

            const {image, ...userData} = _.pick(data, keyToSend);

            const requestBody = new FormData();
            requestBody.append('userData', JSON.stringify(userData));
            requestBody.append('image', image.pop());

            await axios.put(Urls.user.update, requestBody, axiosConfig).then(response => {
                const {message, user_profile} = response.data;
                updateUserDataAction(user_profile);
                addMessage(message);
            })
        } catch (error) {
            addMessage(error);
        }
    }

    const resetUserEditOnClickHandler = () => {
        updateFormValue(user);
    }

    return (
        <>
            <HeaderContent title={'Профил'} navigation={'profile'}/>
            <form onSubmit={onSubmitForm} className={style.ProfileForm}>
                <div className={style.profileFormContainer}>
                    <div className={style.picture}>
                        <p>Upload Your Profile Picture</p>
                        <DragAndDropBox
                            image={formValue[FormKey.droppedImage]}
                            updateDroppedImage={updateDroppedImageHandler}
                            style={{
                                dragGroup: style.dragGroup,
                                dragZone: style.dragZone,
                                draggedImage: style.draggedImage
                            }}
                        />
                        {user.picture_url !== '' &&
                            <>
                                <p>You Picture</p>
                                <div className={style.profilePicture}>
                                    <figure>
                                        <img src={user.picture_url} alt="Profile Picture"/>
                                    </figure>
                                    <button type="button">
                                        <i className="fa-solid fa-trash-can"></i>
                                    </button>
                                </div>
                            </>
                        }
                    </div>
                    <div className={style.info}>
                        <div>
                            <label htmlFor={FormKey.Email}>Имейл:</label>
                            <input type="email" name={FormKey.Email} value={formValue[FormKey.Email]}
                                   onChange={changeDataHandler} readOnly={true} disabled={true}
                            />
                        </div>
                        <div>
                            <label htmlFor={FormKey.FirstName}>Име:</label>
                            <input type="text" name={FormKey.FirstName} value={formValue[FormKey.FirstName]}
                                   onChange={changeDataHandler}/>
                        </div>
                        <div>
                            <label htmlFor={FormKey.LastName}>Фамилия:</label>
                            <input type="text" name={FormKey.LastName} value={formValue[FormKey.LastName]}
                                   onChange={changeDataHandler}/>
                        </div>
                        <div>
                            <label htmlFor={FormKey.Phone}>Телефон:</label>
                            <input type={'tel:+359' + formValue[FormKey.Phone]}
                                   value={'+359' + formValue[FormKey.Phone]}
                                   onChange={changeDataHandler}/>
                        </div>
                    </div>
                </div>
                <div className={style.buttons}>
                    <button disabled={objectManager.compareObjects(_.pick(formValue, keyToCheck), user)}>Редактирай
                    </button>
                    <button className={style.cancel} type="button" onClick={resetUserEditOnClickHandler}>Отказ</button>
                </div>
            </form>
        </>
    );
}