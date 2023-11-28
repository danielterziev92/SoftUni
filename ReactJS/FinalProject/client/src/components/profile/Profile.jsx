import {useContext, useEffect, useRef, useState} from "react";
import {getUserById} from "../../services/userServices.js";
import {AuthenticationContext} from "../../contexts/AuthenticationContext.jsx";
import useRefreshToken from "../../hooks/useRefreshToken.js";
import useForm from "../../hooks/useForm.js";

const FormKey = {
    Username: 'username',
    LastLogin: 'last_login',
    IsSuperUser: 'is_superuser',
    FirstName: 'first_name',
    LastName: 'last_name',
    Email: 'email',
    IsActive: 'is_active',
}


export default function Profile() {
    const {user,} = useContext(AuthenticationContext);
    const {newToken} = useRefreshToken();
    const isFirstRender = useRef(true);
    const {formValue, updateFormValue, changeDataHandler, onSubmitForm,} = useForm({});


    useEffect(() => {
        if (isFirstRender.current) {
            console.log('first render')
            isFirstRender.current = false;
            return;
        }

        getUserById(user.user_id, newToken.access)
            .then(updateFormValue)
            .catch(e => console.log(e));
    }, [newToken]);


    return (
        <>
            <form onSubmit={onSubmitForm}>

            </form>
        </>
    );
}