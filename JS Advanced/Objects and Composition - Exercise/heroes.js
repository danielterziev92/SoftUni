function solve() {
    return {
        mage: function (name) {
            return {
                name,
                health: 100,
                mana: 100,
                cast: function (spell) {
                    console.log(`${this.name} cast ${spell}`);
                    this.mana--;
                }
            }
        },
        fighter: function (name) {
            return {
                name,
                health: 100,
                stamina: 100,
                fight: function () {
                    console.log(`${this.name} slashes at the foe!`)
                    this.stamina--;
                }
            }
        }
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);