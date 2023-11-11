const baseUrl = 'http://localhost:8000/api'

const errorMessage = 'Something went wrong. Please try again later or contact with Administrator'


export const getAllProducts = async () => {
    const response = await fetch(`${baseUrl}/products`);

    if (!response.ok) {
        throw new Error(errorMessage)
    }

    return await response.json();
}

export const getProductById = async (productId) => {
    const response = await fetch(`${baseUrl}/products/${productId}`);

    if (!response.ok) {
        throw new Error(errorMessage)
    }

    return await response.json();
}