const setCookie = (key, value, daysToExpire) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);

    const cookieOptions = {
        expires: expirationDate.toUTCString(),
        path: '/',
        secure: true,
        sameSite: 'None',
    };

    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; ${Object.entries(cookieOptions).map(([k, v]) => `${k}=${v}`).join('; ')}`;
}


const getCookie = (key) => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    for (const cookie of cookies) {
        const [cookieKey, cookieValue] = cookie.split('=');
        if (decodeURIComponent(cookieKey) === key) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

const deleteCookie = (key) => {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=None; Secure;`;
}

const cookieManager = {getCookie, setCookie, deleteCookie}
export default cookieManager;