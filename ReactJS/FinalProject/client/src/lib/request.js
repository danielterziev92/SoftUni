function getOptions(data, token) {
    const options = {};

    options.headers = {
        'Content-type': 'application/json',
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    if (token) {
        options.headers = {
            ...options.headers,
            Authorization: `Bearer ${token}`,
        }
    }

    return options
}

const request = async (method, url, data, token) => {
    const response = await fetch(url, {
        ...getOptions(data, token),
        method,
    });

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
};


export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const patch = request.bind(null, 'PATCH');
export const remove = request.bind(null, 'DELETE');