import * as request from '../lib/request.js'
import Urls from "../utils/Urls.js";

export const getAllGroups = async () => {
    return request.get(Urls.groups)
}