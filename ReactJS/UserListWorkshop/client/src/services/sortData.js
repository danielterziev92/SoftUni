import {getAllUsers} from "./userService.js";

export const sortDataByFirstName = (data) => {
    return data.slice().sort((a, b) => a.firstName.localeCompare(b.firstName))
}

export const sortDataByLastName = (data) => {
    return data.slice().sort((a, b) => a.lastName.localeCompare(b.lastName))
}

export const sortDataByEmail = (data) => {
    return data.slice().sort((a, b) => a.email.localeCompare(b.email))
}

export const sortDataByPhone = (data) => {
    return data.slice().sort((a, b) => a.phoneNumber.localeCompare(b.phoneNumber))
}

export const sortDataByCreatedAt = (data) => {
    return data.slice().sort((a, b) => a.createdAt - b.createdAt)
}

export const filteredData = (users, searchedValue, searchedCriteria) => {
    return users.filter(user => user[searchedCriteria] === searchedValue)
}