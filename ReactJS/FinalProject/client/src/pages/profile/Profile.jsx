import {useLayoutEffect, useState} from "react";
import {useSelector} from "react-redux";

import HeaderContent from "../../components/header-content/HeaderContent.jsx";

import {selectUser} from "../../features/user/userSlice.js";

import style from './Profile.module.css';

import useForm from "../../hooks/useForm.js";

import objectManager from "../../utils/compareObjects.js";
import {Form} from "react-router-dom";

const FormKey = {
    Email: 'email',
    droppedImage: 'image',
    FirstName: 'first_name',
    LastName: 'last_name',
    Phone: 'phone',
    CompanyName: 'company_name',
}


export default function Profile() {
    const user = useSelector(selectUser);

    const {formValue, updateFormValueByKeyAndValue, changeDataHandler, onSubmitForm,} = useForm(
        {
            ...Object.fromEntries(Object.keys(FormKey)
                .map(key => [FormKey[key], key === 'droppedImage' ? [] : ''])),
            ...user
        }
        , updateUserDataOnSubmit
    );

    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
        if (!files || files.length === 0) return;

        const imageFile = files[0];
        if (!imageFile || !imageFile.type.startsWith('image/')) return;

        updateFormValueByKeyAndValue(FormKey.droppedImage, [imageFile]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleFileInputChange = (e) => {
        handleDrop(e);
    };

    const removeImage = (e) => {
        e.preventDefault();
        updateFormValueByKeyAndValue(FormKey.droppedImage, []);
    }

    async function updateUserDataOnSubmit(data) {
        // try {
        //     await updateUserById(formValue.id, data);
        //     updateMessage('Успешно успяхте да редактирате профила си');
        //     updateStatus('success');
        // } catch (e) {
        //     updateMessage(e);
        //     updateStatus('error');
        // }

    }

    const resetUserEditOnClickHandler = () => {
        console.log(formValue)
        // updateFormValue(user);
    }

    return (
        <>
            <HeaderContent title={'Профил'} navigation={'profile'}/>
            <form onSubmit={onSubmitForm} className={style.ProfileForm}>
                <div className={style.profileFormContainer}>
                    <div className={style.picture}>
                        <p>Add Profile Picture</p>

                        <div className={style.dragGroup}>
                            <div className={style.dragZone}
                                 onDrop={(e) => handleDrop(e)}
                                 onDragOver={handleDragOver}
                            >
                                <i className="fa-regular fa-clone"></i>
                                Drop & drop Image here or
                                <span>Select</span>
                                <input type="file"
                                       onChange={handleFileInputChange}
                                       onClick={(e) => e.target.value = null}
                                       multiple={false}
                                />
                            </div>
                            {formValue[FormKey.droppedImage] && formValue[FormKey.droppedImage].length > 0 &&
                                <div className={style.droppedImage}>
                                    {formValue[FormKey.droppedImage].map((image, index) => (
                                        <div key={index}>
                                            <i className="fa-solid fa-circle-xmark" onClick={removeImage}></i>
                                            <img src={URL.createObjectURL(image)} alt={`Dropped Image ${index + 1}`}/>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                    <div className={style.info}>
                        <div>
                            <label htmlFor={FormKey.Email}>Имейл:</label>
                            <input type="email" name={FormKey.Email} value={formValue[FormKey.Email]}
                                   onChange={changeDataHandler} data-lpignore="true"
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
                {/*<div>*/}
                {/*    <label htmlFor={FormKey.LastLogin}>Последно посещение:</label>*/}
                {/*    <input type="datetime-local" name={FormKey.LastLogin}*/}
                {/*           value={formValue[FormKey.LastLogin].slice(0, -1).slice(0, 16)}*/}
                {/*           onChange={changeDataHandler}*/}
                {/*           disabled={true}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <label htmlFor={FormKey.IsSuperUser}>Админ ли сте ?</label>*/}
                {/*    <input type="text" name={FormKey.IsSuperUser} value={formValue[FormKey.IsSuperUser] ? 'Да' : 'Не'}*/}
                {/*           onChange={changeDataHandler} disabled={true}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <label htmlFor={FormKey.IsStaff}>Служител ли сте ?</label>*/}
                {/*    <input type="text" name={FormKey.IsStaff} value={formValue[FormKey.IsStaff] ? 'Да' : 'Не'}*/}
                {/*           onChange={changeDataHandler} disabled={true}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <label htmlFor={FormKey.IsActive}>Активен ли ви е профила ?</label>*/}
                {/*    <input type="text" name={FormKey.IsActive} value={formValue[FormKey.IsActive] ? 'Да' : 'Не'}*/}
                {/*           onChange={changeDataHandler} disabled={true}/>*/}
                {/*</div>*/}
                <div className={style.buttons}>
                    <button disabled={objectManager.compareObjects(formValue, user)}>Редактирай</button>
                    <button className={style.cancel} type="button" onClick={resetUserEditOnClickHandler}>Отказ</button>
                </div>
            </form>
        </>
    );
}