import Urls from "../utils/Urls.js";

import * as request from '../lib/request.js'

export const loginUser = async (data) => {
    return request.post(Urls.token, data);
}