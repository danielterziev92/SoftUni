function orderArrayByKey(arr, key, order) {
    if (typeof arr[0][key] === 'number') {
        return sortByNumber(arr, key, order);
    } else if (typeof arr[0][key] === 'string') {
        return sortByString(arr, key, order);
    } else {
        return 'Unsupported key type for sorting';
    }


    function sortByNumber(arr, key, order = 'asc') {
        if (order === 'asc') {
            return arr.slice().sort((a, b) => a[key] - b[key]);
        }

        return arr.slice().sort((a, b) => b[key] - a[key])
    }

    function sortByString(arr, key, order) {
        if (order === 'asc') {
            return arr.slice().sort((a, b) => a[key].localeCompare(b[key]));
        }

        return arr.slice().sort((a, b) => b[key].localeCompare(a[key]))
    }
}

export default orderArrayByKey;