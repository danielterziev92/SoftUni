function solve(input){
    let result = {};

    for (let i = 0; i < input.length; i+=2){
        let resource = input[i];
        let quantity = Number(input[i+1]);
        let oldQty = 0;
        if (result.hasOwnProperty(resource)){
            oldQty = result[resource]
        }
        result[resource] = quantity + oldQty;
    }

    for (let [resource, quantity] of Object.entries(result)){
        console.log(`${resource} -> ${quantity}`);
    }
}

solve(['Gold', '155', 'Silver', '10', 'Copper', '17']);
solve(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);