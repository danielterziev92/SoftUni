import {json} from "react-router-dom";

const errorMessage = 'Something went wrong. Please try again later or contact with Administrator'

function getOptions(data) {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'content-type': 'application/json',
        };
    }

    return options
}

const request = async (method, url, data) => {
    const response = await fetch(url, {
        ...getOptions(data),
        method,
    });

    // if (!response.ok) {
    //     try {
    //         const errorResponse = await response.json();
    //     } catch (e) {
    //         throw new Error('Server error');
    //     }
    // }

    return await response.json()
};


export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const patch = request.bind(null, 'PATCH');
export const remove = request.bind(null, 'DELETE');