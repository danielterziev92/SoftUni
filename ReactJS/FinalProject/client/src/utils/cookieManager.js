export const setCookie = (key, value, daysToExpire) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);

    const cookieString = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; expires=${expirationDate.toUTCString()}; path=/`;

    document.cookie = cookieString;
}

export const getCookie = (key) => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    for (const cookie of cookies) {
        const [cookieKey, cookieValue] = cookie.split('=');
        if (decodeURIComponent(cookieKey) === key) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

export const deleteCookie = (key) => {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}