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


// export const fetchUserData = async () => {
//     const axiosConfig = {
//         headers: {
//             'Content-Type': 'application/json',
//             'X-CSRFToken': CookieManager.getCookie('csrftoken'),
//         },
//         withCredentials: true,
//     };
//
//     const response = await axios.get(Urls.user.authentication, axiosConfig);
//     console.log(response.data)
// }