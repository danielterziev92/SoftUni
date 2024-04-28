import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-hot-toast";

import _ from 'lodash';

import {deleteProfilePictureAction, updateProfileDataAction} from "../../features/user/userActions.js";

import HeaderContent from "../../components/header-content/HeaderContent.jsx";
import DragAndDropBox from "../../components/drag-and-drop-box/DragAndDropBox.jsx";
import MessageBoxModal from "../../components/message-box-modal/MessageBoxModal.jsx";

import style from './Profile.module.css';

import useForm from "../../hooks/useForm.js";

import objectManager from "../../utils/compareObjects.js";
import Paths from "../../utils/Paths.js";

const HeaderContentTile = 'Profile'

const FormKey = {
    Email: 'email',
    FirstName: 'first_name',
    LastName: 'last_name',
    Phone: 'phone',
    CompanyId: 'company_id',
    PictureUrl: 'picture_url'
}

const headerContentNavigations = [
    {name: 'Dashbord', to: Paths.dashboard, active: true},
    {name: 'Profile', to: Paths.profile, active: false},
]

export const keyToCheck = ['id', 'email', 'first_name', 'last_name', 'phone', 'picture_url'];
export const keyToSend = ['first_name', 'last_name', 'phone', 'picture_url', 'image'];

export default function Profile() {
    const user = useSelector(state => state.user.data);
    const dispatch = useDispatch();

    const [showDeleteProfilePictureModal, setShowDeleteProfilePictureModal] = useState(false);
    const [canSubmitForm, setCanSubmitForm] = useState(true);
    const [droppedImage, setDroppedImage] = useState(null);

    const {formValue, updateFormValue, updateFormValueByKeyAndValue, changeDataHandler, onSubmitForm,} = useForm(
        {
            ...Object.fromEntries(Object.keys(FormKey)
                .map(key => [FormKey[key], ''])),
            ...user
        }
        , updateUserDataOnSubmit
    );

    useEffect(() => {
        updateFormValue(user);
    }, [user])

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

        const toastId = toast.loading('Updating...');

        const response = await dispatch(updateProfileDataAction({data, droppedImage}));

        if (response.payload.status === 200) {
            updateFormValue({...formValue, ...response.payload.data.data})

            toast.success('Profile updated successfully.');
            setDroppedImage(null);
        } else {
            toast.error('Something went wrong.');
        }

        toast.dismiss(toastId);
    }

    async function deleteProfilePictureHandler() {

        const toastId = toast.loading('Deleting...');

        const response = await dispatch(deleteProfilePictureAction(formValue));

        if (response.payload.status === 200) {
            updateFormValueByKeyAndValue(FormKey.PictureUrl, '');
            setDroppedImage(null);
            setShowDeleteProfilePictureModal(false);
            toast.success(response.payload.data.message);
        } else {
            toast.error(response.payload.data.message);
        }

        toast.dismiss(toastId);
    }

    const resetUserEditOnClickHandler = () => {
        updateFormValue({...formValue, ...user});
    }

    return (
        <>
            {showDeleteProfilePictureModal &&
                <MessageBoxModal
                    title={'Delete Profile Picture'}
                    body={'Would you like to delete your profile?'}
                    successButtonMessage={'Yes'}
                    errorButtonMessage={'No'}
                    successButtonHandler={deleteProfilePictureHandler}
                    errorButtonHandler={() => setShowDeleteProfilePictureModal(false)}
                    closeModalHanlder={() => setShowDeleteProfilePictureModal(false)}
                />
            }
            <HeaderContent title={HeaderContentTile} navigations={headerContentNavigations} refreshFunc={'asd'}/>
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
                                            onClick={() => setShowDeleteProfilePictureModal(true)}
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
    );
}