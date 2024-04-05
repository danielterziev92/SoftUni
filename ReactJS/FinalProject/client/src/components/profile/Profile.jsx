import {useLayoutEffect} from "react";
import {useSelector} from "react-redux";

import HeaderContent from "../header-content/HeaderContent.jsx";

import {selectUser} from "../../features/user/userSlice.js";

import style from './Profile.module.css';

import useForm from "../../hooks/useForm.js";

import objectManager from "../../utils/compareObjects.js";
import DragAndDrop from "../DragAndDrop.jsx";

const FormKey = {
    Email: 'email',
    FirstName: 'first_name',
    LastName: 'last_name',
    Phone: 'phone',
    CompanyName: 'company_name',
}


export default function Profile() {
    const user = useSelector(selectUser);

    const {formValue, updateFormValue, changeDataHandler, onSubmitForm,} = useForm(user, updateUserDataOnSubmit
    );


    useLayoutEffect(() => {
        console.log(user)
    }, []);

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
                <div>
                    <label htmlFor={FormKey.Email}>Имейл:</label>
                    <input type="email" name={FormKey.Email} value={formValue[FormKey.Email]}
                           onChange={changeDataHandler}/>
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
                    <input type={'tel:+359' + formValue[FormKey.Phone]} value={'+359' + formValue[FormKey.Phone]}
                           onChange={changeDataHandler}/>
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
                <button disabled={objectManager.compareObjects(formValue, user)}>Редактирай</button>
                <button className={style.cancel} type="button" onClick={resetUserEditOnClickHandler}>Отказ</button>
            </form>
            <DragAndDrop/>
        </>
    );
}