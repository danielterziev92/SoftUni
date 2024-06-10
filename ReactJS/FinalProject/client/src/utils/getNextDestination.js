import Paths from "./Paths.js";


export default function getNextDestination(location) {
    const {search} = location;
    const match = search.match(/(?<=\?next=).*/);

    if (match) return match;

    return Paths.dashboard;
}