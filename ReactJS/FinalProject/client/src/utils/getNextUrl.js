import Paths from "./Paths.js";

export default function getNextUrl(location) {
    const {search} = location;
    const match = search.match(/(?<=\?next=).*/);
    if (match) return match[0];

    return Paths.dashboard;
}