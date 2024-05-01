import {useReducer} from "react";

const initialRegisterState = {
    validation: {
        isValidEmail: false,
        focusEmail: true,
        isValidPassword: false,
        focusPassword: false,
        isValidPasswordMatch: false,
        focusPasswordMatch: false,
    }
}

export const reducerActions = {
    setValidEmail: 'SET_VALID_EMAIL',
    setInvalidEmail: 'SET_INVALID_EMAIL',
    setFocusEmail: 'SET_FOCUS_EMAIL',
    setValidPassword: 'SET_VALID_PASSWORD',
    setInvalidPassword: 'SET_INVALID_PASSWORD',
    setFocusPassword: 'SET_FOCUS_PASSWORD',
    setValidPasswordMatch: 'SET_VALID_PASSWORD_MATCH',
    setInvalidPasswordMatch: 'SET_INVALID_PASSWORD_MATCH',
    setFocusPasswordMatch: 'SET_FOCUS_PASSWORD_MATCH',
}

const registerReducer = (state, action) => {
    switch (action.type) {
        case reducerActions.setValidEmail:
            return {...state, validation: {...state, isValidEmail: true}};
        case reducerActions.setInvalidEmail:
            return {...state, validation: {...state, isValidEmail: false}};
        case reducerActions.setFocusEmail:
            return {...state, validation: {...state, focusEmail: true}};
        case reducerActions.setValidPassword:
            return {...state, validation: {...state, isValidPassword: true}};
        case reducerActions.setInvalidPassword:
            return {...state, validation: {...state, isValidPassword: false}};
        case reducerActions.setFocusPassword:
            return {...state, validation: {...state, focusPassword: true}};
        case reducerActions.setValidPasswordMatch:
            return {...state, validation: {...state, isValidPasswordMatch: true}};
        case reducerActions.setInvalidPasswordMatch:
            return {...state, validation: {...state, isValidPasswordMatch: false}};
        case reducerActions.setFocusPasswordMatch:
            return {...state, validation: {...state, focusPasswordMatch: true}};

        default:
            return state;
    }
}

const useRegisterReducer = () => {
    return useReducer(registerReducer, initialRegisterState);
};

export default useRegisterReducer;