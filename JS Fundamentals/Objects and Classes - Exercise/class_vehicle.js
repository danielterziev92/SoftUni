class Vehicle{
    constructor(type, model, parts, fuel, drive) {
        this.type = type;
        this.model = model;
        this.parts = {engine: parts.engine, power: parts.power, quality: parts.engine * parts.power};
        this.fuel = fuel;
    }

    drive(quality){
        this.fuel = this.fuel - quality;
    }
}

// let parts = { engine: 6, power: 100 };
// let vehicle = new Vehicle('a', 'b', parts, 200);
// vehicle.drive(100);
// console.log(vehicle.fuel);
// console.log(vehicle.parts.quality);


let parts = {engine: 9, power: 500};
let vehicle = new Vehicle('l', 'k', parts, 840);
vehicle.drive(20);
console.log(vehicle.fuel);