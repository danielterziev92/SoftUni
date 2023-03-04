function cityTaxes(name, population, treasury) {
    const cityInfo = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate)
        },
        applyGrowth(percent) {
            this.population += Math.floor((this.population / 100) * percent)
        },
        applyRecession(percent) {
            this.treasury -= Math.floor((this.treasury / 100) * percent)
        },
    }

    return cityInfo;
}


// const city =
//     cityTaxes('Tortuga',
//         7000,
//         15000);
// console.log(city);

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);