const pathToUrl = (path, params) => {
    return Object.keys(params).reduce((result, param) => {
        return result.replace(`:${param}`, params[param]);
    }, path);
};

export default pathToUrl;