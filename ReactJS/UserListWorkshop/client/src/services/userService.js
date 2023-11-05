const baseUrl = 'http://localhost:3030/jsonstore/users'

function prepareBodyData(data, newCreatedAt, newUpdatedAt) {
    return {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        imageUrl: data.imageUrl,
        phoneNumber: data.phoneNumber,
        createdAt: newCreatedAt,
        updatedAt: newUpdatedAt,
        address: {
            country: data.country,
            city: data.city,
            street: data.street,
            streetNumber: data.streetNumber
        }
    }
}

export const getAllUsers = async () => {
    const response = await fetch(baseUrl);

    if (!response.ok) {
        throw new Error('Something went wrong');
    }

    const result = await response.json();
    return Object.values(result);
}

export const getUser = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`)

    if (!response.ok) {
        throw new Error('Something went wrong')
    }

    return await response.json()
}

export const createUser = async (data) => {
    const bodyData = prepareBodyData(data, new Date().toISOString(), new Date().toISOString())
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(bodyData),
    }

    const response = await fetch(`${baseUrl}`, requestOptions);
    return response.json()
}

export const updateUser = async (userId, userDetails) => {
    const bodyData = prepareBodyData(userDetails, userDetails.createdAt, new Date().toISOString())
    const requestOptions = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(bodyData)
    }

    const response = await fetch(`${baseUrl}/${userId}`, requestOptions);
    return response.json();
}

export const deleteUser = async (userId) => {
    const requestOptions = {method: 'DELETE'}

    const response = await fetch(`${baseUrl}/${userId}`, requestOptions);
    return response.json();
}