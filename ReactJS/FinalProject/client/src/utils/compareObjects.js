export default function compareObjects(firstObj, secondObj) {
    const sortedFirstObject = Object.fromEntries(
        Object.entries(firstObj).sort((a, b) => a[0].localeCompare(b[0]))
    );

    const sortedSecondObject = Object.fromEntries(
        Object.entries(secondObj).sort((a, b) => a[0].localeCompare(b[0]))
    );

    return JSON.stringify(sortedFirstObject) === JSON.stringify(sortedSecondObject);
}