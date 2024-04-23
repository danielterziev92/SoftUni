import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import axios from "axios";

import _ from 'lodash';

import HeaderContent from "../../components/header-content/HeaderContent.jsx";
import DragAndDropBox from "../../components/drag-and-drop-box/DragAndDropBox.jsx";
import MessageBoxModal from "../../components/message-box-modal/MessageBoxModal.jsx";
import Spinner from "../../components/spinner/Spinner.jsx";

import {
    deleteProfilePictureFailure,
    deleteProfilePicturePending,
    deleteProfilePictureSuccess, updateUserDataFailure,
    updateUserDataPending
} from "../../features/user/userSlice.js";
import {updateUserDataAction} from "../../features/user/userActions.js";
import {addMessage} from "../../features/message/messageSlice.js";

import style from './Profile.module.css';

import useForm from "../../hooks/useForm.js";

import objectManager from "../../utils/compareObjects.js";
import Urls from "../../utils/Urls.js";
import CookieManager from "../../utils/cookieManager.js";

const HeaderContentTile = 'Profile'

const FormKey = {
    Email: 'email',
    FirstName: 'first_name',
    LastName: 'last_name',
    Phone: 'phone',
    CompanyId: 'company_id',
    PictureUrl: 'picture_url'
}

const keyToCheck = ['id', 'email', 'first_name', 'last_name', 'phone', 'picture_url'];
const keyToSend = ['first_name', 'last_name', 'phone', 'picture_url', 'image'];

export default function Profile() {
    const user = useSelector(state => state.user.data);
    const isStoreLoading = useSelector(state => state.user.loading);
    const dispatch = useDispatch();

    const [isDeleteProfilePicture, setIsDeleteProfilePicture] = useState(false);
    const [canSubmitForm, setCanSubmitForm] = useState(true);
    const [droppedImage, setDroppedImage] = useState(null);

    const {formValue, updateFormValue, changeDataHandler, onSubmitForm,} = useForm(
        {
            ...Object.fromEntries(Object.keys(FormKey)
                .map(key => [FormKey[key], ''])),
            ...user
        }
        , updateUserDataOnSubmit
    );

    useEffect(() => {
        if (droppedImage || !objectManager.compareObjects(_.pick(formValue, keyToCheck), user)) {
            setCanSubmitForm(false);
            return
        }

        setCanSubmitForm(true);
    }, [formValue, droppedImage]);

    function updateDroppedImageHandler(image) {
        setDroppedImage(image);
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
            const userData = _.pick(data, keyToSend);

            const requestBody = new FormData();
            requestBody.append('userData', JSON.stringify(userData));
            if (droppedImage) {
                requestBody.append('image', droppedImage);
            }

            dispatch(updateUserDataPending());

            await axios.put(Urls.user.update, requestBody, axiosConfig).then(response => {
                const {message, data} = response.data;
                dispatch(updateUserDataAction(data));
                addMessage(message);
                setDroppedImage(null);
            })
        } catch (error) {
            addMessage(error);
        }
    }

    async function deleteProfilePictureHandler() {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': CookieManager.getCookie('csrftoken'),
            },
            withCredentials: true,
        };
        dispatch(deleteProfilePicturePending());

        const response = await axios.delete(Urls.user.deleteProfilePicture, axiosConfig);

        if (response.status === 202 || response.status === 404) dispatch(deleteProfilePictureFailure(response.data));
        if (response.status === 200) dispatch(deleteProfilePictureSuccess(response.data));

        setIsDeleteProfilePicture(false);
    }

    const resetUserEditOnClickHandler = () => {
        updateFormValue({...formValue, ...user});
    }

    return (
        <>
            {isStoreLoading
                ? <Spinner/>
                : (<>
                        {isDeleteProfilePicture &&
                            <MessageBoxModal
                                title={'Delete Profile Picture'}
                                body={'Would you like to delete your profile?'}
                                successButtonMessage={'Yes'}
                                errorButtonMessage={'No'}
                                successButtonHandler={deleteProfilePictureHandler}
                                errorButtonHandler={() => setIsDeleteProfilePicture(false)}
                                closeModalHanlder={() => setIsDeleteProfilePicture(false)}
                            />
                        }
                        <HeaderContent title={HeaderContentTile} navigation={'profile'}/>
                        <form onSubmit={onSubmitForm} className={style.ProfileForm}>
                            <div className={style.profileFormContainer}>
                                <div className={style.picture}>
                                    <p>Upload Your Profile Picture</p>
                                    <DragAndDropBox
                                        image={droppedImage}
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
                                                <button type="button"
                                                        onClick={() => setIsDeleteProfilePicture(true)}
                                                >
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </button>
                                            </div>
                                        </>
                                    }
                                </div>
                                <div className={style.info}>
                                    <div>
                                        <label htmlFor={FormKey.Email}>Email:</label>
                                        <input type="email" name={FormKey.Email} value={formValue[FormKey.Email]}
                                               onChange={changeDataHandler} readOnly={true} disabled={true}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor={FormKey.FirstName}>First Name:</label>
                                        <input type="text" name={FormKey.FirstName} value={formValue[FormKey.FirstName]}
                                               onChange={changeDataHandler}/>
                                    </div>
                                    <div>
                                        <label htmlFor={FormKey.LastName}>Last Name:</label>
                                        <input type="text" name={FormKey.LastName} value={formValue[FormKey.LastName]}
                                               onChange={changeDataHandler}/>
                                    </div>
                                    <div>
                                        <label htmlFor={FormKey.Phone}>Phone Number:</label>
                                        <input type={'tel:+359' + formValue[FormKey.Phone]}
                                               value={'+359' + formValue[FormKey.Phone]}
                                               onChange={changeDataHandler}/>
                                    </div>
                                </div>
                            </div>
                            <div className={style.buttons}>
                                <button disabled={canSubmitForm}>
                                    Редактирай
                                </button>
                                <button className={style.cancel} type="button" onClick={resetUserEditOnClickHandler}
                                        disabled={canSubmitForm}>
                                    Отказ
                                </button>
                            </div>
                        </form>
                    </>
                )
            }
        </>
    );
}