function solve(params) {
    const products = params.shift().split('!');

    const actions = {
        'Urgent': function (item) {
            if (products.filter(product => product === item).length === 0) {
                products.unshift(item)
            }
        },
        'Unnecessary': function (item) {
            if(products.includes(item)){}
        }
    }
}

solve(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);