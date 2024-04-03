import axios from "axios";
import Urls from "../utils/Urls.js";
import CookieManager from "../utils/cookieManager.js";

export const fetchCSRFToken = async () => {
    try {
        const response = await axios.get(Urls.CRSFToken);
        const token = response.data.csrfToken;

        CookieManager.setCookie('csrftoken', token, 1);
    } catch (error) {
        console.error('Error fetching CSRF token:', error);
    }
};
