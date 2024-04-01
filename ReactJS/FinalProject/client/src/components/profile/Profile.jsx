import {useContext, useEffect, useLayoutEffect, useState} from "react";

import style from './Profile.module.css';

import useForm from "../../hooks/useForm.js";

import {getUserById, updateUserById} from "../../services/userService.js";
import {MessageContext} from "../../contexts/MessageContext.jsx";
import compareObjects from "../../utils/compareObjects.js";

const FormKey = {
    Email: 'email',
    Username: 'username',
    FirstName: 'first_name',
    LastName: 'last_name',
    LastLogin: 'last_login',
    IsStaff: 'is_staff',
    IsSuperUser: 'is_superuser',
    IsActive: 'is_active',
}


export default function Profile() {
    const {updateMessage, updateStatus} = useContext(MessageContext);

    const [userDetails, setUserDetails] = useState({});

    const {formValue, updateFormValue, changeDataHandler, onSubmitForm,} = useForm(
        Object.fromEntries(Object.keys(FormKey).map(key => [FormKey[key], '']))
        , updateUserDataOnSubmit);


    useLayoutEffect(() => {
        getUserById(user.user_id, authToken.access)
            .then(setUserDetails)
            .catch(e => console.log(e));
    }, [authToken]);

    useEffect(() => {
        if (!compareObjects(userDetails, {})) {
            updateFormValue(userDetails)
        }
    }, [userDetails]);

    async function updateUserDataOnSubmit(data) {
        try {
            await updateUserById(formValue.id, data);
            updateMessage('Успешно успяхте да редактирате профила си');
            updateStatus('success');
        } catch (e) {
            updateMessage(e);
            updateStatus('error');
        }

    }

    const resetUserEditOnClickHandler = () => {
        updateFormValue(userDetails);
    }

    return (
        <form onSubmit={onSubmitForm} className={style.ProfileForm}>
            <div>
                <label htmlFor={FormKey.Email}>Имейл:</label>
                <input type="email" name={FormKey.Email} value={formValue[FormKey.Email]}
                       onChange={changeDataHandler}/>
            </div>
            <div>
                <label htmlFor={FormKey.Username}>Потребителско име:</label>
                <input type="text" name={FormKey.Username} value={formValue[FormKey.Username]}
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
                <label htmlFor={FormKey.LastLogin}>Последно посещение:</label>
                <input type="datetime-local" name={FormKey.LastLogin}
                       value={formValue[FormKey.LastLogin].slice(0, -1).slice(0, 16)}
                       onChange={changeDataHandler}
                       disabled={true}
                />
            </div>
            <div>
                <label htmlFor={FormKey.IsSuperUser}>Админ ли сте ?</label>
                <input type="text" name={FormKey.IsSuperUser} value={formValue[FormKey.IsSuperUser] ? 'Да' : 'Не'}
                       onChange={changeDataHandler} disabled={true}/>
            </div>
            <div>
                <label htmlFor={FormKey.IsStaff}>Служител ли сте ?</label>
                <input type="text" name={FormKey.IsStaff} value={formValue[FormKey.IsStaff] ? 'Да' : 'Не'}
                       onChange={changeDataHandler} disabled={true}/>
            </div>
            <div>
                <label htmlFor={FormKey.IsActive}>Активен ли ви е профила ?</label>
                <input type="text" name={FormKey.IsActive} value={formValue[FormKey.IsActive] ? 'Да' : 'Не'}
                       onChange={changeDataHandler} disabled={true}/>
            </div>
            <button disabled={compareObjects(formValue, userDetails)}>Редактирай</button>
            <button className={style.cancel} type="button" onClick={resetUserEditOnClickHandler}>Отказ</button>
        </form>
    );
}