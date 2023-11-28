const checkToken = (token) => {
    if (!token) return;

    const jwtPayload = JSON.parse(window.atob(token.split('.')[1]))
    return Date.now() >= jwtPayload.exp * 1000;
};

export default checkToken;