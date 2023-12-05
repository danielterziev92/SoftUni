import * as request from '../lib/request.js'
import Urls from "../utils/Urls.js";
import pathToUrl from "../utils/pathToUrl.js";

export const getAllGroups = async () => {
    return request.get(Urls.groups)
}

export const updateGroupById = async (id, data) => {
    return request.patch(pathToUrl(Urls.groupDetail, {id}), data);
}

export const deleteGroupById = async (id) => {
    return request.remove(pathToUrl(Urls.groupDelete, {id}));
}