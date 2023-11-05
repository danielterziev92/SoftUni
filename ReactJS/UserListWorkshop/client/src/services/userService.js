const baseUrl = 'http://localhost:3030/jsonstore/users'

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