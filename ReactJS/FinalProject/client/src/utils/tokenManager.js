import {getRefreshToken} from "../services/userServices.js";

const isTokenExpired = (token) => {
    if (!token) return true;

    const jwtPayload = JSON.parse(window.atob(token.split('.')[1]));


    const expirationDate = new Date(jwtPayload.exp * 1000);
    console.log('Token Expiration Date:', expirationDate.toISOString()); // Log in ISO format, adjust as needed

    return Date.now() >= jwtPayload.exp * 1000;
};

const getNewTokens = async (refreshToken) => {
    return await getRefreshToken(refreshToken);
}

const tokenManager = {isTokenExpired, getNewTokens}

export default tokenManager;